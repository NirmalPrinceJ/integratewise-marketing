"""
IntegrateWise OS API Client Example (Python)

Demonstrates API usage for tasks, notes, conversations, plans,
and agent invocation.
"""

import os
import requests
from typing import Optional, Dict, Any, List


class IntegrateWiseClient:
    def __init__(self, api_key: str, base_url: str = 'https://api.integratewise.co/v1'):
        self.api_key = api_key
        self.base_url = base_url
        self.session = requests.Session()
        self.session.headers.update({
            'Authorization': f'Bearer {api_key}',
            'Content-Type': 'application/json'
        })

    def _request(self, method: str, path: str, data: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        url = f'{self.base_url}{path}'
        response = self.session.request(method, url, json=data)
        response.raise_for_status()
        return response.json()

    # Tasks API
    def list_tasks(self, limit: Optional[int] = None, cursor: Optional[str] = None,
                   order: Optional[str] = None, filters: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        params = {}
        if limit:
            params['limit'] = limit
        if cursor:
            params['cursor'] = cursor
        if order:
            params['order'] = order
        
        # Build filter query params
        if filters:
            for field, condition in filters.items():
                for op, value in condition.items():
                    if isinstance(value, list):
                        value = ','.join(value)
                    params[f'filter[{field}][{op}]'] = value

        query_string = '&'.join([f'{k}={v}' for k, v in params.items()])
        return self._request('GET', f'/tasks?{query_string}')

    def get_task(self, task_id: str, include: Optional[List[str]] = None) -> Dict[str, Any]:
        params = {}
        if include:
            params['include'] = ','.join(include)
        
        query_string = '&'.join([f'{k}={v}' for k, v in params.items()])
        path = f'/tasks/{task_id}'
        if query_string:
            path += f'?{query_string}'
        return self._request('GET', path)

    def create_task(self, task: Dict[str, Any]) -> Dict[str, Any]:
        return self._request('POST', '/tasks', {'data': task})

    def update_task(self, task_id: str, updates: Dict[str, Any]) -> Dict[str, Any]:
        return self._request('PATCH', f'/tasks/{task_id}', {'data': updates})

    # Notes API
    def list_notes(self, limit: Optional[int] = None, filters: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        params = {}
        if limit:
            params['limit'] = limit
        
        if filters:
            for field, condition in filters.items():
                for op, value in condition.items():
                    if isinstance(value, list):
                        value = ','.join(value)
                    params[f'filter[{field}][{op}]'] = value

        query_string = '&'.join([f'{k}={v}' for k, v in params.items()])
        return self._request('GET', f'/notes?{query_string}')

    def create_note(self, note: Dict[str, Any]) -> Dict[str, Any]:
        return self._request('POST', '/notes', {'data': note})

    # Agent Invocation API
    def invoke_agent(self, agent_id: str, input_data: Dict[str, Any],
                     options: Optional[Dict[str, Any]] = None) -> Dict[str, Any]:
        payload = {
            'input': input_data,
            'options': options or {}
        }
        return self._request('POST', f'/agents/{agent_id}/invoke', payload)

    def get_invocation_status(self, invocation_id: str) -> Dict[str, Any]:
        return self._request('GET', f'/agents/invocations/{invocation_id}')


# Usage examples
async def examples():
    client = IntegrateWiseClient(api_key=os.environ.get('INTEGRATEWISE_API_KEY'))

    # List tasks
    tasks = client.list_tasks(
        limit=50,
        filters={
            'status': {'eq': 'in_progress'},
            'priority': {'in': ['high', 'urgent']}
        },
        order='desc'
    )
    print('Tasks:', tasks['data'])

    # Get task with relationships
    task = client.get_task('550e8400-e29b-41d4-a716-446655440000', include=['relationships'])
    print('Task:', task['data'])

    # Create task
    new_task = client.create_task({
        'title': 'New task',
        'status': 'pending',
        'priority': 'medium',
        'source_tool': 'api',
        'external_ref': 'api-ref-123'
    })
    print('Created task:', new_task['data'])

    # Invoke agent
    invocation = client.invoke_agent('planning-agent', {
        'query': 'Create a plan for Q4 product launch',
        'context_entity_ids': [task['data']['id']]
    }, {
        'timeout': 300,
        'approval_required': True
    })
    print('Invocation:', invocation['data'])

    # Check invocation status
    status = client.get_invocation_status(invocation['data']['invocation_id'])
    print('Status:', status['data'])


if __name__ == '__main__':
    import asyncio
    asyncio.run(examples())

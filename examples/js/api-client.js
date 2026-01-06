/**
 * IntegrateWise OS API Client Example (JavaScript/TypeScript)
 * 
 * Demonstrates API usage for tasks, notes, conversations, plans,
 * and agent invocation.
 */

class IntegrateWiseClient {
  constructor(config) {
    this.apiKey = config.apiKey;
    this.baseURL = config.baseURL || 'https://api.integratewise.co/v1';
  }

  async request(method, path, data = null) {
    const url = `${this.baseURL}${path}`;
    const options = {
      method,
      headers: {
        'Authorization': `Bearer ${this.apiKey}`,
        'Content-Type': 'application/json'
      }
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);
    
    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error?.message || `HTTP ${response.status}`);
    }

    return response.json();
  }

  // Tasks API
  async listTasks(params = {}) {
    const query = new URLSearchParams();
    if (params.limit) query.append('limit', params.limit);
    if (params.cursor) query.append('cursor', params.cursor);
    if (params.order) query.append('order', params.order);
    
    // Build filter query params
    if (params.filter) {
      Object.entries(params.filter).forEach(([field, condition]) => {
        Object.entries(condition).forEach(([op, value]) => {
          query.append(`filter[${field}][${op}]`, Array.isArray(value) ? value.join(',') : value);
        });
      });
    }

    return this.request('GET', `/tasks?${query.toString()}`);
  }

  async getTask(id, options = {}) {
    const query = new URLSearchParams();
    if (options.include) {
      query.append('include', options.include.join(','));
    }
    const path = `/tasks/${id}${query.toString() ? '?' + query.toString() : ''}`;
    return this.request('GET', path);
  }

  async createTask(task) {
    return this.request('POST', '/tasks', { data: task });
  }

  async updateTask(id, updates) {
    return this.request('PATCH', `/tasks/${id}`, { data: updates });
  }

  // Notes API
  async listNotes(params = {}) {
    const query = new URLSearchParams();
    if (params.limit) query.append('limit', params.limit);
    if (params.filter) {
      Object.entries(params.filter).forEach(([field, condition]) => {
        Object.entries(condition).forEach(([op, value]) => {
          query.append(`filter[${field}][${op}]`, Array.isArray(value) ? value.join(',') : value);
        });
      });
    }
    return this.request('GET', `/notes?${query.toString()}`);
  }

  async createNote(note) {
    return this.request('POST', '/notes', { data: note });
  }

  // Agent Invocation API
  async invokeAgent(agentId, input, options = {}) {
    return this.request('POST', `/agents/${agentId}/invoke`, {
      input,
      options
    });
  }

  async getInvocationStatus(invocationId) {
    return this.request('GET', `/agents/invocations/${invocationId}`);
  }
}

// Usage examples
async function examples() {
  const client = new IntegrateWiseClient({
    apiKey: process.env.INTEGRATEWISE_API_KEY
  });

  // List tasks
  const tasks = await client.listTasks({
    limit: 50,
    filter: {
      status: { eq: 'in_progress' },
      priority: { in: ['high', 'urgent'] }
    },
    order: 'desc'
  });
  console.log('Tasks:', tasks.data);

  // Get task with relationships
  const task = await client.getTask('550e8400-e29b-41d4-a716-446655440000', {
    include: ['relationships']
  });
  console.log('Task:', task.data);

  // Create task
  const newTask = await client.createTask({
    title: 'New task',
    status: 'pending',
    priority: 'medium',
    source_tool: 'api',
    external_ref: 'api-ref-123'
  });
  console.log('Created task:', newTask.data);

  // Invoke agent
  const invocation = await client.invokeAgent('planning-agent', {
    query: 'Create a plan for Q4 product launch',
    context_entity_ids: [task.data.id]
  }, {
    timeout: 300,
    approval_required: true
  });
  console.log('Invocation:', invocation.data);

  // Check invocation status
  const status = await client.getInvocationStatus(invocation.data.invocation_id);
  console.log('Status:', status.data);
}

module.exports = { IntegrateWiseClient };

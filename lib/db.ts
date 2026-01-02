import { Pool, type PoolClient, type QueryResult } from "pg"

let pool: Pool | null = null
let schemaEnsured = false

function getDatabaseUrl() {
  return process.env.DATABASE_URL
}

export function getDbPool() {
  const url = getDatabaseUrl()
  if (!url) return null
  if (!pool) {
    pool = new Pool({
      connectionString: url,
      max: 5,
    })
  }
  return pool
}

async function withClient<T>(fn: (client: PoolClient) => Promise<T>): Promise<T> {
  const p = getDbPool()
  if (!p) throw new Error("DATABASE_URL is not set")
  const client = await p.connect()
  try {
    return await fn(client)
  } finally {
    client.release()
  }
}

export async function ensureDbSchema() {
  const p = getDbPool()
  if (!p) return
  if (schemaEnsured) return

  await withClient(async (client) => {
    await client.query("begin")
    try {
      await client.query(`
        create table if not exists payment_orders (
          id bigserial primary key,
          user_id text not null,
          plan text not null,
          order_id text not null unique,
          amount_paise integer not null,
          currency text not null default 'INR',
          status text not null default 'created',
          created_at timestamptz not null default now()
        );
      `)

      await client.query(`
        create table if not exists subscriptions (
          user_id text primary key,
          plan text not null,
          status text not null default 'active',
          started_at timestamptz not null default now(),
          current_period_end timestamptz null,
          updated_at timestamptz not null default now()
        );
      `)

      await client.query(`
        create table if not exists user_settings (
          user_id text primary key,
          on_demand_cap_usd integer not null default 50,
          on_demand_enabled boolean not null default false,
          cloud_code_storage_allowed boolean not null default false,
          updated_at timestamptz not null default now()
        );
      `)

      await client.query(`
        create table if not exists deployed_templates (
          id bigserial primary key,
          user_id text not null,
          template_id text not null,
          deployed_at timestamptz not null default now(),
          unique (user_id, template_id)
        );
      `)

      await client.query(`
        create table if not exists calendar_events (
          id bigserial primary key,
          user_id text not null,
          external_id text null,
          title text not null,
          start_time timestamptz not null,
          end_time timestamptz not null,
          raw jsonb null,
          created_at timestamptz not null default now(),
          unique (user_id, external_id)
        );
      `)

      await client.query("commit")
      schemaEnsured = true
    } catch (err) {
      await client.query("rollback")
      throw err
    }
  })
}

export async function dbQuery<T = unknown>(text: string, params: unknown[] = []): Promise<QueryResult<T>> {
  await ensureDbSchema()
  return await withClient((client) => client.query<T>(text, params))
}


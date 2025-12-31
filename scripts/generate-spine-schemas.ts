import fs from "node:fs/promises"
import path from "node:path"
import YAML from "yaml"
import { zodToJsonSchema } from "zod-to-json-schema"

import { spine } from "../packages/types/src/index"

type NamedSchema = { name: string; schema: unknown }

const SCHEMAS: NamedSchema[] = [
  { name: "Task", schema: zodToJsonSchema(spine.Task, { name: "Task" }) },
  { name: "Note", schema: zodToJsonSchema(spine.Note, { name: "Note" }) },
  { name: "Conversation", schema: zodToJsonSchema(spine.Conversation, { name: "Conversation" }) },
  { name: "Plan", schema: zodToJsonSchema(spine.Plan, { name: "Plan" }) },
  { name: "HealthMetric", schema: zodToJsonSchema(spine.HealthMetric, { name: "HealthMetric" }) },
]

async function main() {
  const outDir = path.resolve(process.cwd(), "docs", "spine", "schemas")
  await fs.mkdir(outDir, { recursive: true })

  for (const { name, schema } of SCHEMAS) {
    const jsonPath = path.join(outDir, `${name}.schema.json`)
    const yamlPath = path.join(outDir, `${name}.schema.yaml`)

    await fs.writeFile(jsonPath, JSON.stringify(schema, null, 2) + "\n", "utf8")
    await fs.writeFile(yamlPath, YAML.stringify(schema), "utf8")
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})


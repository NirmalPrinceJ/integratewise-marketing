import fs from "node:fs/promises"
import path from "node:path"
import Ajv from "ajv"
import addFormats from "ajv-formats"

async function main() {
  const dir = path.resolve(process.cwd(), "docs", "spine", "schemas")
  const entries = await fs.readdir(dir)
  const schemaFiles = entries.filter((f) => f.endsWith(".schema.json"))

  const ajv = new Ajv({ allErrors: true, strict: false })
  addFormats(ajv)

  for (const file of schemaFiles) {
    const fullPath = path.join(dir, file)
    const raw = await fs.readFile(fullPath, "utf8")
    const schema = JSON.parse(raw) as object

    try {
      ajv.compile(schema)
    } catch (e) {
      throw new Error(`Schema compile failed: ${file}\n${String(e)}`)
    }
  }
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})


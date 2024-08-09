
import fsPromises from 'fs/promises'
import path from 'path'

export async function parseJsonFile(file) {
  return JSON.parse(await fsPromises.readFile(path.join(process.cwd(), file)))
}
import { app, safeStorage } from 'electron'
import fs from 'fs/promises'
import path from 'path'

export async function getToken(): Promise<string | null> {
  const tokenFile = path.join(app.getPath('userData'), 'token.enc')
  const file = await fs.readFile(tokenFile)

  const token = safeStorage.isEncryptionAvailable()
    ? safeStorage.decryptString(file)
    : file.toString('utf8')

  return token
}

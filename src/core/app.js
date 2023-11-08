import { app } from 'electron'

export function getGPUInfo() {
  app.getGPUInfo('basic')
}
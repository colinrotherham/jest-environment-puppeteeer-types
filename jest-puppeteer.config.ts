import type { JestPuppeteerConfig } from "jest-environment-puppeteer";

export = {
  server: {
    command: 'echo "Server start example"'
  }
} satisfies JestPuppeteerConfig

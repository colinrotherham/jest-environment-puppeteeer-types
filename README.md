# Type issue reproduced

Issue showing invalid types in `jest-environment-puppeteer@8.0.5`

1. Install packages

```console
npm ci
```

2. Build TypeScript

```console
npx tsc --build
```

## Errors

```console
node_modules/jest-environment-puppeteer/dist/index.d.ts:58:25 - error TS2339: Property 'browser' does not exist on type 'Global'.

58     var browser: Global["browser"];
                           ~~~~~~~~~

node_modules/jest-environment-puppeteer/dist/index.d.ts:59:22 - error TS2339: Property 'page' does not exist on type 'Global'.

59     var page: Global["page"];
                        ~~~~~~

node_modules/jest-environment-puppeteer/dist/index.d.ts:60:25 - error TS2339: Property 'context' does not exist on type 'Global'.

60     var context: Global["context"];
                           ~~~~~~~~~

node_modules/jest-environment-puppeteer/dist/index.d.ts:61:33 - error TS2339: Property 'puppeteerConfig' does not exist on type 'Global'.

61     var puppeteerConfig: Global["puppeteerConfig"];
                                   ~~~~~~~~~~~~~~~~~

node_modules/jest-environment-puppeteer/dist/index.d.ts:62:31 - error TS2339: Property 'jestPuppeteer' does not exist on type 'Global'.

62     var jestPuppeteer: Global["jestPuppeteer"];
                                 ~~~~~~~~~~~~~~~


Found 5 errors.
```
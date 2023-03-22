# Type issue reproduced

Issues showing invalid types in `jest-environment-puppeteer@8.0.5`

* https://github.com/argos-ci/jest-puppeteer/issues/545
* https://github.com/argos-ci/jest-puppeteer/issues/546

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
```

```console
src/custom-environment.js:3:33 - error TS2507: Type 'typeof import("/path/to/project/node_modules/jest-environment-puppeteer/dist/index")' is not a constructor function type.

3 class CustomEnvironment extends PuppeteerEnvironment {
                                  ~~~~~~~~~~~~~~~~~~~~

src/custom-environment.js:8:22 - error TS2339: Property 'global' does not exist on type 'CustomEnvironment'.

8     console.log(this.global)
                       ~~~~~~

src/custom-environment.js:9:22 - error TS2339: Property 'context' does not exist on type 'CustomEnvironment'.

9     console.log(this.context)
                       ~~~~~~~
```

# Type issue reproduced

Issues showing invalid types in `jest-environment-puppeteer@8.0.6`

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
src/custom-environment.js:16:26 - error TS2339: Property 'exitOnPageError' does not exist on type 'unknown'.

16     if (!puppeteerConfig.exitOnPageError) {
                            ~~~~~~~~~~~~~~~

src/custom-environment.js:17:12 - error TS2339: Property 'on' does not exist on type 'unknown'.

17       page.on('pageerror', (error) => {
              ~~

src/custom-environment.js:23:17 - error TS2339: Property 'goto' does not exist on type 'unknown'.

23     await page?.goto('https://www.example.com/');
                   ~~~~

src/custom-environment.js:26:20 - error TS2339: Property 'waitForTarget' does not exist on type 'unknown'.

26     await browser?.waitForTarget(
                      ~~~~~~~~~~~~~

src/custom-environment.js:31:17 - error TS2339: Property 'isIncognito' does not exist on type 'unknown'.

31     if (context.isIncognito()) {
                   ~~~~~~~~~~~

src/custom-environment.js:32:27 - error TS2339: Property 'debug' does not exist on type 'unknown'.

32       await jestPuppeteer.debug()
                             ~~~~~


Found 6 errors.
```

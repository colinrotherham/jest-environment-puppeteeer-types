const { TestEnvironment } = require("jest-environment-puppeteer");

class CustomEnvironment extends TestEnvironment {
  async setup() {
    await super.setup();

    const {
      browser,
      page,
      context,
      puppeteerConfig,
      jestPuppeteer
    } = this.global

    // Missing Puppeteer config
    if (!puppeteerConfig.exitOnPageError) {
      page.on('pageerror', (error) => {
        process.emit('uncaughtException', error)
      })
    }

    // Missing Puppeteer page
    await page?.goto('https://www.example.com/');

    // Missing Puppeteer browser
    await browser?.waitForTarget(
      target => target.url() === 'https://www.example.com/'
    );

    // Missing context + Jest Puppeteer global
    if (context.isIncognito()) {
      await jestPuppeteer.debug()
    }
  }
}

module.exports = CustomEnvironment;

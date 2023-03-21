const PuppeteerEnvironment = require("jest-environment-puppeteer");

class CustomEnvironment extends PuppeteerEnvironment {
  async setup() {
    await super.setup();

    // Missing types from NodeEnvironment
    console.log(this.global)
    console.log(this.context)
  }
}

module.exports = CustomEnvironment;

const { By } = require('selenium-webdriver');
const { findElement } = require('../../utils/shadow-dom.js');
const assert = require('assert');

class FormExamplePage {
  constructor(driver) {
    this.driver = driver;
    this.wc = 'form-example';
  }

  async checkChangedSelect() {
    const select = await findElement(this.wc, By.css('.'));
    const textSelect = await select.getText();

    assert.strictEqual(textSelect);
  }
}

module.exports = FormExamplePage;

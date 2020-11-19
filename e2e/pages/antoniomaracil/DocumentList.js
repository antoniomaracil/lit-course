const { By } = require('selenium-webdriver');
const { findElement } = require('../../utils/shadow-dom.js');

class DocumentListPage {
  constructor(driver) {
    this.driver = driver;
    this.wc = 'document-list';
  }

  async checkChangedSelect() {
    const select = await findElement(this.wc, By.className('selectOptions'));
    await select.click();
    const optionNumer = Math.floor(Math.random() * 2 + 1);
    const option = await findElement(this.wc, By.css('option[value="' + optionNumer + '"]'));
    await option.click();
  }
}

module.exports = DocumentListPage;

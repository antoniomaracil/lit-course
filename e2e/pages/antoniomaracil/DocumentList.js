const { By } = require('selenium-webdriver');
const { findElement } = require('../../utils/shadow-dom.js');

class DocumentListPage {
  constructor(driver) {
    this.driver = driver;
    this.wc = 'document-list';
  }

  async checkDownloadLink() {
    const link = await findElement(this.wc, By.linkText('Antonio_Martin_CV'));
    link.click();
  }

  async checkRemoveLink() {
    const link = await findElement(this.wc, By.css('.rm-btn'));
    link.click();
  }
}

module.exports = DocumentListPage;

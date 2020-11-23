const { By, Key } = require('selenium-webdriver');
const { browserConfig } = require('../../config.js');

describe('Amazon search', function () {
  let driver;

  before(async () => {
    driver = await browserConfig({
      url: 'https://www.amazon.es/',
      headless: false,
    });
  });
  it('Acept cookies', async () => {
    const cookies = await driver.findElement(By.id('sp-cc-accept'));
    await cookies.click();
  });

  it('Enter "ps5" search', async () => {
    const input = await driver.findElement(By.css('input[id=twotabsearchtextbox]'));
    await input.sendKeys('ps5', Key.ENTER);
  });

  it('Select the first result', async () => {
    const itemBtn = await driver.findElement(By.linkText('PlayStation 5 - Mando inalámbrico DualSense'));
    await itemBtn.click();
  });
  it('Click on add to cart', async () => {
    const addBtn = await driver.findElement(By.css('input[id=add-to-cart-button]'));
    await addBtn.click();
  });

  it('Close cart panel', async () => {
    const close = await driver.findElement(By.id('attach-close_sideSheet-link'));
    await close.click();
  });

  it('Enter "demon souls ps5" search', async () => {
    const input = await driver.findElement(By.css('input[id=twotabsearchtextbox]'));
    await input.sendKeys(Key.chord(Key.CONTROL, 'a'), '');
    await input.sendKeys('demon souls ps5', Key.ENTER);
  });

  it('Select the first result', async () => {
    const itemBtn = await driver.findElement(By.linkText("Demon's Souls"));
    await itemBtn.click();
  });
  it('Click on add to cart', async () => {
    const addBtn = await driver.findElement(By.css('input[id=add-to-cart-button]'));
    await addBtn.click();
  });

  it('Click on process', async () => {
    const process = await driver.findElement(By.id('hlb-ptc-btn-native'));
    await process.click();
  });

  it('Click on create account', async () => {
    const createBtn = await driver.findElement(By.id('createAccountSubmit'));
    await createBtn.click();
  });

  it('Fill inputs', async () => {
    const name = await driver.findElement(By.id('ap_customer_name'));
    await name.sendKeys('Antonio');
    const mail = await driver.findElement(By.id('ap_email'));
    await mail.sendKeys('antonio.e2e@gmail.com');
    const password = await driver.findElement(By.id('ap_password'));
    await password.sendKeys('123456a');
    const password1 = await driver.findElement(By.id('ap_password_check'));
    await password1.sendKeys('123456a');
  });

  after(() => driver && driver.quit());
});

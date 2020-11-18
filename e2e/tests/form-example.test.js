const { browserConfig } = require('../config.js');

const FormExamplePage = require('../pages/FormExamplePage.js');
const CommonActions = require('../pages/CommonActions.js');

describe('Form-example happy path', function () {
  let driver;
  let formExample;
  let common;

  before(async () => {
    driver = await browserConfig();

    formExample = new FormExamplePage(driver);
    common = new CommonActions(driver);
  });

  it('Page title is correct', async () => common.checkPageTitle());
  it('Go to table', async () => common.selectListElement('Table'));
  it('Fill email and password fields', async () => formExample.enterFormFields('test@email.com', 'vic12345'));
  it('Click on submit button', async () => formExample.formSubmit());
  it('Succesfull alert is visible', async () => formExample.isAlertVisible('.alert-succesfull'));

  after(() => driver && driver.quit());
});
const { browserConfig } = require('../../config');

const AdminVacationForm = require('../../pages/antoniomaracil/AdminVacationForm.js');
const CommonActions = require('../../pages/CommonActions.js');

describe('Admin vacation form select', function () {
  let driver;
  let adminVacationForm;
  let common;

  before(async () => {
    driver = await browserConfig();

    adminVacationForm = new AdminVacationForm(driver);
    common = new CommonActions(driver);
  });

  it('Page title is correct', async () => common.checkPageTitle());
  it('Go to form example view', async () => common.selectListElement('Form'));
  it('Change select from the first row', async () => adminVacationForm.checkChangedSelect());

  after(() => driver && driver.quit());
});

const { browserConfig } = require('../../config');

const AdminVacationForm = require('../../pages/antoniomaracil/AdminVacationForm.js');
const CommonActions = require('../../pages/CommonActions.js');
const AntonioCommonActions = require('../../pages/antoniomaracil/AntonioCommonActions.js');

describe('Admin vacation form select', function () {
  let driver;
  let adminVacationForm;
  let common;
  let aCommon;

  before(async () => {
    driver = await browserConfig({ headless: false, url: 'http://localhost:3000' });

    adminVacationForm = new AdminVacationForm(driver);
    common = new CommonActions(driver);
    aCommon = new AntonioCommonActions(driver);
  });

  it('Page title is correct', async () => common.checkPageTitle());
  it('Go to works view', async () => common.selectListElement('Works'));
  it('Go to user works folder', async () => aCommon.selectUserFolder('antoniomaracil'));
  it('Go to AdminVacationForm view', async () => aCommon.selectAdminComponent('common-btn'));
  it('Change select from the first row', async () => adminVacationForm.checkChangedSelect());

  after(() => driver && driver.quit());
});

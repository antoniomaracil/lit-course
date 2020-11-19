const { browserConfig } = require('../../config');

const DocumentList = require('../../pages/antoniomaracil/DocumentList.js');
const CommonActions = require('../../pages/CommonActions.js');
const AntonioCommonActions = require('../../pages/antoniomaracil/AntonioCommonActions.js');

describe('Document list download link', function () {
  let driver;
  let documentList;
  let common;
  let aCommon;

  before(async () => {
    driver = await browserConfig({ headless: false, url: 'http://localhost:3000' });

    documentList = new DocumentList(driver);
    common = new CommonActions(driver);
    aCommon = new AntonioCommonActions(driver);
  });

  it('Page title is correct', async () => common.checkPageTitle());
  it('Go to works view', async () => common.selectListElement('Works'));
  it('Go to user works folder', async () => aCommon.selectUserFolder('antoniomaracil'));
  it('Click on a download link', async () => documentList.checkDownloadLink());

  after(() => driver && driver.quit());
});

describe('Remove document function', function () {
  let driver;
  let documentList;
  let common;
  let aCommon;

  before(async () => {
    driver = await browserConfig({ headless: false, url: 'http://localhost:3000' });

    documentList = new DocumentList(driver);
    common = new CommonActions(driver);
    aCommon = new AntonioCommonActions(driver);
  });

  it('Page title is correct', async () => common.checkPageTitle());
  it('Go to works view', async () => common.selectListElement('Works'));
  it('Go to user works folder', async () => aCommon.selectUserFolder('antoniomaracil'));
  it('Click on a download link', async () => documentList.checkRemoveLink());

  after(() => driver && driver.quit());
});

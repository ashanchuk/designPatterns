const { browser, until, element, ExpectedConditions } = require("protractor");
const { protractor } = require("protractor/built/ptor");

describe('search by word', function () {
  it('should open search page', async function () {

    browser.ignoreSynchronization = true;
    await browser.get('https://www.epam.com/');

    const searchButton = await element(by.className('header-search__button header__icon'));
    await searchButton.click();

    await browser.sleep(3000);

    const searchField = await element(by.id('new_form_search'));
    await searchField.sendKeys('Relocation', protractor.Key.ENTER);

    await browser.sleep(3000);

    const pageTitle = await browser.getTitle();
    expect(pageTitle).toContain('Search');
  });
});
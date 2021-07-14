const {Builder, By, Key, util, WebElement} = require("selenium-webdriver");
const { findSafariDriver } = require("selenium-webdriver/safari");
const { expect } = require("chai");

async function pageOfSearch() {
    let driver = await new Builder().forBrowser("firefox").build();
    await driver.get('https://www.epam.com/');

    await driver.sleep(3000);

    await driver.findElement(By.xpath("//span[contains(text(),'Accept')]")).click();

    await driver.sleep(3000);

    await driver.findElement(By.xpath("//span[contains(text(),'Find Your Dream Job')]")).click();
    await driver.findElement(By.className('recruiting-search__location')).click();
    await driver.findElement(By.xpath("//li[contains(text(),'All Locations')]")).click();
    await driver.findElement(By.id('new_form_job_search_1445745853_copy-keyword')).sendKeys('test');
    await driver.findElement(By.className('recruiting-search__submit')).click();

    await driver.sleep(3000);

    await driver.findElement(By.className('header-search__button header__icon')).click();
    await driver.findElement(By.id('new_form_search')).sendKeys('Relocation', Key.RETURN);

    await driver.sleep(3000);

    const title = await driver.getTitle();
    expect(title).to.contain("Search");

    await driver.close();    
}
pageOfSearch();
const { Builder, By, Key} = require('selenium-webdriver');
const { expect } = require('chai');

describe(`new tests`, function() {

    let driver;
    before(async() => {
        driver = new Builder().forBrowser('chrome').build();
        driver.manage().window().maximize();
    })

    after(async () => {
        await driver.close();
    })

    it('Test for checking ChromeDriver', async () => {
        await driver.get('https://chromedriver.chromium.org/home');
        const mainTitle = driver.findElement(By.css('.CDt4Ke.zfr3Q.duRjpb')).getText();
        await driver.sleep(2000);
        expect(await mainTitle).to.equal('ChromeDriver');
        await driver.get('https://chromedriver.chromium.org/home');
        const extencionsButton = await driver.findElement(By.xpath('//div[@class="PsKE7e qV4dIc Qrrb5 YSH9J"]//a[contains(@href,"extensions")]'));
        await extencionsButton.click();
        await driver.sleep(2000);
        const currentTitle = driver.findElement(By.css('.CDt4Ke.zfr3Q.duRjpb')).getText();
        expect(await currentTitle).to.equal('Chrome Extensions');
        const searchButton = await driver.findElement(By.css('.RBEWZc'));
        await searchButton.click();
        await driver.sleep(2000);
        const searchField = await driver.findElement(By.css('.whsOnd.zHQkBf'));
        await searchField.sendKeys('driver');
        await driver.actions().sendKeys(Key.ENTER).perform();
        await driver.sleep(2000);
        const firstLinkResult = await driver.findElement(By.xpath('//div[contains(@class, "gtazFe")][1]/div')).getText();
        expect(await firstLinkResult).to.contain('driver');
    })

})




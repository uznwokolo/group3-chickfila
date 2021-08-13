import { By, WebDriver } from "selenium-webdriver"
import { BasePage } from "./BasePage"



export class CFAHomePage extends BasePage {
    driver: WebDriver;
    url: string = "https://www.chick-fil-a.com/";

    // Locators
    cfaLogo: By = By.css('.icon-logo-desktop.logo');
    findRestaurant: By = By.xpath('//button[@data-element="findRestaurant"]');
    signInLink: By = By.xpath('//form[@id="toolbar-menu-signin"]/button');
    orderFoodBtn: By = By.xpath('//a[@href="/order"]');
    searchBtn: By = By.css('.icon-search-off');
    searchField: By = By.id('keyword');
    searchClose: By = By.css('.icon-close');

    constructor(driver: WebDriver) {
        super(driver);
    }

    /**
     * This method searches for an item on the homepage
     * @param value - search term
     */
    async doSearch(value: string) {
        await this.click(this.searchBtn);
        await this.sendKeys(this.searchField, `${value}\n`);
    }

}
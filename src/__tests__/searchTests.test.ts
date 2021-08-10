import { CFAHomePage } from "./pageObjects/CFAHomePage";
import { WebDriver, Capabilities, Builder, By } from "selenium-webdriver";
//import { } from "./pageObjects/CFAHomePage";


const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const home = new CFAHomePage(driver);

const searchTerms: Array<string> = ["nutrition", "gift cards"];
const searchRes: Array<By> = [By.xpath('//span[contains(text(),"Nutrition and Allergens")]'), By.xpath('//span[contains(text(),"gift cards")]')]


describe("Testing the Search feature...", () => {
    beforeAll(async () => {
        await home.navigate(home.url);
        await home.maxWindow();
    });
    test("To check the website", async () => {
        expect(await home.driver.getCurrentUrl()).toBe(home.url);
    })
    test.skip("User can search for nutritional facts", async () => {
        await home.doSearch(searchTerms[0])
        await home.checkIfVisible(searchRes[0]);
        expect(await home.getText(searchRes[0])).toContain("Nutrition and Allergens");
    });
    test.skip("User can search for gift cards", async () => {
        await home.doSearch(searchTerms[1])
        await home.checkIfVisible(searchRes[1]);
        expect(await home.getText(searchRes[1])).toContain("gift cards");
    });
    test.skip("User can cancel a search", async () => {
        await home.click(home.searchBtn);
        await home.click(home.searchClose);
    });/*
    test("", async () => {});*/
    afterAll(async () => {
        await home.quit();
    });
})
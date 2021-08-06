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
        if (home.isElementOnscreen(home.searchClose)) {
            home.click(home.searchClose);
        }
    });
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
    test("User can cancel a search", async () => {
        await home.click(home.searchBtn);
        await home.click(home.searchClose);
        expect(await home.isElementOnscreen(home.searchField)).not.toBe(true);
    });/*
    test("", async () => {});*/
    afterAll(async () => {
        await home.quit();
    });
})
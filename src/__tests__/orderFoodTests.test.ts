//import { CFAHomePage } from "./pageObjects/CFAHomePage";
import { OrderFood } from "./pageObjects/OrderFood";
import { WebDriver, Capabilities, Builder, By } from "selenium-webdriver";
import * as testzip from "../data/zipcodes.json";
import * as meals from "../data/meals.json";



const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

const order = new OrderFood(driver);

const grilled = meals[0];
const nuggets = meals[1];


describe("Testing the Order Food feature...", () => {
    
    let sampleZip: string = "77037";

    beforeEach(async () => {
        await order.maxWindow();
        await order.navigate(order.url);
    });
    afterAll(async () => {
        await order.quit();
    });
    test("To confirm url is correct", async () => {
        expect(await order.driver.getCurrentUrl()).toBe(order.url);
    });
    // PT4G3-17 - User can select to pickup an order via curbside
    test("To confirm a pickup order is curbside", async () => {
        await order.pickUpCurbside(sampleZip);
        expect(await order.getText(order.orderTypeInMenu)).toBe("Curbside");
        expect(await order.driver.getCurrentUrl()).toBe(order.menuUrl);
        await order.click(order.changeLocation); // clears the input field
    });
    // PT4G3-18 - User cannot order breakfast after 10:30am
    test("Cannot order breakfast after 10:30am", async () => {
        await order.pickUpDriveThru(sampleZip);
        await order.click(order.breakfast);
        await order.click(order.spicyBiscuit);
        expect(await order.getText(order.noBreakfast)).toContain("Breakfast items are not available");
        await order.click(order.changeLocation); // clears the input field
    });
    test("To order a meal for carry-out - Grilled Chicken Sandwich", async () => {
        await order.pickUpCarryOut(sampleZip);
        await order.selectGrilledMeal();
        expect(await order.getText(order.mainReview)).toContain(grilled.main);
        expect(await order.getText(order.sideReview)).toContain(grilled.side);
        expect(await order.getText(order.bevReview)).toContain(grilled.bev);
        await order.takeScreenshot("MyFolder_Screenshot/grillreview");
        await order.click(order.changeLocation); // clears the input field
    });
    test("To order a meal for drive-thru - Nuggets Meal", async () => {
        await order.pickUpDriveThru(sampleZip);
        await order.selectNuggetsMeal();
        expect(await order.getText(order.mainReview)).toContain(nuggets.main);
        expect(await order.getText(order.sideReview)).toContain(nuggets.side);
        expect(await order.getText(order.bevReview)).toContain(nuggets.bev);
        await order.takeScreenshot("MyFolder_Screenshot/nuggsreview");
        await order.click(order.changeLocation); // clears the input field
    });
    testzip.forEach((loc) => {
        test("Confirm the name of the first restaurant according to zipcode", async () => {
            await order.pickUpBasic(loc.zipcode);
            expect(await order.getText(order.locationInMenu)).toBe(loc.first);
            await order.click(order.changeLocation); // clears the input field
        });
    });
})
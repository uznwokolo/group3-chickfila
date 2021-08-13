import { CFAHomePage } from "./pageObjects/CFAHomePage";
import { OrderFood } from "./pageObjects/OrderFood";
import { WebDriver, Capabilities, Builder, By } from "selenium-webdriver";
//import { } from "./pageObjects/CFAHomePage";


const chromedriver = require("chromedriver");

const driver = new Builder().withCapabilities(Capabilities.chrome()).build();

//const home = new CFAHomePage(driver);
const order = new OrderFood(driver);


describe("Testing the Order Food feature...", () => {
    beforeEach(async () => {
        await order.navigate(order.url);
        await order.maxWindow();
    });
    afterAll(async () => {
        await order.quit();
    });
    test.skip("To confirm url is correct", async () => {
        expect(await order.driver.getCurrentUrl()).toBe(order.url);
    });
    // PT4G3-17 - User can select to pickup an order via curbside
    test.skip("To confirm a pickup order is curbside", async () => {
        await order.pickUpCurbside("77339");
        expect(await order.getText(order.orderTypeInMenu)).toBe("Curbside");
        expect(await order.driver.getCurrentUrl()).toBe(order.menuUrl);
        await order.click(order.changeLocation); // clears the input field
    });
    // PT4G3-18 - User cannot order breakfast after 10:30am
    test("Cannot order breakfast after 10:30am", async () => {
        await order.pickUpDriveThru("77339");
        await order.click(order.breakfast);
        await order.click(order.spicyBiscuit);
        expect(await order.getText(order.noBreakfast)).toContain("Breakfast items are not available");
        await order.click(order.changeLocation); // clears the input field
    });
    test.skip("To confirm a pickup order is carry out", async () => {
        //await order.click(order.changeLocation); // clears the input field
        await order.pickUpCarryOut("77339");
        expect(await order.getText(order.orderTypeInMenu)).toBe("Carry-out");
        expect(await order.driver.getCurrentUrl()).toBe(order.menuUrl);
        await order.click(order.changeLocation); // clears the input field
    });
    test.skip("To confirm a pickup order is dine-in", async () => {
        await order.pickUpDineIn("77339");
        expect(await order.getText(order.orderTypeInMenu)).toBe("Dine-in");
        expect(await order.driver.getCurrentUrl()).toBe(order.menuUrl);
        await order.click(order.changeLocation); // clears the input field
    });
    
})
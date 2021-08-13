import { By, WebDriver } from "selenium-webdriver"
import { BasePage } from "./BasePage"


export class OrderFood extends BasePage {
    driver: WebDriver;
    url: string = "https://www.chick-fil-a.com/order";

    menuUrl: string = "https://order.chick-fil-a.com/menu";

    // Order food initials
    doPickup: By = By.xpath("//span[contains(text(), 'Pickup')]");
    doDelivery: By = By.xpath("//span[contains(text(), 'Delivery')]");
    doCatering: By = By.xpath("//span[contains(text(), 'Catering')]");
    // Pickup route
    pickupAddr: By = By.name("location");
    findRestaurants: By = By.xpath("//button[@type='submit']");
    selectRestaurant: By = By.xpath("(//span[contains(text(), 'Select this restaurant')])[1]"); // selects first restaurant in the list
    // Delivery route
    deliveryAddr: By = By.name("addressLine1");
    typeOfBuilding: By = By.name("addressLine2");
    deliverySearchBtn: By = By.xpath("//buttton[@data-cy='DeliveryAddressSearchButton']");
    // Pickup options
    driveThru: By = By.xpath("//h4[contains(text(), 'Drive-thru')]");
    carryOut: By = By.xpath("//h4[contains(text(), 'Carry-out')]");
    curbside: By = By.xpath("//h4[contains(text(), 'Curbside')]");
    dineIn: By = By.xpath("//h4[contains(text(), 'Dine-in')]");
    // Menu options
    orderTypeInMenu: By = By.xpath("//div[@data-cy='Destination']");
    locationInMenu: By = By.xpath("//div[@data-cy='LocationName']");
    changeLocation: By = By.xpath("//button[@data-cy='ChangeLocation']");
    // Food locators
    meals: By = By.xpath("//button[@data-cy='MOBILE_MEALS']");
    grilledChicken: By = By.xpath("//button[@data-cy='GRILLED_SANDWICH_MEAL']");
    chooseSideOrBev: By = By.xpath("//button[@data-cy='NextButton']");
    kaleCrunch: By = By.xpath("//button[@data-cy='KALE_CRUNCH_SIDE']");
    lemonade: By = By.xpath("//button[@data-cy='LEMONADE']");
    reviewMeal: By = By.xpath("//button[@data-cy='ReviewYourMeal']");
    // Menu items
    breakfast: By = By.xpath("//button[@data-cy='MOBILE_BREAKFAST']");
    spicyBiscuit: By = By.xpath("//button[@data-cy='SPICY_BISCUIT_MEAL']");
    // Error items
    noBreakfast: By = By.xpath("//h5[contains(text(), 'are not available')]");
    // Meal review
    mealPrice: By = By.xpath("//div[@data-cy='MealPrice']");
    addToOrder: By = By.xpath("//button[@data-cy='AddToOrder']");
    cart: By = By.xpath("//button[@data-cy='Cart']");
    itemCount: By = By.xpath("//span[@data-cy='badge']");
    cancelOrder: By = By.xpath("//button[@data-cy='CancelOrder']");
    cancelConfirm: By = By.xpath("//button[@data-cy='CancelOrderConfirmButton']");

    constructor(driver: WebDriver) {
        super(driver);
    }


    async pickUpDriveThru(zipCodeOrAddr:string){
        await this.click(this.doPickup);
        await this.sendKeys(this.pickupAddr, zipCodeOrAddr);
        await this.click(this.findRestaurants);
        await this.click(this.selectRestaurant);
        await this.click(this.driveThru);
    }
    async pickUpCarryOut(zipCodeOrAddr:string){
        await this.click(this.doPickup);
        await this.sendKeys(this.pickupAddr, zipCodeOrAddr);
        await this.click(this.findRestaurants);
        await this.click(this.selectRestaurant);
        await this.click(this.carryOut);
    }
    async pickUpCurbside(zipCodeOrAddr:string){
        await this.click(this.doPickup);
        await this.sendKeys(this.pickupAddr, zipCodeOrAddr);
        await this.click(this.findRestaurants);
        await this.click(this.selectRestaurant);
        await this.click(this.curbside);
    }
    async pickUpDineIn(zipCodeOrAddr:string){
        await this.click(this.doPickup);
        await this.sendKeys(this.pickupAddr, zipCodeOrAddr);
        await this.click(this.findRestaurants);
        await this.click(this.selectRestaurant);
        await this.click(this.dineIn);
    }
}
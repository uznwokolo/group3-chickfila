import { By, WebDriver } from "selenium-webdriver"
import { BasePage } from "./BasePage"


/*
export interface Location {
    zipcode: string;
    first: number;
}*/


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
    changeSearch: By = By.xpath("//div[contains(text(), 'Change search')]");
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
    chickenNuggets: By = By.xpath("//button[@data-cy='NUGGETS_MEAL']");
    chooseSideOrBev: By = By.xpath("//button[@data-cy='NextButton']");
    kaleCrunch: By = By.xpath("//button[@data-cy='KALE_CRUNCH_SIDE']");
    waffleFries: By = By.xpath("//button[@data-cy='WAFFLE_POTATO_FRIES']");
    lemonade: By = By.xpath("//button[@data-cy='LEMONADE']");
    sweetTea: By = By.xpath("//button[@data-cy='MEAL_SWEET_TEA']");
    reviewMeal: By = By.xpath("//button[@data-cy='ReviewYourMeal']");
    // Menu items
    breakfast: By = By.xpath("//button[@data-cy='MOBILE_BREAKFAST']");
    spicyBiscuit: By = By.xpath("//button[@data-cy='SPICY_BISCUIT_MEAL']");
    // Error items
    noBreakfast: By = By.xpath("//h5[contains(text(), 'are not available')]");
    // Meal review
    mainReview: By = By.xpath("(//h5[@data-cy='ReviewMealListItemName'])[1]");
    sideReview: By = By.xpath("(//h5[@data-cy='ReviewMealListItemName'])[2]");
    bevReview: By = By.xpath("(//h5[@data-cy='ReviewMealListItemName'])[3]");
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
    async pickUpBasic(zipCodeOrAddr:string){
        await this.click(this.doPickup);
        await this.sendKeys(this.pickupAddr, zipCodeOrAddr);
        await this.click(this.findRestaurants);
        await this.click(this.selectRestaurant);
        await this.click(this.dineIn);
    }
    async selectGrilledMeal() {
        await this.click(this.meals);
        await this.click(this.grilledChicken);
        await this.click(this.chooseSideOrBev);
        await this.click(this.kaleCrunch);
        await this.click(this.chooseSideOrBev);
        await this.click(this.sweetTea);
        await this.click(this.reviewMeal);
    }
    async selectNuggetsMeal() {
        await this.click(this.meals);
        await this.click(this.chickenNuggets);
        await this.click(this.chooseSideOrBev);
        await this.click(this.waffleFries);
        await this.click(this.chooseSideOrBev);
        await this.click(this.lemonade);
        await this.click(this.reviewMeal);
    }

}
import { Builder, By, Capabilities, ISize, WebDriver, } from "selenium-webdriver"     //downloading the dependencies/libraries for Selenium Web driver
import { BasePage } from "./BasePage"

export interface addressbar
 {
   address: string;
    
 }

export class CFAfindrestaurant extends BasePage
 {
    [x: string]: any;
    driver: WebDriver;
    url: string = "https://www.chick-fil-a.com/";

    // Locators

findRestaurant: By =By.xpath('//button[@data-element="findRestaurant"]');
inputField: By=By.xpath('//input[@name="locationsearch"][1]');
useMyLocation: By=By.xpath('(//form[@data-component="geoLocation"]/a)[1]');
Search: By=By.xpath('//input[@type="submit"]');
viewdetails: By=By.xpath('(//a[@class="Teaser-cta"])[1]')

    
constructor(options)
 {
    super(options);
 }

async addressbar(searchText: string) {
    await this.input(`${this.addressbar}`,searchText);
 
 }

 }
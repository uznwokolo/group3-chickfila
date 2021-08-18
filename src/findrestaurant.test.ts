import { Builder, By, Capabilities, ISize, until, WebDriver } from "selenium-webdriver"     //downloading the dependencies/libraries for Selenium Web driver
import { getTextOfJSDocComment, isAssertionExpression, isStringLiteral, isStringTextContainingNode } from "typescript"
import { CFAfindrestaurant } from "./__tests__/pageObjects/CFAfindrestaurant"   // importing "CFAfindrestaurant" function from the file CFAfindrestaurant in the same folder
import { BasePage } from "./__tests__/pageObjects/BasePage" //importing base page from Basepage.ts
import * as addressbar from "./__tests__/Data/addressbar.json";  //importing data from json file from Postman(API testing)



//const chromedriver = require('chromedriver')                                // initializing the chrome browser
const driver = new Builder().withCapabilities(Capabilities.chrome()).build()  //creating a driver to interact with chrome browser
const myPage = new CFAfindrestaurant(driver)

describe("Testing of Chick - fil-a website - 'Find a restaurant' module ", async () =>
 {
  const mPage1 = new BasePage(driver)
afterAll(() => {
  myPage.driver.quit();                                                       // this will close the browser after all text cases
  })

test('To check if the URL is working', async () => {
    // Opening the website defined in CFAfindrestaurant
  await myPage.navigate(myPage.url)
expect(await myPage.driver.getCurrentUrl()).toBe("https://www.chick-fil-a.com/")
  })

  /** 
    *To test the input field for valid values 
    *Below is the test case to verify if the address field accepts only characters or only numbers for city/state and  zipcode
    *Test data is imported from json file which will be helpful for API testing as well
    * @parameter 1 = "78685"
    * @parameter 2 = "Houston"
    * @parameter 3 = "45459"
    */


test('To check the test case # in jira for valid values', async () =>
   {

  await driver.sleep(1000)  

  /**
   * Below is the loop where the imput values will be fetched by json file - addressbar.json
   * 
   */
  for (let i = 0; i < addressbar.length; i++) 
    {
  let far = await myPage.driver.findElement(myPage.findRestaurant)  // It will locate Find a restaurant tab
  await far.click();                                               
  let input = await myPage.driver.findElement(myPage.inputField)    //It will locate the input field (addressbar)
  await input.sendKeys(addressbar[i].address)                       //Created an array which will fetch different valid inputs from json file   
  console.log(addressbar[i].address)                                // It will print the input values 
 
  await(2000);
  await mPage1.takeScreenshot("MyFolder_Screenshot/Screenshot1")    //Capturing a screenshot in My_Folder(file name - Screenshot 1)
  let searchbtn = await myPage.driver.findElement(myPage.Search)    // It will find the serach button and click
  await searchbtn.click();
  await(1000)
  var format1 = /^[0123456789]*$/;                                  // created two variables here which will store alphabets and numbers 
  var format2 = /^[a-zA-Z]*$/;
  if ((addressbar[i].address).match(format1) || (addressbar[i].address).match(format2)) // comparing input values here
      {
      var result = "true";                                          //If it matches, result is true or else result is false
      console.log("Valid values entered")

      }  
  else 
     {
  var result = "false";
  console.log("inValid values entered ")
     }
  
  await(1000)
  
expect("true").toBe(`${result}`)
  await(1000)
  
    }
  })
    
    

    /** 
  *To test the input field for invalid values 
  *User can change the "myinputfield" as per the requirement, in this case we are testing address field for invalid inputs:
  *Testing with hard coded values here
  * @parameter 1 = myinputfield = "######"
  * @parameter 2 = myinputfield = "  " (blank values)
  */

test('To check the test case # in jira for invalid values', async () => {

  await driver.sleep(1000)                                                
  let far = await myPage.driver.findElement(myPage.findRestaurant)               
  await far.click();
  let myinputfield = "######"
  let input = await myPage.driver.findElement(myPage.inputField)
  await input.sendKeys(`${myinputfield}`)
  await mPage1.takeScreenshot("MyFolder_Screenshot/Screenshot2")    // It will take a screenshot as soon as invalid input is entered
  let searchbtn = await myPage.driver.findElement(myPage.Search)
  await searchbtn.click();
    
  var format1 = /^[0123456789]*$/;
  var format2 = /^[a-zA-Z]*$/;

  if (myinputfield.match(format1) || (myinputfield.match(format2)))
   {
      var result = "true";
      console.log("Valid values entered")
   }
  else
   {
      var result = "false";
      console.log("inValid values entered ")
    }

    expect("true").toBe(`${result}`)

  })


  /** 
    *To test the if the zipcode entered has 5 or 6 digits
    *User can change the "myinputfield" as per the requirement, in this case we are testing address field for valid and invalid zipcode
    * @parameter 2 = myinputfield = "78665"
    * @parameter 2 = myinputfield = "123456789"
    */


test('to test the zip code for numbers of digits, it should be either 5 or 6', async () => {

  await driver.sleep(1000)
  let far = await myPage.driver.findElement(myPage.findRestaurant)
  await far.click();
  let myinputfield = "123456789";
  let inputfield = await myPage.driver.findElement(myPage.inputField)
  await inputfield.sendKeys(`${myinputfield}`)
  let count1 = (`${myinputfield}`.length);
  if (count1 < 5 || count1 > 6) 
    {
      var result = "false"
      console.log("Zip code is not accepted. It is more than 6 digits")
    }
  else 
    {
      var result = "True"
      console.log("Zip code value is accepted")
    }

  let searchbtn = await myPage.driver.findElement(myPage.Search)
  await searchbtn.click();
  expect("true").toBe(`${result}`)

  })


  /** 
  *To test the if the "Use my Location" link is working 
  *clicking on "use my location" should open nearby restaurant page
  */

test('to test the "Use my location" link', async () => {
  await driver.sleep(1000)
  let far = await myPage.driver.findElement(myPage.findRestaurant)
  await far.click();
  let uml = await myPage.driver.findElement(myPage.useMyLocation)
  await uml.click();
  expect(await myPage.driver.getCurrentUrl()).toBe("https://www.chick-fil-a.com/locations")

   if (true)
    {
      console.log("User is on correct location page")
    }
    else
     {
      console.log("User is NOT on correct location page")
     }

  });
})





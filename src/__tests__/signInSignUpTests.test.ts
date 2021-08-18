import {SignInSignUpPage} from "./pageObjects/signInSignUpPageObjects"

const chromedriver = require("chromedriver");
import { WebDriver, Builder, Capabilities, By, until } from "selenium-webdriver";

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  const sig = new SignInSignUpPage(driver);
  
 describe("Testing Sign in feature", () => {
   beforeAll(async () => {
    await sig.navigate(sig.url);
    await sig.click(sig.signInLink);
   });
   afterAll(async () => {
    await sig.quit();
  });
  
  //this is commented out because it was originally part of my automation test plan
  // but it data will have to be changed everytime test is ran
  // also the website only allows a certain number of accounts to be created
   //test("User can sign up", async () => {
     //await sig.click(sig.signUpButton);
     //await sig.click(sig.signUpEmail);
     //await sig.sendKeys(sig.firstName, "Jun");
     //await sig.sendKeys(sig.lastName, "Tankai");
     //await sig.sendKeys(sig.email, "juntankai@gmail.com");
     //await sig.sendKeys(sig.conEmail, "juntankai@gmail.com");
     //await sig.sendKeys(sig.password, "testpassword");
     //await sig.sendKeys(sig.conPassword, "testpassword")
     //await sig.click(sig.createAccount)
   //})

//est("user can sign in", async () => { 
  //await sig.sendKeys(sig.emailInput, "devmountain3@gmail.com")
  //await sig.sendKeys(sig.passwordInput, "Group003")
  //await sig.click(sig.signInButton)
//});

test("invalid sign in info will now allow sign in", async () => {
  await sig.sendKeys(sig.emailInput, "test@gmail.com")
  await sig.sendKeys(sig.passwordInput, "testpassword")
  await sig.click(sig.signInButton)
  expect(await sig.getText(sig.errorMessage)).toContain("We didn't recognize the username or password you entered. Please try again.");
});
 });
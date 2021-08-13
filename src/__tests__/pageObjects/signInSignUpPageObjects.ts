import { By, WebDriver } from "selenium-webdriver"
import { BasePage } from "./BasePage"
import { CFAHomePage} from "./CFAHomePage"

export class SignInSignUpPage extends BasePage {
    driver: WebDriver;
    url: string = "https://www.chick-fil-a.com/";

//Sign In Page Locators
signInLink: By = By.xpath('//form[@id="toolbar-menu-signin"]/button');

emailInput: By = By.xpath('//input[@name="pf.username"]')

passwordInput: By = By.xpath('//input[@name="pf.pass"]')

signInButton: By = By.xpath('//button[@name="pf.ok"]')

signUpButton: By = By.xpath('//a[@onclick="googleTagSignUp()"]')

//Sign Up Page Locators

signUpEmail: By = By.xpath('//div[@onclick="toggleEmailSignUp()"]')

firstName: By = By.xpath('//input[@id="firstName"]')

lastName: By = By.xpath('//input[@id="lastName"]')

email: By = By.xpath('//input[@id="primaryEmail"]')

conEmail: By = By.xpath('//input[@id="confirmEmail"]')

password: By = By.xpath('//input[@id="credentials"]')

conPassword: By = By.xpath('//input[@id="confirmCredentials"]')

createAccount: By = By.xpath('//button[@id="registerBtn"]')

errorMessage: By = By.xpath('//div[@class="err"]')

}
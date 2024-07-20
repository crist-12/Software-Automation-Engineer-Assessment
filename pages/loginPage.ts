import { BasePage } from "./basePage";
import { LoginLocators } from "./locators/login";
import { Locator, Page } from "@playwright/test";

export class LoginPage extends BasePage {

    private readonly username: Locator;
    private readonly password: Locator;
    private readonly loginButton: Locator;
    private readonly urlLogin: Locator;
    private readonly logoutButton: Locator;
    private readonly errorMessage: Locator;
    private readonly pagesuccess : Locator;


        constructor(page: Page){
            super(page);
            this.username = page.locator(LoginLocators.username);
            this.password = page.locator(LoginLocators.password);
            this.loginButton = page.locator(LoginLocators.loginbutton);
            this.logoutButton = page.locator(LoginLocators.logoutbutton);
            this.errorMessage = page.locator(LoginLocators.errormessage);
            this.pagesuccess = page.locator(LoginLocators.newpage);
        }

        async loginWithCorrectUser(){
            await this.fillField(LoginLocators.username, 'student');
        }

        async loginWithCorrectPassword(){
            await this.fillField(LoginLocators.password, 'Password123');
        }

        async loginWithWrongUser(){
            await this.fillField(LoginLocators.username, 'student1');
        }

        async loginWithWrongPassword(){
            await this.fillField(LoginLocators.username, 'Password1234');
        }

        async clickLoginButton(){
            await this.clickOn(LoginLocators.loginbutton);
        }

        async checkErrorMessageToBeHidden(){
            await this.expectHidden(LoginLocators.errormessage);
        }

        async checkErrorMessageToBeVisible(){
            await this.expectVisible(LoginLocators.errormessage);
        }

        async checkNewUrl(){
            await this.whatIsTheUrl('practicetestautomation.com/logged-in-successfully/');
        }

        async checkTextInPage(){
            await this.expectHaveText(LoginLocators.newpage, "Congratulations", "successfully logged in");
        }

        async checkTextErrorMessage(){
            await this.expectHaveText(LoginLocators.errormessage, "Your username is invalid!", "Your password is invalid!");
        }
}
import { BaseDependencies, BaseEyes, BaseHands } from "../BaseRobot";

export class FashionEyes extends BaseEyes {
  seesLoginPageUrl() {
    cy.url().should("include", "/fashion");
  }
  seesFirstNameField() {
    this.seesDomVisible(
      'div[class="label-container ng-tns-c170-1 form-label"]'
    );
  }
  seesLastNameField() {
    this.seesDomVisible(
      'div[class="label-container ng-tns-c170-2 form-label"]'
    );
  }
  seesEmailField() {
    this.seesDomVisible(
      'div[class="label-container ng-tns-c170-3 form-label"]'
    );
  }
  seesPasswordField() {
    this.seesDomVisible(
      'div[class="label-container ng-tns-c170-4 form-label"]'
    );
  }
  seesConfirmPasswordField() {
    this.seesDomVisible(
      'div[class="label-container ng-tns-c170-5 form-label"]'
    );
  }
  seesLoginButton() {
    this.seesDomElementWithXpath("//button[@type='submit']");
  }
  seesCompanyName() {
    this.seesDomVisible(
      'div[class="label-container ng-tns-c170-8 form-label"]'
    );
  }
  seesNumberField() {
    this.seesDomVisible(
      'div[class="label-container ng-tns-c170-12 form-label"]'
    );
  }
  seesNextButton() {
    this.seesDomVisible('button[class="signup-button"]');
  }
  seesWelcomeButton() {
    this.seesDomVisible('button[class="welcome-screen-content-button"]');
  }
  seesDashBoardPage() {
    this.seesDomElementWithXpath("//div[contains(text(),'Checkout')]");
    this.seesDomElementWithXpath("//div[contains(text(),'Connect')]");
    this.seesDomElementWithXpath("//div[contains(text(),'Products')]");
    this.seesDomElementWithXpath("//div[contains(text(),'Shop')]");
    this.seesDomElementWithXpath("//div[contains(text(),'Transactions')]");
    this.seesDomElementWithXpath("//div[contains(text(),'Settings')]");
  }
  seesDashboardPageUrl() {
    cy.url().should("include", "/info/overview");
  }
}
export class FashionHands extends BaseHands {
  inputFirstNameField(firstName: string) {
    this.clickOnDomElement(
      'div[class="label-container ng-tns-c170-1 form-label"]'
    );
    this.typeTextonDom('input[formcontrolname="firstName"]', firstName);
  }
  inputLastNameField(lastName: string) {
    this.clickOnDomElement(
      'div[class="label-container ng-tns-c170-2 form-label"]'
    );
    this.typeTextonDom('input[formcontrolname="lastName"]', lastName);
  }
  inputEmailField(email: string) {
    this.clickOnDomElement(
      'div[class="label-container ng-tns-c170-3 form-label"]'
    );
    this.typeTextonDom('input[formcontrolname="email"]', email);
  }
  inputPasswordField(password: string) {
    this.clickOnDomElement(
      'div[class="label-container ng-tns-c170-4 form-label"]'
    );
    this.typeTextonDom('input[formcontrolname="password"]', password);
  }
  inputConfirmPasswordField(password: string) {
    this.clickOnDomElement(
      'div[class="label-container ng-tns-c170-5 form-label"]'
    );
    this.typeTextonDom('input[formcontrolname="confirmPass"]', password);
  }
  clickLoginButton() {
    this.clickOnDomElementWithXpath("//button[@type='submit']");
  }
  inputCompanyName(companyName: string) {
    this.clickOnDomElement(
      'div[class="label-container ng-tns-c170-8 form-label"]'
    );
    this.typeTextonDom('input[formcontrolname="name"]', companyName);
  }
  inputNumberField(number: string) {
    this.clickOnDomElement(
      'div[class="label-container ng-tns-c170-12 form-label"]'
    );
    this.typeTextonDom('input[formcontrolname="phoneNumber"]', number);
  }
  clickNextButton() {
    this.clickOnDomElement('button[class="signup-button"]');
  }
  clickWelcomeButton() {
    this.clickOnDomElement('button[class="welcome-screen-content-button"]');
  }
}
export class FahsionDependencies extends BaseDependencies {}

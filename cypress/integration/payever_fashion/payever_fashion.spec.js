import {
  FashionEyes,
  FashionHands,
  FahsionDependencies,
} from "../../robots/payeverFashionRobot/fashionRobot";

const fashionEyes = new FashionEyes();
const fashionHands = new FashionHands();
const fahsionDependencies = new FahsionDependencies();
var digits = Math.floor(Math.random() * 9000000000) + 1000000000;

context("Testing Payever Fashion Portal", () => {
  beforeEach("Visit the portal", () => {
    cy.fixture("testData").then((testData) => {
      const url = testData.baseUrl;
      cy.intercept(
        "GET",
        "https://commerceos-backend.staging.devpayever.com/api/business-registration/form-data"
      ).as("graphqlRequest");
      fahsionDependencies.visitUrl(url);
      cy.wait("@graphqlRequest", { timeout: 80000 }).then(({ response }) => {
        if (response.statusCode === 200) {
          cy.log("Welcome to the website");
        } else {
          cy.log("Wait! check manually if the page is working or not");
        }
      });
    });
  });
  it("Sign up page validation", () => {
    fashionEyes.seesLoginPageUrl();
    cy.fixture("userCredentials.json").then((user) => {
      const firstName = user[0].word;
      const lastName = user[0].pronunciation;
      const email = firstName + lastName + "@gmail.com";
      const password = firstName + lastName + "123@gmail";
      const companyName = firstName + "Company";
      const number = digits;
      cy.log(`first Test Case ${firstName} ${lastName}`);
      console.log(`first Test Case ${firstName} ${lastName}`);
      fashionEyes.seesFirstNameField();
      fashionEyes.seesLastNameField();
      fashionEyes.seesEmailField();
      fashionEyes.seesPasswordField();
      fashionEyes.seesConfirmPasswordField();
      fashionEyes.seesLoginButton();
      fashionHands.inputFirstNameField(firstName);
      fashionHands.inputLastNameField(lastName);
      fashionHands.inputEmailField(email);
      fashionHands.inputPasswordField(password);
      fashionHands.inputConfirmPasswordField(password);
      cy.intercept(
        "POST",
        "https://auth.staging.devpayever.com/api/register"
      ).as("graphqlRequest");
      fashionHands.clickLoginButton();
      cy.wait("@graphqlRequest", { timeout: 80000 }).then(({ response }) => {
        if (response.statusCode === 200) {
          cy.log("1st step of signing up is done");
          fashionEyes.seesCompanyName();
          fashionEyes.seesNumberField();
          fashionEyes.seesNextButton();
          fashionHands.inputCompanyName(companyName);
          fashionHands.inputNumberField(number);
          fashionHands.wait(3000);
          cy.intercept(
            "GET",
            "https://users.staging.devpayever.com/api/user"
          ).as("graphqlRequest");
          fashionHands.clickNextButton();
          cy.wait("@graphqlRequest", { timeout: 80000 }).then(
            ({ response }) => {
              if (response.statusCode === 200) {
                cy.log("Signing up is done");
                fashionEyes.seesDashboardPageUrl();
                fashionHands.clickWelcomeButton();
                fashionEyes.seesDashBoardPage();
              } else {
                cy.log("Oops! Something went wrong");
              }
            }
          );
        } else {
          cy.log("Wait! check manually if the page is working or not");
        }
      });
    });
  });
});

/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import LoginPage from "../../../page_objects/login.page";
import SignupPage from "../../../page_objects/sign.up.page";
import verificationText from "../../fixtures/verificationText.json";

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password(
  12,
  false,
  /[A-Za-z0-9!@#$%^&*()_+~`|}{[\]:;?><,./-=]/,
  "A1!"
);

describe("Registration", () => {
  beforeEach(() => {
    cy.visit("https://us-lio.us.auth0.com/u/login");
    LoginPage.signUpButton.click({ force: true });
  });

  it("Should not sign up without filling up required fields", () => {
    SignupPage.continueButton.click();
    SignupPage.usernameField.should("be.focused");
    SignupPage.usernameField.then(($input) => {
      expect($input[0].validationMessage).to.include(
        verificationText.signUpPageEmptyFieldAlertText
      );
    });
  });

  it("Should not sign up with invalid password", () => {
    SignupPage.usernameField.type(username);
    SignupPage.emailField.type(email);
    SignupPage.continueButton.click();
    SignupPage.passwordField.then(($input) => {
      expect($input[0].validationMessage).to.include(
        verificationText.signUpPageEmptyFieldAlertText
      );
    });
  });

  it("Should not sign up with invalid email", () => {
    SignupPage.usernameField.type(username);
    SignupPage.passwordField.type(password);
    SignupPage.continueButton.click();
    SignupPage.emailField.then(($input) => {
      expect($input[0].validationMessage).to.include(
        verificationText.signUpPageEmptyFieldAlertText
      );
    });
  });

  it("Should not sign up with previously used credentials", () => {
    SignupPage.usernameField.type("victoria");
    SignupPage.emailField.type("svetvictidm@gmail.com");
    SignupPage.passwordField.type("QAVictoria123)");
    SignupPage.continueButton.click();
    SignupPage.promptAlert.should("be.visible");
    SignupPage.promptAlert.should(
      "include.text",
      verificationText.signupPageSowethingWentWrongAlertText
    );
  });
});

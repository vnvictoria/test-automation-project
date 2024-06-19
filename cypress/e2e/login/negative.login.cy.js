/// <reference types="cypress" />
import LoginPage from "../../../page_objects/login.page";
import { faker } from "@faker-js/faker";
import user from "../../fixtures/userCredentials.json";
import verificationText from "../../fixtures/verificationText.json";

const username = faker.internet.userName();
const email = faker.internet.email();
const password = faker.internet.password(
  12,
  false,
  /[A-Za-z0-9!@#$%^&*()_+~`|}{[\]:;?><,./-=]/,
  "A1!"
);

describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://us-lio.us.auth0.com/u/login");
  });

  it("Should not log in with invalid credentials", () => {
    LoginPage.usernameField.type(username);
    LoginPage.passwordField.type(password);
    LoginPage.continueButton.click();
    LoginPage.wrongCredentialsErrorMessage.should(
      "contain",
      verificationText.loginPageWrongCredentialsMessageText
    );
  });

  it("Should not log in with invalid username", () => {
    LoginPage.usernameField.type(username);
    LoginPage.passwordField.type(user.password);
    LoginPage.continueButton.click();
    LoginPage.wrongCredentialsErrorMessage.should(
      "contain",
      verificationText.loginPageWrongCredentialsMessageText
    );
  });

  it("Should not log in with invalid password", () => {
    LoginPage.usernameField.type(user.email);
    LoginPage.passwordField.type(password);
    LoginPage.continueButton.click();
    LoginPage.wrongCredentialsErrorMessage.should(
      "contain",
      verificationText.loginPageWrongCredentialsMessageText
    );
  });

  it("Should not log in with invalid email", () => {
    LoginPage.usernameField.type(email);
    LoginPage.passwordField.type(user.password);
    LoginPage.continueButton.click();
    LoginPage.wrongCredentialsErrorMessage.should(
      "contain",
      verificationText.loginPageWrongCredentialsMessageText
    );
  });

  it("Should not log in with no credentials", () => {
    LoginPage.continueButton.click();
    LoginPage.usernameField.then(($input) => {
      expect($input[0].validationMessage).to.include(
        verificationText.loginPageEmptyFieldAlertText)
      })
  });
})
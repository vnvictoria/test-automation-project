/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import LoginPage from "../../../page_objects/login.page";
import SignupPage from "../../../page_objects/sign.up.page";

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
  });

  it("Should sign up with valid credentials", () => {
    LoginPage.signUpButton.click({ force: true });
    SignupPage.usernameField.type(username, { force: true });
    SignupPage.emailField.type(email, { force: true });
    SignupPage.passwordField.type(password, { force: true });
    SignupPage.continueButton.click({ force: true });
    cy.origin("https://golinguist.com", () => {
      cy.contains(
       "Please verify your email address before logging in to your account."
      ).should("be.visible");
    });
  });
});
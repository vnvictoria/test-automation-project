/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import user from "../../fixtures/userCredentials.json";
import FreeTrialSignupPage from "../../../page_objects/free.trial.sign.up.page";

const firstName = faker.name.firstName();
const lastName = faker.name.lastName();
const username = faker.internet.userName();
const email = faker.internet.email();

describe("Registration", () => {
  beforeEach(() => {
    cy.visit('https://golinguist.com/linguistnow/portal/index.html#/sign-up');
  });

  it("Should sign up for a free trial with valid credentials", () => {
    FreeTrialSignupPage.firstNameField.type(firstName);
    FreeTrialSignupPage.lastNameEmailField.type(lastName);
    FreeTrialSignupPage.titleField.type(firstName);
    FreeTrialSignupPage.emailField.type(email);
    FreeTrialSignupPage.passwordField.type(user.password);
    FreeTrialSignupPage.confirmPasswordField.type(user.password);
    FreeTrialSignupPage.companyNameField.type(username);
    FreeTrialSignupPage.solutionsCheckbox.eq(0).click();
    //Clicking on the Submit button is commented in order to avoid spamming
    //cy.get('[type="submit"]').click()
    //Verification
  });
})
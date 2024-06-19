/// <reference types="cypress" />
import LoginPage from "../../../page_objects/login.page";
import user from "../../fixtures/userCredentials.json";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://us-lio.us.auth0.com/u/login");
  });

  it("Should log in with valid credentials", () => {
    LoginPage.usernameField.type(user.email);
    LoginPage.passwordField.type(user.password);
    LoginPage.continueButton.click();
    //Verification can't be done due to the following message upon clicking "Continue": 
    //"Your user ID is currently not associated with a Language I/O account. 
    //Please reach out to your internal LIO administrator for support."
  });

  it("Should log in with password being visible", () => {
    LoginPage.usernameField.type(user.email);
    LoginPage.passwordField.type(user.password);
    LoginPage.passwordVisibilityButton.click();
    LoginPage.passwordField.should("have.attr", "type", "text");
    LoginPage.continueButton.click();
    //Verification can't be done due to the following message upon clicking "Continue": 
    //"Your user ID is currently not associated with a Language I/O account. 
    //Please reach out to your internal LIO administrator for support."
  });
});
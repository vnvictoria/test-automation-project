/// <reference types="cypress" />
import HomePage from "../../../page_objects/home.page";
import DemoPage from "../../../page_objects/demo.page";
import { faker } from "@faker-js/faker";

const companyDomain = "companyname.com";
const companyEmail = `${faker.internet.userName()}@${companyDomain}`;
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

describe("Demo request", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to request a demo", () => {
    HomePage.requestADemoButton.eq(0).click({ force: true });
    DemoPage.companyEmailField.eq(0).type(companyEmail);
    DemoPage.firstNameField.eq(0).type(firstName);
    DemoPage.lastNameField.eq(0).type(lastName);
    //Clicking on the Submit button is commented in order to avoid spamming
    //cy.get('[type="submit"]').eq(0).click();
    //Verification
  });
});

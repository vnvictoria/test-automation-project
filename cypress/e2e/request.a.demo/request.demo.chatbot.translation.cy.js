/// <reference types="cypress" />
import { faker } from "@faker-js/faker";
import HomePage from "../../../page_objects/home.page";
import DemoForm from "../../../page_objects/demo.form";
import ChatbotTranslationPage from "../../../page_objects/chatbot.translation.page";

const companyDomain = "companyname.com";
const companyEmail = `${faker.internet.userName()}@${companyDomain}`;
const firstName = faker.name.firstName();
const lastName = faker.name.lastName();

describe("Request a demo", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("Should be able to request a demo", () => {
    HomePage.productButton.eq(0).click();
    HomePage.productSubmenuChatbotTranslationButton.eq(0).click();
    ChatbotTranslationPage.requestADemoButton.eq(0).click();
    DemoForm.companyEmailField.type(companyEmail, { force: true });
    DemoForm.firstNameField.type(firstName), { force: true };
    DemoForm.lastNameField.type(lastName);
    //Clicking on the Submit button is commented in order to avoid spamming
    //cy.get('[type="submit"]').click();
    //Verification
  });
});

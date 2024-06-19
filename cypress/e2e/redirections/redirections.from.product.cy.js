/// <reference types="cypress" />
import HomePage from "../../../page_objects/home.page";
import OverviewPage from "../../../page_objects/overview.page";
import SecurityPage from "../../../page_objects/security.page";
import LiveChatTranslationPage from "../../../page_objects/live.chat.translation.page";
import EmailAndTickeTranslationPage from "../../../page_objects/email.and.ticket.translation.page";
import FaqKnowledgeBaseTranslationPage from "../../../page_objects/faq.knowledge.base.translation.page";
import ChatbotTranslationPage from "../../../page_objects/chatbot.translation.page";
import SalesforcePage from "../../../page_objects/salesforce.page";
import ZendeskPage from "../../../page_objects/zendesk.page";
import OraclePage from "../../../page_objects/oracle.page";
import ServiceNowPage from "../../../page_objects/service.now.page";
import ChromeExtensionPage from "../../../page_objects/chrome.extension.page";
import TranslationApiPage from "../../../page_objects/translation.api.page";
import EbookPage from "../../../page_objects/ebook.page";
import verificationText from "../../fixtures/verificationText.json";

describe("Page redirections", () => {
  beforeEach(() => {
    cy.visit('/');
    HomePage.productButton.eq(0).click();
  });

  it("Should be redirected from Product to Overview", () => {
    HomePage.productSubmenuOverviewButton.eq(0).click();
    cy.url().should("eq", OverviewPage.constructor.url);
    OverviewPage.overviewPageHeading
      .eq(0)
      .should("have.text", verificationText.overviewPageHeadingText);
  });

  it("Should be redirected from Product to Security", () => {
    HomePage.productSubmenuSecurityButton.eq(0).click();
    cy.url().should("eq", SecurityPage.constructor.url);
    SecurityPage.securityPageHeading
      .eq(0)
      .should("have.text", verificationText.securityPageHeadingText);
  });

  it("Should be redirected from Product to Product Support and Documentation", () => {
    HomePage.productSubmenuProductSupportAndDocumentationButton
      .eq(0)
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "support.languageio.com");
  });

  it("Should be redirected from Product to Live Chat Translation", () => {
    HomePage.productSubmenuLiveChatTranslationButton.eq(0).click();
    cy.url().should("eq", LiveChatTranslationPage.constructor.url);
    LiveChatTranslationPage.LiveChatTranslationPageHeading.should(
      "have.text",
      verificationText.liveChatTranslationPageHeadingText
    );
  });

  it("Should be redirected from Product to Email and Ticket Translation", () => {
    HomePage.productSubmenuEmailandTicketTranslationButton.eq(0).click();
    cy.url().should("eq", EmailAndTickeTranslationPage.constructor.url);
    EmailAndTickeTranslationPage.EmailAndTicketTranslationPageHeading.should(
      "have.text",
      verificationText.emailAndTicketTranslationPageHeadingText
    );
  });

  it("Should be redirected from Product to FAQ and Knowledge Base Translation", () => {
    HomePage.productSubmenuFAQKnowledgeBaseTranslationButton.eq(0).click();
    cy.url().should("eq", FaqKnowledgeBaseTranslationPage.constructor.url);
    FaqKnowledgeBaseTranslationPage.FaqKnowledgeBaseTranslationPageHeading.should(
      "have.text",
      verificationText.faqKnowledgeBaseTranslationPageHeadingText
    );
  });

  it("Should be redirected from Product to Chatbot Translation", () => {
    HomePage.productSubmenuChatbotTranslationButton.eq(0).click();
    cy.url().should("eq", ChatbotTranslationPage.constructor.url);
    ChatbotTranslationPage.chatbotTranslationPageHeading.should(
      "have.text",
      verificationText.chatbotTranslationPageHeadingText
    );
  });

  it("Should be redirected from Product to Salesforce", () => {
    HomePage.productSubmenuSalesforceButton.eq(0).click();
    cy.url().should("eq", SalesforcePage.constructor.url);
    SalesforcePage.salesforcePageHeading.should(
      "have.text",
      verificationText.salesforcePageHeadingText
    );
  });

  it("Should be redirected from Product to Zendesk", () => {
    HomePage.productSubmenuZendeskButton.eq(0).click();
    cy.url().should("eq", ZendeskPage.constructor.url);
    ZendeskPage.zendeskPageHeading.should(
      "have.text",
      verificationText.zendeskPageHeadingText
    );
  });

  it("Should be redirected from Product to Oracle", () => {
    HomePage.productSubmenuOracleButton.eq(0).click();
    cy.url().should("eq", OraclePage.constructor.url);
    OraclePage.oraclePageHeading.should(
      "have.text",
      verificationText.oraclePageHeadingText
    );
  });

  it("Should be redirected from Product to ServiceNow", () => {
    HomePage.productSubmenuServiceNowButton.eq(0).click();
    cy.url().should("eq", ServiceNowPage.constructor.url);
    ServiceNowPage.serviceNowPageHeading.should(
      "have.text",
      verificationText.serviceNowPageHeadingText
    );
  });

  it("Should be redirected from Product to Chrome Extension", () => {
    HomePage.productSubmenuChromeExtensionButton.eq(0).click();
    cy.url().should("eq", ChromeExtensionPage.constructor.url);
    ChromeExtensionPage.chromeExtensionPageHeading.should(
      "have.text",
      verificationText.chromeExtensionPageHeadingText
    );
  });

  it("Should be redirected from Product to Translation API", () => {
    HomePage.productSubmenuTranslationApiButton.eq(0).click();
    cy.url().should("eq", TranslationApiPage.constructor.url);
    TranslationApiPage.translationApiPageHeading.should(
      "have.text",
      verificationText.translationApiPageHeadingText
    );
  });

  it("Should be redirected from Product to Get the Ebook", () => {
    HomePage.productSubmenuGettheEbookButton.click();
    cy.url().should("eq", EbookPage.constructor.url);
    EbookPage.ebookPageHeading.should(
      "have.text",
      verificationText.ebookPageHeadingText
    );
  });
});
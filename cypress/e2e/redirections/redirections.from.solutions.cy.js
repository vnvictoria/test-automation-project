/// <reference types="cypress" />
import HomePage from "../../../page_objects/home.page";
import IndustryPage from "../../../page_objects/industry.page"
import verificationText from "../../fixtures/verificationText.json";
import UseCasesPage from "../../../page_objects/use.cases.page";
import PartnershipsPage from "../../../page_objects/partnerships.page";
import CaseStudiesPage from "../../../page_objects/case.studies.page";
import DemoPage from "../../../page_objects/demo.page";

describe("Page redirections", () => {
  beforeEach(() => {
    cy.visit("/");
    HomePage.solutionsButton.eq(2).click();
  });

  it("Should be redirected from Solutions to Industries", () => {
    HomePage.solutionsSubmenuIndustriesButton.click();
    cy.url().should("eq", IndustryPage.constructor.url);
    IndustryPage.industryPageHeading.should(
      "have.text",
      verificationText.industryPageHeadingText
    );
  });

  it("Should be redirected from Solutions to Use Cases", () => {
    HomePage.solutionsSubmenuUseCasesButton.click();
    cy.url().should("eq", UseCasesPage.constructor.url);
    UseCasesPage.useCasesPageHeading.should(
      "have.text",
      verificationText.usecasesPageHeadingText
    );
  });

  it("Should be redirected from Solutions to Partnerships", () => {
    HomePage.solutionsSubmenuPartnershipsButton.eq(0).click();
    cy.url().should("eq", PartnershipsPage.constructor.url);
    PartnershipsPage.partnershipsPageHeading.should(
      "have.text",
      verificationText.partnershipsPageHeadingText
    );
  });

  it("Should be redirected from Solutions to Case Studies", () => {
    HomePage.solutionsSubmenuCaseStudiesButton.click();
    cy.url().should("eq", CaseStudiesPage.constructor.url);
    CaseStudiesPage.casesStudiesButton.should(
      "have.css",
      "background-color",
      "rgb(222, 222, 222)"
    );
    CaseStudiesPage.casesStudiesButton.should(
      "have.text",
      verificationText.casesStudiesPageCaseStudiesButtonText
    );
  });

  it("Should be redirected from Solutions to Demo", () => {
    HomePage.solutionsSubmenuGetADemoButton.eq(0).click();
    cy.url().should("eq", DemoPage.constructor.url);
    DemoPage.demoPageHeading.should(
      "have.text",
      verificationText.demoPageHeadingText
    );
  });
});

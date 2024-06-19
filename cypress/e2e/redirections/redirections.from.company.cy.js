/// <reference types="cypress" />
import HomePage from "../../../page_objects/home.page";
import AboutUsPage from "../../../page_objects/about.us.page";
import CareersPage from "../../../page_objects/careers.page";
import ContactUsPage from "../../../page_objects/contact.us.page";
import ResourcesPage from "../../../page_objects/resources.page";
import BlogsPage from "../../../page_objects/blogs.page";
import NewsPage from "../../../page_objects/news.page";
import DemoPage from "../../../page_objects/demo.page";
import verificationText from "../../fixtures/verificationText.json";

describe("Page redirections", () => {
  beforeEach(() => {
    cy.visit('/');
    HomePage.companyButton.eq(2).click();
  });

  it("Should be redirected from Company to About Us", () => {
    HomePage.companySubmenuAboutUsButton.eq(0).click();
    cy.url().should("eq", AboutUsPage.constructor.url);
    AboutUsPage.aboutUsPageHeading.should(
      "have.text",
      verificationText.aboutUsPageHeadingText
    );
  });

  it("Should be redirected from Company to Careers", () => {
    HomePage.companySubmenuCareersButton.eq(0).click();
    cy.url().should("eq", CareersPage.constructor.url);
    CareersPage.careersPageHeading.should(
      "have.text",
      verificationText.careersPageHeadingText
    );
  });

  it("Should be redirected from Company to Contact Us", () => {
    HomePage.companySubmenuContactUsButton.eq(0).click();
    cy.url().should("eq", ContactUsPage.constructor.url);
    ContactUsPage.contactUsPageHeading.should(
      "have.text",
      verificationText.contactUsPageHeadingText
    );
  });

  it("Should be redirected from Company to Resource Center", () => {
    HomePage.companySubmenuResourceCenterButton.eq(0).click();
    cy.url().should("eq", ResourcesPage.constructor.url);
    ResourcesPage.resourcesPageHeading.should(
      "have.text",
      verificationText.resourcesPageHeadingText
    );
  });

  it("Should be redirected from Company to Blog", () => {
    HomePage.companySubmenuBlogButton.eq(0).click();
    cy.url().should("eq", BlogsPage.constructor.url);
    BlogsPage.blogsButton.should(
      "have.css",
      "background-color",
      "rgb(222, 222, 222)"
    );
    BlogsPage.blogsButton.should(
      "have.text",
      verificationText.blogsPageBlogsButtonText
    );
  });

  it("Should be redirected from Company to News", () => {
    HomePage.companySubmenuNewsButton.eq(0).click();
    cy.url().should("eq", NewsPage.constructor.url);
    NewsPage.newsButton.should(
      "have.css",
      "background-color",
      "rgb(222, 222, 222)"
    );
    NewsPage.newsButton.should(
      "have.text",
      verificationText.newsPageNewsButtonText
    );
  });

  it("Should be redirected from Company to Product Support", () => {
    HomePage.companySubmenuProductSupportButton
      .eq(0)
      .invoke("removeAttr", "target")
      .click({ force: true });
    cy.url().should("include", "support.languageio.com");
  });

  it("Should be redirected from Company to Demo", () => {
    HomePage.companySubmenuGetADemoButton.eq(0).click({ force: true });
    cy.url().should("eq", DemoPage.constructor.url);
    DemoPage.demoPageHeading.should(
      "have.text",
      verificationText.demoPageHeadingText
    );
  });
});
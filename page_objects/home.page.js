class HomePage {
    get productButton() {return cy.get('[class="wp-block-navigation-item__label"]')};
    get productSubmenuOverviewButton() {return cy.get('[href="https://languageio.com/translation/"]')};
    get productSubmenuSecurityButton() {return cy.get('[href="https://languageio.com/security/"]')};
    get productSubmenuLiveChatTranslationButton() {return cy.get('[href="https://languageio.com/live-chat-translation/"]')};
    get productSubmenuEmailandTicketTranslationButton() {return cy.get('[href="https://languageio.com/email-and-ticket-translation/"]')};
    get productSubmenuFAQKnowledgeBaseTranslationButton() {return cy.get('[href="https://languageio.com/faq-and-knowledge-base-translation/"]')};
    get productSubmenuChatbotTranslationButton() {return cy.get('[href="https://languageio.com/chatbot-translation/"]')};
    get productSubmenuSalesforceButton() {return cy.get('[href="https://languageio.com/translation/salesforce/"]')};
    get productSubmenuZendeskButton() {return cy.get('[href="https://languageio.com/translation/zendesk/"]')};
    get productSubmenuOracleButton() {return cy.get('[href="https://languageio.com/translation/oracle/"]')};
    get productSubmenuServiceNowButton() {return cy.get('[href="https://languageio.com/translation/servicenow/"]')};
    get productSubmenuChromeExtensionButton() {return cy.get('[href="https://languageio.com/translation/chrome-extension/"]')};
    get productSubmenuTranslationApiButton() {return cy.get('[href="https://languageio.com/translation/machine-translation-api/"]')};
    get productSubmenuGettheEbookButton() {return cy.get('[href="https://languageio.com/lp/ebooks/hit-the-road-running-with-exceptional-chat-support/"]')};
    get productSubmenuProductSupportAndDocumentationButton() { return cy.get('[href="https://support.languageio.com/hc/en-us"]')};
    get companyButton() {return cy.get('[class="wp-block-navigation-item__content wp-block-navigation-submenu__toggle"]')};
    get companySubmenuAboutUsButton() {return cy.get('[href="https://languageio.com/about-us/"]')};
    get companySubmenuCareersButton() {return cy.get('[href="https://languageio.com/careers/"]')};
    get companySubmenuContactUsButton() {return cy.get('[href="https://languageio.com/contact/"]')};
    get companySubmenuResourceCenterButton() {return cy.get('[href="https://languageio.com/resources/"]')};
    get companySubmenuBlogButton() {return cy.get('[href="https://languageio.com/resources/blogs/"]')};
    get companySubmenuNewsButton() {return cy.get('[href="https://languageio.com/resources/news/"]')};
    get companySubmenuProductSupportButton() {return cy.get('[href="https://support.languageio.com/hc/en-us"]')};
    get companySubmenuGetADemoButton() {return cy.get('[href="https://languageio.com/demo/"]')};
    get solutionsButton() {return cy.get('[class="wp-block-navigation-item__label"]')};
    get solutionsSubmenuIndustriesButton() {return cy.get('[href="https://languageio.com/industry/"]')};
    get solutionsSubmenuUseCasesButton() {return cy.get('[href="https://languageio.com/use-cases/"]')};
    get solutionsSubmenuPartnershipsButton() {return cy.get('[href="https://languageio.com/partnerships/"]')};
    get solutionsSubmenuCaseStudiesButton() {return cy.get('[href="https://languageio.com/resources/case-studies/"]')};
    get solutionsSubmenuGetADemoButton() {return cy.get('[href="https://languageio.com/demo/"]')};
    get requestADemoButton() {return  cy.get ('[href="https://languageio.com/demo/"]')};
}
export default new HomePage();
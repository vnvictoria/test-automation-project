class IndustryPage {
    static url = 'https://languageio.com/industry/';
    get industryPageHeading() {return cy.get('[id="h-domain-adapted-translation-for-your-industry"]')};
}
export default new IndustryPage();
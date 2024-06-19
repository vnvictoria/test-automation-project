class SalesforcePage {
    static url = 'https://languageio.com/translation/salesforce/';
    get salesforcePageHeading() {return cy.get('[class="wp-block-heading has-text-align-left is-style-default"]')};
}
export default new SalesforcePage();
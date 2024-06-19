class ServiceNowPage {
    static url = 'https://languageio.com/translation/servicenow/';
    get serviceNowPageHeading() {return cy.get('[class="wp-block-heading has-text-align-left is-style-default"]')};
}
export default new ServiceNowPage();
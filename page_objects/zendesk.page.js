class ZendeskPage {
    static url = 'https://languageio.com/translation/zendesk/';
    get zendeskPageHeading() {return cy.get('[class="wp-block-heading has-text-align-left is-style-default"]')};
}
export default new ZendeskPage();
class OverviewPage {
    static url = 'https://languageio.com/translation/';
    get overviewPageHeading() {return cy.get('[class="wp-block-heading has-text-align-center"]')};
}
export default new OverviewPage();
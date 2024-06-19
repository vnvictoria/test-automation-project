class AboutUsPage {
    static url = 'https://languageio.com/about-us/';
    get aboutUsPageHeading() {return cy.get('[class="wp-block-heading has-text-align-center"]')};
}
export default new AboutUsPage();
class CareersPage {
    static url = 'https://languageio.com/careers/';
    get careersPageHeading() {return cy.get('[class="wp-block-heading has-text-align-center"]')};
}
export default new CareersPage();
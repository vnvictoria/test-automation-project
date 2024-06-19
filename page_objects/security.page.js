class SecurityPage {
    static url = 'https://languageio.com/security/';
    get securityPageHeading() {return cy.get('[class="wp-block-heading has-text-align-center"]')};
}
export default new SecurityPage();
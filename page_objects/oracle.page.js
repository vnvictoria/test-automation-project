class OraclePage {
    static url = 'https://languageio.com/translation/oracle/';
    get oraclePageHeading() {return cy.get('[class="wp-block-heading has-text-align-left is-style-default"]')};
}
export default new OraclePage();
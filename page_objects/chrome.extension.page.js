class ChromeExtensionPage {
    static url = 'https://languageio.com/translation/chrome-extension/';
    get chromeExtensionPageHeading() {return cy.get('[class="wp-block-heading has-text-align-left is-style-default"]')};
}
export default new ChromeExtensionPage();
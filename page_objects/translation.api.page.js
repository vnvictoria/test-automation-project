class TranslationApiPage {
    static url = 'https://languageio.com/translation/machine-translation-api/';
    get translationApiPageHeading() {return cy.get('[class="wp-block-heading has-text-align-left is-style-default"]')};
}
export default new TranslationApiPage();
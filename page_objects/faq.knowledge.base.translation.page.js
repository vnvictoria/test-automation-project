class FaqKnowledgeBaseTranslationPage {
    static url = 'https://languageio.com/faq-and-knowledge-base-translation/';
    get FaqKnowledgeBaseTranslationPageHeading() {return cy.get('[class="wp-block-heading has-text-align-left is-style-default"]')};
}
export default new FaqKnowledgeBaseTranslationPage();

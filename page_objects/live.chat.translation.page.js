class LiveChatTranslationPage {
    static url = 'https://languageio.com/live-chat-translation/';
    get LiveChatTranslationPageHeading() {return cy.get('[class="wp-block-heading has-text-align-left is-style-default"]')};
}
export default new LiveChatTranslationPage();
class ChatbotTranslationPage {
    static url = 'https://languageio.com/chatbot-translation/';
    get chatbotTranslationPageHeading() {return cy.get('[id="h-power-up-your-24-7-support-with-chatbot-translation"]')};
    get requestADemoButton() {return cy.get('[href="#"]')};
}
export default new ChatbotTranslationPage();
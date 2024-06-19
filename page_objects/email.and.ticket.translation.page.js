class EmailAndTicketTranslationPage {
    static url = 'https://languageio.com/email-and-ticket-translation/';
    get EmailAndTicketTranslationPageHeading() {return cy.get('[class="wp-block-heading has-text-align-left is-style-default"]')};
}
export default new EmailAndTicketTranslationPage();
class ContactUsPage {
static url = 'https://languageio.com/contact/';
get contactUsPageHeading() {return cy.get('#h-speak-to-a-language-i-o-specialist')};
}
export default new ContactUsPage();
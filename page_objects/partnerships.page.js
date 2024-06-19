class PartnershipsPage {
    static url = 'https://languageio.com/partnerships/';
    get partnershipsPageHeading() {return cy.get('[id="h-partner-with-the-leader-in-ai-real-time-translations-for-customer-support"]')};
}
export default new PartnershipsPage();
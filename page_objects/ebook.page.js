class EbookPage {
    static url = 'https://languageio.com/lp/ebooks/hit-the-road-running-with-exceptional-chat-support/';
    get ebookPageHeading() {return cy.get('[id="h-hit-the-road-running-with-exceptional-chat-support"]')};
}
export default new EbookPage();
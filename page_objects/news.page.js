class NewsPage {
    static url = 'https://languageio.com/resources/news/';
    get newsButton() {return cy.get('[class="button term-link active"]')};
}
export default new NewsPage();
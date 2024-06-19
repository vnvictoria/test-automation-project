class BlogsPage {
    static url = 'https://languageio.com/resources/blogs/';
    get blogsButton() {return cy.get('[class="button term-link active"]')};
}
export default new BlogsPage();
class CaseStudiesPage {
    static url = 'https://languageio.com/resources/case-studies/';
    get casesStudiesButton() {return cy.get('[class="button term-link active"]')};
}
export default new CaseStudiesPage();
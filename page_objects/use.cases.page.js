class UseCasesPage {
    static url = 'https://languageio.com/use-cases/';
    get useCasesPageHeading() {return cy.get('[id="h-improve-your-customer-experience-while-reducing-costs"]')};
}
export default new UseCasesPage();
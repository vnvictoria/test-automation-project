class DemoPage { 
    static url = 'https://languageio.com/demo/';
    get demoPageHeading() {return  cy.get('h1')};
    get companyEmailField() {return cy.get('[name="email"]')};
    get firstNameField() {return cy.get('[name="firstname"]')};
    get lastNameField() {return cy.get('[name="lastname"]')};
}
export default new DemoPage();
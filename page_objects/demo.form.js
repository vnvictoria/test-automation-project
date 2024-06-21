class DemoFormPage {
    get demoFormContainer() {return cy.get('#pum-57863')};
    get companyEmailField() {return cy.get('[name="email"]')};
    get firstNameField() {return cy.get('[name="firstname"]')};
    get lastNameField() {return cy.get('[name="lastname"]')};
}
export default new DemoFormPage();
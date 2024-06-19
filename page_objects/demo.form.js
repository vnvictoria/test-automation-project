class DemoFormPage {
    get companyEmailField() {return cy.get('[name="email"]')};
    get firstNameField() {return cy.get('[name="firstname"]')};
    get lastNameField() {return cy.get('[name="lastname"]')};
}
export default new DemoFormPage();
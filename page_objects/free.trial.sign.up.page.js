class FreeTrialSignupPage {
    get firstNameField() {return  cy.get('[name="consumerFirstName"]')};
    get lastNameEmailField() {return  cy.get('[name="consumerLastName"]')};
    get titleField() {return cy.get('[name="consumerTitle"]')};
    get emailField() {return cy.get('[name="consumerEmail"]')};
    get passwordField() {return cy.get('[name="consumerPassword"]')};
    get confirmPasswordField() {return  cy.get('[name="consumerConfirmedPassword"]')};
    get companyNameField() {return cy.get('[name="companyName"]')};
    get solutionsCheckbox() {return cy.get('[type="checkbox"]')};
}
export default new FreeTrialSignupPage();
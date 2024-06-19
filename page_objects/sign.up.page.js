class SignUpPage {
    get usernameField() {return cy.get('#username')};
    get emailField() {return cy.get('#email')};
    get passwordField() {return cy.get('#password')};
    get continueButton() {return cy.contains('Continue')};
    get promptAlert() {return cy.get('[id="prompt-alert"]')};
    get passwordVisibilityButton() {return cy.get('[type="button"]')};
    get emailVerificationAlert() {return cy.get('[class="alert alert-warning"]')};
}
export default new SignUpPage();
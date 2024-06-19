class LoginPage {
    static url = 'https://languageio.com/translation/zendesk/';
    get usernameField() {return cy.get('#username')};
    get passwordField() {return  cy.get('#password')};
    get continueButton() {return cy.contains('Continue')};
    get wrongCredentialsErrorMessage() {return cy.get('[data-error-code="wrong-credentials"]')};
    get passwordVisibilityButton() {return cy.get('[type="button"]')};
    get signUpButton() {return cy.contains('Sign up')};
}
export default new LoginPage();
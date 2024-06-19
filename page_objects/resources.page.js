class ResourcesPage {
    static url = 'https://languageio.com/resources/';
    get resourcesPageHeading() {return cy.get('[class="wp-block-heading has-text-align-center"]')};
}
export default new ResourcesPage();
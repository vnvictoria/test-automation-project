Cypress.Commands.add('typeInIframe', (iframeSelector, inputSelector, text) => {
    cy.get(iframeSelector)
      .its('0.contentDocument.body').should('not.be.empty')
      .then(cy.wrap)
      .find(inputSelector)
      .type(text);
  });

  Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
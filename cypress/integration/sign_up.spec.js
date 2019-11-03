/// <reference types="Cypress" />

context('Sign up', () => {

  describe('When user submits sign up form correctly', () => {

    it('displays the user name on the page', () => {
      cy.visit('baseURL');
      cy.get('#sign-up-handle').type('melvin');
      cy.get('#sign-up-password').type('123');
      cy.get('#sign-up-button').click();
      cy.get('#user-dashboard').should('contain', 'melvin');
    });

  });

});

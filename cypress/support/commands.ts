// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This is will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

declare global {
  namespace Cypress {
    interface Chainable {
      login: (emai, pass) => void;
    }
  }
}
export const login = ( ( email, pass ) => {
  cy.visit( 'http://localhost:4200/' );
  cy.get( 'input[name=email]' ).type( email );
  cy.get( 'input[name=password]' ).type( pass );
  cy.get( 'button[type=submit]' ).click();
} );
Cypress.Commands.add( 'login', login );

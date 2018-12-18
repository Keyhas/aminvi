/// <reference types="cypress" />


describe( 'Test de prueba', () => {
  it( 'Carga pagina', () => {
    cy.visit( '/' );
    cy.get( 'body' ).then( ( $body ) => {
      if ( !$body.find( 'button[label=logout]' ) ) {
        cy.get( 'button[label=logout]' ).click();
      }
    } );
  } );
  describe( 'Hay un form', () => {
    it( 'hay titulo', () => {
      cy.get( 'p-card p-header h3' ).should( 'have.text', 'Iniciar sesión' );
    } );
    it( 'hay email input', () => {
      cy.get( 'input[type=text]' ).type( 'test' );
    } );
    it( 'hay password input', () => {
      cy.get( 'input[type=password]' ).type( '123456789' );
    } );

    it( 'hay boton de send', () => {
      cy.get( 'button[label=Confirmar]' );
    } );
    it( 'hay boton de clear', () => {
      cy.get( 'button[label=Limpiar]' );

    } );
  } );
  describe( 'Login', () => {
    beforeEach( () => {
      cy.get( 'body' ).then( ( $body ) => {
        if ( !$body.find( 'button[label=logout]' ) ) {
          cy.get( 'button[label=logout]' ).click();
        }
      } );
    } );
    it( 'clear', () => {
      cy.get( 'input[type=text]' ).type( 'test' );
      cy.get( 'input[type=password]' ).type( '123456789' );
      cy.get( 'button[label=Limpiar]' ).click();
      cy.get( 'input[type=text]' ).should( 'contain', '' );
      cy.get( 'input[type=password]' ).should( 'contain', '' );
    } );
    it( 'fail login', () => {
      cy.get( 'input[type=text]' ).type( 'test' );
      cy.get( 'input[type=password]' ).type( '123456789' );
      cy.get( 'button[label=Confirmar]' ).click();
      cy.get( 'p-card' ).should( 'contain', 'Iniciar' );
      cy.get( 'p-card' ).children().should( 'be.visible' );
    } );
    it( ' log in', () => {
      cy.login( 'test@test.com', '123456789' );
      cy.get( 'h1' ).contains( 'Welcome' );
    } );
    it( 'log out', () => {
      cy.get( 'button' ).click();
      cy.get( 'h1' ).should( 'not.be.visible', 'Welcome' );
      cy.get( 'p-card' ).children().then( ( child ) => {
        child.find( 'button' );
        child.find( 'input' );
      } );
    } );
  } );
} );

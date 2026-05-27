/// <reference types="cypress" />

describe('Login Suite', () => {
  const baseUrl = 'https://www.google.com/?zx=1774588951027&no_sw_cr=1';

  beforeEach(() => {
    cy.visit(baseUrl);
  });

  it('should load the Google page and display the search input', () => {
    cy.title().should('include', 'Google');
    cy.get('input[name="q"]').should('be.visible');
  });

  it('should search for Cypress and show results', () => {
    cy.get('input[name="q"]').type('Cypress testing{enter}');
    cy.get('#search').should('exist');
    cy.contains('Cypress').should('be.visible');
  });

  it('should show suggestions when typing a query', () => {
    cy.get('input[name="q"]').type('cypress{delay=100}');
    cy.get('ul[role="listbox"]').should('be.visible');
  });

  it('should open the sign-in page from Google', () => {
    cy.contains('Sign in').click();
    cy.url().should('include', 'accounts.google.com');
    cy.get('input[type="email"]').should('be.visible');
  });

  it('should verify the page contains the Google logo', () => {
    cy.get('img[alt="Google"]', { timeout: 10000 }).should('be.visible');
  });
});
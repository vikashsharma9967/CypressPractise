class LoginPage {
  constructor() {
    this.url = 'https://practicetestautomation.com/practice-test-login/';
    this.usernameInput = '#username';
    this.passwordInput = '#password';
    this.submitButton = '#submit';
    this.errorMessage = '#error';
    this.successMessage = 'Congratulations student. You successfully logged in!';
    this.logoutButton = 'Log out';
  }

  visit() {
    cy.visit(this.url);
  }

  enterUsername(username) {
    cy.get(this.usernameInput).should('be.visible').type(username);
  }

  enterPassword(password) {
    cy.get(this.passwordInput).should('be.visible').type(password);
  }

  submit() {
    cy.get(this.submitButton).click();
  }

  assertErrorMessage(message) {
    cy.get(this.errorMessage).should('be.visible').and('have.text', message);
  }

  assertSuccessfulLogin() {
    cy.url().should('include', '/logged-in-successfully/');
    cy.contains(this.successMessage).should('be.visible');
    cy.contains(this.logoutButton).should('be.visible');
  }
}

module.exports = new LoginPage();

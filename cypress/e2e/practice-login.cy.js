/// <reference types="cypress" />

const loginPage = require('../pages/loginPage');

describe('Practice Test Automation Login', () => {
  beforeEach(() => {
    loginPage.visit();
  });
  
  it('Positive login with valid credentials', () => {
    cy.title().should('include', 'Test Login');
    loginPage.enterUsername('student');
    loginPage.enterPassword('Password123');
    loginPage.submit();

    loginPage.assertSuccessfulLogin();
  });

  it('Negative login with invalid username', () => {
    loginPage.enterUsername('incorrectUser');
    loginPage.enterPassword('Password123');
    loginPage.submit();

    loginPage.assertErrorMessage('Your username is invalid!');
  });

  it('Negative login with invalid password', () => {
    loginPage.enterUsername('student');
    loginPage.enterPassword('incorrectPassword');
    loginPage.submit();

    loginPage.assertErrorMessage('Your password is invalid!');
  });

    it('Negative login with invalid password 1', () => {
    loginPage.enterUsername('student');
    loginPage.enterPassword('incorrectPassword');
    loginPage.submit();

    loginPage.assertErrorMessage('Your password is invalid!');
  });

    it('Negative login with invalid password 2', () => {
    loginPage.enterUsername('student');
    loginPage.enterPassword('incorrectPassword');
    loginPage.submit();

    loginPage.assertErrorMessage('Your password is invalid!');
  });

    it('Negative login with invalid password 3', () => {
    loginPage.enterUsername('student');
    loginPage.enterPassword('incorrectPassword');
    loginPage.submit();

    loginPage.assertErrorMessage('Your password is invalid!');
  });

      it('Negative login with invalid password 4', () => {
    loginPage.enterUsername('student');
    loginPage.enterPassword('incorrectPassword');
    loginPage.submit();

    loginPage.assertErrorMessage('Your password is invalid!');
  });
});

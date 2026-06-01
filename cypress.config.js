const { defineConfig } = require("cypress");

module.exports = defineConfig({
  // 1. Reporter Configuration
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Execution Report',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },

  e2e: {
    baseUrl: 'https://practicetestautomation.com',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    video: false,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
      // 2. Initialize HTML Reporter Plugin
      require('cypress-mochawesome-reporter/plugin')(on);

      // 3. Initialize Terminal Logger (logs all clicks/actions to report)
      require('cypress-terminal-report/src/installLogsPrinter')(on, {
        printLogsToConsole: 'always',
      });

      // 4. Browser Launch Strategy
      on('before:browser:launch', (browser = {}, launchOptions) => {
        if (browser.family === 'chromium' && browser.name !== 'electron') {
          launchOptions.args.push('--no-first-run');
          launchOptions.args.push('--no-service-autorun');
          launchOptions.args.push('--password-store=basic');
          launchOptions.args.push('--start-maximized');
          // Targeted fix for the Edge Admin Sign-in popup:
          launchOptions.args.push('--disable-features=EdgeSignin');
          launchOptions.args.push('--no-default-browser-check');
        }
        return launchOptions;
      });
    },
  },
});
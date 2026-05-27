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
    baseUrl: 'https://oceanwp.org/demos/',
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 8000,
    video: false,
    screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
        // Change this line:
        require('cypress-terminal-report/src/installLogsPrinter')(on);

        // To this (often works if the /src/ path fails):
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
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     setupNodeEvents(on, config) {
    },
      baseUrl: 'https://languageio.com',
      viewportWidth: 1536,
      viewportHeight: 960,
    },
});
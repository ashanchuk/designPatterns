exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],
    capabilities: {
        'browserName': 'chrome'
      },
    SELENIUM_PROMISE_MANAGER: false,

    jasmineNodeOpts: {
      defaultTimeoutInterval: 100000
    }
  }

/** @type {Detox.DetoxConfig} */
module.exports = {
  testRunner: {
    args: {
      '$0': 'jest',
      config: 'e2e/jest.config.js'
    },
    jest: {
      setupTimeout: 120000
    }
  },
  apps: {
    'ios': {
      type: 'ios.app',
      binaryPath: './ios/MyDemoApp.app',
    },
    'android': {
      type: 'android.apk',
      binaryPath: './apk/MyDemoApp.apk',
      testBinaryPath: './apk/MyDemoApp.apk',
      packageName: 'com.saucelabs.mydemoapp.rn'

    }
  },
  devices: {
    simulator: {
      type: 'ios.simulator',
      device: {
        type: 'iPhone 12'
      }
    },
    attached: {
      type: 'android.attached',
      device: {
        adbName: '.*' //Any attached devices using usb
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_3a'
      }
    }
  },
  configurations: {
    'ios': {
      device: 'simulator',
      app: 'ios'
    },
    'android': {
      device: 'emulator',
      app: 'android'
    },
    'android.att': {
      device: 'attached',
      app: 'android.att'
    },
  }
};

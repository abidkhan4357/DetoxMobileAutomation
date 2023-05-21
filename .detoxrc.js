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
  artifacts: {
    /* local (per-configuration) section */
    "plugins": {
      "instruments": {"enabled": false},
      "log": {"enabled": true},
      "uiHierarchy": "enabled",
      "screenshot": {
        "shouldTakeAutomaticSnapshots": true,
        "keepOnlyFailedTestsArtifacts": true,
        "takeWhen": {
          "testStart": false,
          "testDone": true
        }
      },
      "video": {
        "android": {
          "bitRate": 4000000
        },
        "simulator": {
          "codec": "hevc"
        }
      }
    }
  },
  apps: {
    'ios.debug': {
      binaryPath: "/Users/Ankit/Library/Developer/Xcode/DerivedData/Raven-echnisplcztxcgbcdichyefflysk/Build/Products/Debug-iphonesimulator/Raven.app",
      build: "xcodebuild -workspace ios/Raven.xcworkspace -configuration debug -scheme Raven -sdk iphonesimulator -derivedDataPath -destination id=F809E87B-AAAD-48AD-8774-3FAED6E91D9A",
      type: 'ios.app',
    },
    'ios.release': {
      binaryPath: "",
      build: "",
      type: 'ios.app',
    },
    'android.debug': {
      type: 'android.apk',
      // /Users/Ankit/AndroidStudioProjects/Raven/app/build/intermediates/apk/debug/app-debug.apk
      binaryPath: 'android/app/build/outputs/apk/debug/app-debug.apk',
      // testBinaryPath: 'android/app/build/outputs/apk/androidTest/debug/app-debug-androidTest.apk',
      build: 'cd android && ./gradlew assembleDebug assembleAndroidTest -DtestBuildType=debug',
      reversePorts: [
        8081
      ]
    },
    'android.release': {
      type: 'android.apk',
      binaryPath: 'apk/app-release.apk',
      testBinaryPath: 'apk/app-release-androidTest.apk',
      build: 'cd android && ./gradlew assembleRelease assembleAndroidTest -DtestBuildType=release',
      reversePorts: [
        8081
      ]
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
        adbName: '.*'
      }
    },
    emulator: {
      type: 'android.emulator',
      device: {
        avdName: 'Pixel_4_XL_API_32'
        // avdName: 'Pixel_API_28_AOSP'
      }
    }
  },
  configurations: {
    'ios.sim.debug': {
      device: 'simulator',
      app: 'ios.debug'
    },
    'ios.sim.release': {
      device: 'simulator',
      app: 'ios.release'
    },
    'android.att.debug': {
      device: 'attached',
      app: 'android.debug'
    },
    'android.att.release': {
      device: 'attached',
      app: 'android.release'
    },
    'android.emu.debug': {
      device: 'emulator',
      app: 'android.debug'
    },
    'android.emu.release': {
      device: 'emulator',
      app: 'android.release'
    }
  }
};

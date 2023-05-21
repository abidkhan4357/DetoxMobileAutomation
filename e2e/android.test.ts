import { device} from 'detox';

describe("First Android Test", () => {

    // beforeEach(async () => {
    //   await device.reloadReactNative();
    // })

    it("Launch app on android emulator", async () => {
         await device.launchApp();       
    });

});
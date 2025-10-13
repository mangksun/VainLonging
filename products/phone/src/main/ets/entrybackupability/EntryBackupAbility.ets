
import { AbilityConstant, UIAbility, Want } from '@kit.AbilityKit';
import { hilog } from '@kit.PerformanceAnalysisKit';
import { display, window } from '@kit.ArkUI';
// import { BreakpointConstants } from '@ohos/constantsCommon';

export default class EntryAbility extends UIAbility {
  private windowObj?: window.Window;

  onCreate(want: Want, launchParam: AbilityConstant.LaunchParam) {
    AppStorage.setOrCreate('context', this.context)
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onCreate');
  }

  onDestroy() {
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onDestroy');
  }

  onWindowStageCreate(windowStage: window.WindowStage) {
    // Main window is created, set main page for this ability
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageCreate');

    // windowStage.getMainWindow().then((data: window.Window) => {
    //   this.windowObj = data;
    //   this.updateBreakpoint(this.windowObj.getWindowProperties().windowRect.width);
    //   this.windowObj.on('windowSizeChange', (windowSize: window.Size) => {
    //     this.updateBreakpoint(windowSize.width);
    //   })
    // })

    windowStage.loadContent('pages/Index', (err) => {
      AppStorage.setOrCreate('uiContext', windowStage.getMainWindowSync().getUIContext());
      if (err.code) {
        hilog.error(0x0000, 'testTag', 'Failed to load the content. Cause: %{public}s', JSON.stringify(err) ?? '');
        return;
      }
      hilog.info(0x0000, 'testTag', 'Succeeded in loading the content.');
    });
  }

  // private updateBreakpoint(windowWidth: number): void{
  //   let windowWidthVp = windowWidth / display.getDefaultDisplaySync().densityPixels;
  //   let curBp: string = '';
  //   if (windowWidthVp < BreakpointConstants.BREAKPOINT_VALUE_NUMBER[1]) {
  //     curBp = BreakpointConstants.BREAKPOINT_SM;
  //   } else if (windowWidthVp < BreakpointConstants.BREAKPOINT_VALUE_NUMBER[2]) {
  //     curBp = BreakpointConstants.BREAKPOINT_MD;
  //   } else {
  //     curBp = BreakpointConstants.BREAKPOINT_LG;
  //   }
  //   AppStorage.setOrCreate('currentBreakpoint', curBp);
  // }

  onWindowStageDestroy() {
    // Main window is destroyed, release UI related resources
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onWindowStageDestroy');
  }

  onForeground() {
    // Ability has brought to foreground
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onForeground');
  }

  onBackground() {
    // Ability has back to background
    hilog.info(0x0000, 'testTag', '%{public}s', 'Ability onBackground');
  }
}

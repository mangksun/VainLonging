if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { ListDataViewModel } from '@normalized:N&&&home/src/main/ets/viewmodel/ListDataViewModel&1.0.0';
export class ListItemSmall extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__listData = new ObservedPropertyObjectPU(new ListDataViewModel().getListDataList(), this, "listData");
        this.scrollerForList = new Scroller();
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params) {
        if (params.listData !== undefined) {
            this.listData = params.listData;
        }
        if (params.scrollerForList !== undefined) {
            this.scrollerForList = params.scrollerForList;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__listData.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__listData.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get listData() {
        return this.__listData.get();
    }
    set listData(newValue) {
        this.__listData.set(newValue);
    }
    // onScrollStop(){
    //   let rect = this.scrollerForList.getItemRect(this.currentIndex);
    //   if (this.velocity > 10) {
    //     this.scrollerForList.scrollToIndex(this.currentIndex, true, ScrollAlign.START);
    //   } else if (this.velocity < -10) {
    //     this.scrollerForList.scrollToIndex(this.currentIndex + 1, true, ScrollAlign.START);
    //   }
    // }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: '6vp', scroller: this.scrollerForList });
            List.debugLine("features/Home/src/main/ets/view/ListItemSmall.ets(23:7)", "home");
            List.chainAnimation(true);
            List.edgeEffect(EdgeEffect.None);
            List.listDirection(Axis.Horizontal);
            List.scrollBar(BarState.Off);
            List.width('100%');
            List.height(230);
        }, List);
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                itemCreation2(elmtId, isInitialRender);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.width('6vp');
                ListItem.height('100%');
                ListItem.debugLine("features/Home/src/main/ets/view/ListItemSmall.ets(24:9)", "home");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            ForEach.create();
            const forEachItemGenFunction = _item => {
                const item = _item;
                {
                    const itemCreation = (elmtId, isInitialRender) => {
                        ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                        itemCreation2(elmtId, isInitialRender);
                        if (!isInitialRender) {
                            ListItem.pop();
                        }
                        ViewStackProcessor.StopGetAccessRecording();
                    };
                    const itemCreation2 = (elmtId, isInitialRender) => {
                        ListItem.create(deepRenderFunction, true);
                        ListItem.height('100%');
                        ListItem.width('45%');
                        ListItem.debugLine("features/Home/src/main/ets/view/ListItemSmall.ets(29:11)", "home");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/Home/src/main/ets/view/ListItemSmall.ets(30:13)", "home");
                            Column.clip(true);
                            Column.height('100%');
                            Column.width('100%');
                            Column.alignItems(HorizontalAlign.Start);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": -1, "type": -1, params: [item.pic], "bundleName": "com.example.wangningmei", "moduleName": "Home" });
                            Image.debugLine("features/Home/src/main/ets/view/ListItemSmall.ets(31:15)", "home");
                            Image.width('100%');
                            Image.objectFit(ImageFit.Contain);
                            Image.borderRadius('12vp');
                            Image.border({ width: 1, color: Color.Gray });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            // .margin({ left: '12vp' })
                            Column.create();
                            Column.debugLine("features/Home/src/main/ets/view/ListItemSmall.ets(38:15)", "home");
                            // .margin({ left: '12vp' })
                            Column.height(31);
                            // .margin({ left: '12vp' })
                            Column.alignItems(HorizontalAlign.Start);
                            // .margin({ left: '12vp' })
                            Column.margin({ top: '8vp' });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.name);
                            Text.debugLine("features/Home/src/main/ets/view/ListItemSmall.ets(39:17)", "home");
                            Text.fontSize('18vp');
                            Text.fontColor(Color.Black);
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                            Text.maxLines(1);
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            // .textAlign(TextAlign.Start)
                            Text.create(item.artist);
                            Text.debugLine("features/Home/src/main/ets/view/ListItemSmall.ets(45:17)", "home");
                            // .textAlign(TextAlign.Start)
                            Text.fontSize('13vp');
                            // .textAlign(TextAlign.Start)
                            Text.fontColor(Color.Gray);
                            // .textAlign(TextAlign.Start)
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                            // .textAlign(TextAlign.Start)
                            Text.maxLines(1);
                        }, Text);
                        // .textAlign(TextAlign.Start)
                        Text.pop();
                        // .margin({ left: '12vp' })
                        Column.pop();
                        Column.pop();
                        ListItem.pop();
                    };
                    this.observeComponentCreation2(itemCreation2, ListItem);
                    ListItem.pop();
                }
            };
            this.forEachUpdateFunction(elmtId, this.listData, forEachItemGenFunction, (item) => JSON.stringify(item), false, false);
        }, ForEach);
        ForEach.pop();
        {
            const itemCreation = (elmtId, isInitialRender) => {
                ViewStackProcessor.StartGetAccessRecordingFor(elmtId);
                itemCreation2(elmtId, isInitialRender);
                if (!isInitialRender) {
                    ListItem.pop();
                }
                ViewStackProcessor.StopGetAccessRecording();
            };
            const itemCreation2 = (elmtId, isInitialRender) => {
                ListItem.create(deepRenderFunction, true);
                ListItem.width('6vp');
                ListItem.height('100%');
                ListItem.debugLine("features/Home/src/main/ets/view/ListItemSmall.ets(66:9)", "home");
            };
            const deepRenderFunction = (elmtId, isInitialRender) => {
                itemCreation(elmtId, isInitialRender);
                ListItem.pop();
            };
            this.observeComponentCreation2(itemCreation2, ListItem);
            ListItem.pop();
        }
        List.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=ListItemSmall.js.map
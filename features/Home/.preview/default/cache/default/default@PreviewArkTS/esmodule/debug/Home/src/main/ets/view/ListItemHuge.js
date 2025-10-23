if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { ListDataViewModel } from '@normalized:N&&&home/src/main/ets/viewmodel/ListDataViewModel&1.0.0';
export class ListItemHuge extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__listData = new ObservedPropertyObjectPU(new ListDataViewModel().getListDataList(), this, "listData");
        this.__bgColor = new ObservedPropertySimplePU(Color.Grey, this, "bgColor");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params) {
        if (params.listData !== undefined) {
            this.listData = params.listData;
        }
        if (params.bgColor !== undefined) {
            this.bgColor = params.bgColor;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__listData.purgeDependencyOnElmtId(rmElmtId);
        this.__bgColor.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__listData.aboutToBeDeleted();
        this.__bgColor.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get listData() {
        return this.__listData.get();
    }
    set listData(newValue) {
        this.__listData.set(newValue);
    }
    get bgColor() {
        return this.__bgColor.get();
    }
    set bgColor(newValue) {
        this.__bgColor.set(newValue);
    }
    // @Builder
    // ListItemSmall() {
    //
    //
    // }
    // 实现参考
    //     onWillStopDragging((velocity: number) => {
    //       if (velocity < 0) {
    //         // 向下滑动处理
    //       } else {
    //         // 向上滑动处理
    //       }
    //       })
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: '6vp' });
            List.debugLine("features/Home/src/main/ets/view/ListItemHuge.ets(30:7)", "home");
            List.chainAnimation(true);
            List.edgeEffect(EdgeEffect.None);
            List.listDirection(Axis.Horizontal);
            List.scrollBar(BarState.Off);
            List.width('100%');
            List.height('360vp');
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
                ListItem.height('100%');
                ListItem.width('6vp');
                ListItem.debugLine("features/Home/src/main/ets/view/ListItemHuge.ets(31:9)", "home");
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
                        ListItem.clip(true);
                        ListItem.backgroundColor(this.bgColor);
                        ListItem.backgroundBlurStyle(BlurStyle.BACKGROUND_THIN);
                        ListItem.borderRadius('16vp');
                        ListItem.height('100%');
                        ListItem.debugLine("features/Home/src/main/ets/view/ListItemHuge.ets(36:11)", "home");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/Home/src/main/ets/view/ListItemHuge.ets(37:13)", "home");
                            Column.height('100%');
                            Column.alignItems(HorizontalAlign.Center);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": -1, "type": -1, params: [item.pic], "bundleName": "com.example.wangningmei", "moduleName": "Home" });
                            Image.debugLine("features/Home/src/main/ets/view/ListItemHuge.ets(38:15)", "home");
                            Image.width('70%');
                            Image.objectFit(ImageFit.Contain);
                            Image.border({ width: 1, color: Color.Gray });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create({ space: '5vp' });
                            Column.debugLine("features/Home/src/main/ets/view/ListItemHuge.ets(43:15)", "home");
                            Column.width('70%');
                            Column.padding({
                                top: '16vp',
                                bottom: '16vp',
                                left: '16vp',
                                right: '16vp'
                            });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.name);
                            Text.debugLine("features/Home/src/main/ets/view/ListItemHuge.ets(44:17)", "home");
                            Text.fontSize('18vp');
                            Text.fontColor(Color.White);
                            Text.textAlign(TextAlign.Center);
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            // .maxLines(1)
                            Text.create(item.artist);
                            Text.debugLine("features/Home/src/main/ets/view/ListItemHuge.ets(50:17)", "home");
                            // .maxLines(1)
                            Text.fontSize('13vp');
                            // .maxLines(1)
                            Text.fontColor('#DCDCDC');
                            // .maxLines(1)
                            Text.textAlign(TextAlign.Center);
                            // .maxLines(1)
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                            // .maxLines(1)
                            Text.maxLines(1);
                        }, Text);
                        // .maxLines(1)
                        Text.pop();
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
                ListItem.height('100%');
                ListItem.width('6vp');
                ListItem.debugLine("features/Home/src/main/ets/view/ListItemHuge.ets(82:9)", "home");
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
//# sourceMappingURL=ListItemHuge.js.map
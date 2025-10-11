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
        this.scrollerForHugeList = new Scroller();
        this.__bgColor = new ObservedPropertySimplePU(Color.Grey, this, "bgColor");
        this.__centerIndex = new ObservedPropertySimplePU(0, this, "centerIndex");
        this.__myOffset = new ObservedPropertySimplePU(6, this, "myOffset");
        this.__listWidthHuge = new ObservedPropertySimplePU(252.2, this, "listWidthHuge");
        this.__listOffsetHuge = new ObservedPropertySimplePU(0
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
        , this, "listOffsetHuge");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params) {
        if (params.listData !== undefined) {
            this.listData = params.listData;
        }
        if (params.scrollerForHugeList !== undefined) {
            this.scrollerForHugeList = params.scrollerForHugeList;
        }
        if (params.bgColor !== undefined) {
            this.bgColor = params.bgColor;
        }
        if (params.centerIndex !== undefined) {
            this.centerIndex = params.centerIndex;
        }
        if (params.myOffset !== undefined) {
            this.myOffset = params.myOffset;
        }
        if (params.listWidthHuge !== undefined) {
            this.listWidthHuge = params.listWidthHuge;
        }
        if (params.listOffsetHuge !== undefined) {
            this.listOffsetHuge = params.listOffsetHuge;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__listData.purgeDependencyOnElmtId(rmElmtId);
        this.__bgColor.purgeDependencyOnElmtId(rmElmtId);
        this.__centerIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__myOffset.purgeDependencyOnElmtId(rmElmtId);
        this.__listWidthHuge.purgeDependencyOnElmtId(rmElmtId);
        this.__listOffsetHuge.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__listData.aboutToBeDeleted();
        this.__bgColor.aboutToBeDeleted();
        this.__centerIndex.aboutToBeDeleted();
        this.__myOffset.aboutToBeDeleted();
        this.__listWidthHuge.aboutToBeDeleted();
        this.__listOffsetHuge.aboutToBeDeleted();
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
    get centerIndex() {
        return this.__centerIndex.get();
    }
    set centerIndex(newValue) {
        this.__centerIndex.set(newValue);
    }
    get myOffset() {
        return this.__myOffset.get();
    }
    set myOffset(newValue) {
        this.__myOffset.set(newValue);
    }
    get listWidthHuge() {
        return this.__listWidthHuge.get();
    }
    set listWidthHuge(newValue) {
        this.__listWidthHuge.set(newValue);
    }
    get listOffsetHuge() {
        return this.__listOffsetHuge.get();
    }
    set listOffsetHuge(newValue) {
        this.__listOffsetHuge.set(newValue);
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
            List.create({ space: '6vp', scroller: this.scrollerForHugeList });
            List.debugLine("features/Home/src/main/ets/components/ListItemHuge.ets(34:5)", "home");
            List.chainAnimation(true);
            List.edgeEffect(EdgeEffect.None);
            List.listDirection(Axis.Horizontal);
            List.scrollBar(BarState.Off);
            List.width('100%');
            List.height('360vp');
            List.onTouch((event) => {
                if (event.type === TouchType.Down) {
                    this.listOffsetHuge = this.scrollerForHugeList.currentOffset().xOffset;
                    console.info(`this.currentOffset ${this.listOffsetHuge}`);
                }
                if (event.type === TouchType.Up || event.type === TouchType.Cancel) {
                    let curOffset = this.scrollerForHugeList.currentOffset().xOffset - this.listOffsetHuge;
                    let targetOffsetHuge = this.listOffsetHuge;
                    //不超过一个列表项宽度处理
                    if (Math.abs(curOffset) < this.listWidthHuge / 3) {
                        targetOffsetHuge = this.listOffsetHuge;
                    }
                    else if (curOffset > 0) {
                        targetOffsetHuge = this.listOffsetHuge + this.listWidthHuge + this.myOffset;
                    }
                    else if (curOffset < 0) {
                        targetOffsetHuge = this.listOffsetHuge - this.listWidthHuge - this.myOffset;
                    }
                    console.info(`targetOffset ${targetOffsetHuge} listOffset ${curOffset} `);
                    this.scrollerForHugeList.scrollTo({
                        xOffset: targetOffsetHuge,
                        yOffset: 0,
                        animation: true
                    });
                }
            });
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
                ListItem.debugLine("features/Home/src/main/ets/components/ListItemHuge.ets(35:7)", "home");
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
                        ListItem.debugLine("features/Home/src/main/ets/components/ListItemHuge.ets(40:9)", "home");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/Home/src/main/ets/components/ListItemHuge.ets(41:11)", "home");
                            Column.height('100%');
                            Column.width('65%');
                            Column.alignItems(HorizontalAlign.Center);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": -1, "type": -1, params: [item.pic], "bundleName": "com.example.wangningmei", "moduleName": "Home" });
                            Image.debugLine("features/Home/src/main/ets/components/ListItemHuge.ets(42:13)", "home");
                            Image.width('100%');
                            Image.objectFit(ImageFit.Contain);
                            Image.border({ width: 1, color: Color.Gray });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create({ space: '5vp' });
                            Column.debugLine("features/Home/src/main/ets/components/ListItemHuge.ets(47:13)", "home");
                            Column.width('100%');
                            Column.padding({
                                top: '16vp',
                                bottom: '16vp',
                                left: '16vp',
                                right: '16vp'
                            });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.name);
                            Text.debugLine("features/Home/src/main/ets/components/ListItemHuge.ets(48:15)", "home");
                            Text.fontSize('18vp');
                            Text.fontColor(Color.White);
                            Text.textAlign(TextAlign.Center);
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            // .maxLines(1)
                            Text.create(item.artist);
                            Text.debugLine("features/Home/src/main/ets/components/ListItemHuge.ets(54:15)", "home");
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
                ListItem.debugLine("features/Home/src/main/ets/components/ListItemHuge.ets(87:7)", "home");
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
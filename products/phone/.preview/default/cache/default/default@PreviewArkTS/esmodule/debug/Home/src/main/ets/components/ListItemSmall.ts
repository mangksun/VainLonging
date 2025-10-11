if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface ListItemSmall_Params {
    listData?: ListData[];
    scrollerForList?: Scroller;
    centerIndex?: number;
    myOffset?: number;
    listWidth?: number;
    listOffset?: number;
}
import type { ListData } from '../viewmodel/ListData';
import { ListDataViewModel } from "@normalized:N&&&home/src/main/ets/viewmodel/ListDataViewModel&1.0.0";
export class ListItemSmall extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__listData = new ObservedPropertyObjectPU(new ListDataViewModel().getHisMoreList(), this, "listData");
        this.scrollerForList = new Scroller();
        this.__centerIndex = new ObservedPropertySimplePU(0, this, "centerIndex");
        this.__myOffset = new ObservedPropertySimplePU(6, this, "myOffset");
        this.__listWidth = new ObservedPropertySimplePU(179, this, "listWidth");
        this.__listOffset = new ObservedPropertySimplePU(0
        // onScrollStop(){
        //   let rect = this.scrollerForList.getItemRect(this.currentIndex);
        //   if (this.velocity > 10) {
        //     this.scrollerForList.scrollToIndex(this.currentIndex, true, ScrollAlign.START);
        //   } else if (this.velocity < -10) {
        //     this.scrollerForList.scrollToIndex(this.currentIndex + 1, true, ScrollAlign.START);
        //   }
        // }
        , this, "listOffset");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: ListItemSmall_Params) {
        if (params.listData !== undefined) {
            this.listData = params.listData;
        }
        if (params.scrollerForList !== undefined) {
            this.scrollerForList = params.scrollerForList;
        }
        if (params.centerIndex !== undefined) {
            this.centerIndex = params.centerIndex;
        }
        if (params.myOffset !== undefined) {
            this.myOffset = params.myOffset;
        }
        if (params.listWidth !== undefined) {
            this.listWidth = params.listWidth;
        }
        if (params.listOffset !== undefined) {
            this.listOffset = params.listOffset;
        }
    }
    updateStateVars(params: ListItemSmall_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__listData.purgeDependencyOnElmtId(rmElmtId);
        this.__centerIndex.purgeDependencyOnElmtId(rmElmtId);
        this.__myOffset.purgeDependencyOnElmtId(rmElmtId);
        this.__listWidth.purgeDependencyOnElmtId(rmElmtId);
        this.__listOffset.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__listData.aboutToBeDeleted();
        this.__centerIndex.aboutToBeDeleted();
        this.__myOffset.aboutToBeDeleted();
        this.__listWidth.aboutToBeDeleted();
        this.__listOffset.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __listData: ObservedPropertyObjectPU<ListData[]>;
    get listData() {
        return this.__listData.get();
    }
    set listData(newValue: ListData[]) {
        this.__listData.set(newValue);
    }
    private scrollerForList: Scroller;
    private __centerIndex: ObservedPropertySimplePU<number>;
    get centerIndex() {
        return this.__centerIndex.get();
    }
    set centerIndex(newValue: number) {
        this.__centerIndex.set(newValue);
    }
    private __myOffset: ObservedPropertySimplePU<number>;
    get myOffset() {
        return this.__myOffset.get();
    }
    set myOffset(newValue: number) {
        this.__myOffset.set(newValue);
    }
    private __listWidth: ObservedPropertySimplePU<number>;
    get listWidth() {
        return this.__listWidth.get();
    }
    set listWidth(newValue: number) {
        this.__listWidth.set(newValue);
    }
    private __listOffset: ObservedPropertySimplePU<number>;
    get listOffset() {
        return this.__listOffset.get();
    }
    set listOffset(newValue: number) {
        this.__listOffset.set(newValue);
    }
    // onScrollStop(){
    //   let rect = this.scrollerForList.getItemRect(this.currentIndex);
    //   if (this.velocity > 10) {
    //     this.scrollerForList.scrollToIndex(this.currentIndex, true, ScrollAlign.START);
    //   } else if (this.velocity < -10) {
    //     this.scrollerForList.scrollToIndex(this.currentIndex + 1, true, ScrollAlign.START);
    //   }
    // }
    aboutToAppear(): void {
        this.listData.shift();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            List.create({ space: '6vp', scroller: this.scrollerForList });
            List.debugLine("features/Home/src/main/ets/components/ListItemSmall.ets(31:7)", "home");
            List.chainAnimation(true);
            List.edgeEffect(EdgeEffect.None);
            List.listDirection(Axis.Horizontal);
            List.scrollBar(BarState.Off);
            List.width('100%');
            List.height(230);
            List.onTouch((event: TouchEvent) => {
                if (event.type === TouchType.Down) {
                    this.listOffset = this.scrollerForList.currentOffset().xOffset;
                    console.info(`this.currentOffset ${this.listOffset}`);
                }
                if (event.type === TouchType.Up || event.type === TouchType.Cancel) {
                    let curOffset: number = this.scrollerForList.currentOffset().xOffset - this.listOffset;
                    let listNum: number = Math.floor(curOffset / this.listWidth);
                    let targetOffset = this.listOffset;
                    if (listNum > 0) {
                        //向正方向滑动超过一个列表项宽度处理
                        if (Math.abs(curOffset - this.listWidth) < this.listWidth / 3) {
                            targetOffset = this.listOffset + this.listWidth + this.myOffset;
                        }
                        else {
                            targetOffset = this.listOffset + (this.listWidth + this.myOffset) * 2;
                        }
                    }
                    else if (listNum <= -1) {
                        //向负方向滑动超过一个列表项宽度处理
                        if (Math.abs(curOffset + this.listWidth) < this.listWidth / 3) {
                            targetOffset = this.listOffset - this.listWidth - this.myOffset;
                        }
                        else {
                            targetOffset = this.listOffset - (this.listWidth + this.myOffset) * 2;
                        }
                    }
                    else 
                    //不超过一个列表项宽度处理
                    if (Math.abs(curOffset) < this.listWidth / 3) {
                        targetOffset = this.listOffset;
                    }
                    else if (curOffset > 0) {
                        targetOffset = this.listOffset + this.listWidth + this.myOffset;
                    }
                    else if (curOffset < 0) {
                        targetOffset = this.listOffset - this.listWidth - this.myOffset;
                    }
                    console.info(`targetOffset ${targetOffset} listOffset ${curOffset} `);
                    this.scrollerForList.scrollTo({
                        xOffset: targetOffset,
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
                ListItem.width('6vp');
                ListItem.height('100%');
                ListItem.debugLine("features/Home/src/main/ets/components/ListItemSmall.ets(32:9)", "home");
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
                        ListItem.width('179vp');
                        ListItem.debugLine("features/Home/src/main/ets/components/ListItemSmall.ets(37:11)", "home");
                    };
                    const deepRenderFunction = (elmtId, isInitialRender) => {
                        itemCreation(elmtId, isInitialRender);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Column.create();
                            Column.debugLine("features/Home/src/main/ets/components/ListItemSmall.ets(38:13)", "home");
                            Column.clip(true);
                            Column.height('100%');
                            Column.width('100%');
                            Column.alignItems(HorizontalAlign.Start);
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Image.create({ "id": -1, "type": -1, params: [item.pic], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
                            Image.debugLine("features/Home/src/main/ets/components/ListItemSmall.ets(39:15)", "home");
                            Image.width('100%');
                            Image.objectFit(ImageFit.Cover);
                            Image.borderRadius(12);
                            Image.border({ width: 1, color: Color.Gray });
                        }, Image);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            // .margin({ left: '12vp' })
                            Column.create();
                            Column.debugLine("features/Home/src/main/ets/components/ListItemSmall.ets(46:15)", "home");
                            // .margin({ left: '12vp' })
                            Column.width('100%');
                            // .margin({ left: '12vp' })
                            Column.height(31);
                            // .margin({ left: '12vp' })
                            Column.alignItems(HorizontalAlign.Start);
                            // .margin({ left: '12vp' })
                            Column.margin({ top: '8vp' });
                        }, Column);
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            Text.create(item.name);
                            Text.debugLine("features/Home/src/main/ets/components/ListItemSmall.ets(47:17)", "home");
                            Text.fontSize('18vp');
                            Text.fontColor(Color.Black);
                            Text.width('100%');
                            Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                            Text.maxLines(1);
                        }, Text);
                        Text.pop();
                        this.observeComponentCreation2((elmtId, isInitialRender) => {
                            // .textAlign(TextAlign.Start)
                            Text.create(item.artist);
                            Text.debugLine("features/Home/src/main/ets/components/ListItemSmall.ets(54:17)", "home");
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
            this.forEachUpdateFunction(elmtId, this.listData, forEachItemGenFunction, (item: ListData) => JSON.stringify(item), false, false);
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
                ListItem.debugLine("features/Home/src/main/ets/components/ListItemSmall.ets(77:9)", "home");
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

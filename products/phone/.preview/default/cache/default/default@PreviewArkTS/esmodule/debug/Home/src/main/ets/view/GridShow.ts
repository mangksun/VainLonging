if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface GridShow_Params {
    pathInfos?: NavPathStack;
    listData?: ListData[];
    templistData?: ListData[];
    title?: string;
    name?: string;
}
import type { ListData } from '../viewmodel/ListData';
import { ListDataViewModel } from "@normalized:N&&&home/src/main/ets/viewmodel/ListDataViewModel&1.0.0";
//PageOne.ets
export function GridShowBuilder(name: string, listData: ListData[], parent = null) {
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
            if (isInitialRender) {
                let componentCall = new GridShow(parent ? parent : this, { name, listData }, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/view/GridShow.ets", line: 6, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        name,
                        listData
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "GridShow" });
    }
}
export class GridShow extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.pathInfos = new NavPathStack();
        this.__listData = new ObservedPropertyObjectPU([], this, "listData");
        this.__templistData = new ObservedPropertyObjectPU(new ListDataViewModel().getRecentlyPlayedList(), this, "templistData");
        this.__title = new ObservedPropertySimplePU('', this, "title");
        this.name = '';
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: GridShow_Params) {
        if (params.pathInfos !== undefined) {
            this.pathInfos = params.pathInfos;
        }
        if (params.listData !== undefined) {
            this.listData = params.listData;
        }
        if (params.templistData !== undefined) {
            this.templistData = params.templistData;
        }
        if (params.title !== undefined) {
            this.title = params.title;
        }
        if (params.name !== undefined) {
            this.name = params.name;
        }
    }
    updateStateVars(params: GridShow_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__listData.purgeDependencyOnElmtId(rmElmtId);
        this.__templistData.purgeDependencyOnElmtId(rmElmtId);
        this.__title.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__listData.aboutToBeDeleted();
        this.__templistData.aboutToBeDeleted();
        this.__title.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private pathInfos: NavPathStack;
    private __listData: ObservedPropertyObjectPU<ListData[]>;
    get listData() {
        return this.__listData.get();
    }
    set listData(newValue: ListData[]) {
        this.__listData.set(newValue);
    }
    private __templistData: ObservedPropertyObjectPU<ListData[]>;
    get templistData() {
        return this.__templistData.get();
    }
    set templistData(newValue: ListData[]) {
        this.__templistData.set(newValue);
    }
    private __title: ObservedPropertySimplePU<string>;
    get title() {
        return this.__title.get();
    }
    set title(newValue: string) {
        this.__title.set(newValue);
    }
    private name: string;
    GridShowTitle(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: '24vp' });
            Row.debugLine("features/Home/src/main/ets/view/GridShow.ets(20:5)", "home");
            Row.alignItems(VerticalAlign.Bottom);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125832663, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
            SymbolGlyph.debugLine("features/Home/src/main/ets/view/GridShow.ets(21:7)", "home");
            SymbolGlyph.fontSize(35);
            SymbolGlyph.margin({ left: '12vp' });
            SymbolGlyph.onClick(() => {
                this.pathInfos.pop();
            });
        }, SymbolGlyph);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(this.title);
            Text.debugLine("features/Home/src/main/ets/view/GridShow.ets(28:7)", "home");
            Text.fontSize('24vp');
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        Row.pop();
    }
    aboutToAppear(): void {
        if (this.listData[0].name == '0') {
            this.title = '最近播放';
            this.listData.shift();
        }
        else if (this.listData[0].name == '1') {
            this.title = '最近热门';
            this.listData.shift();
        }
        else if (this.listData[0].name == '2') {
            this.title = '最近发行';
            this.listData.shift();
        }
        else {
            this.title = '为您推荐';
            this.listData.shift();
        }
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/Home/src/main/ets/view/GridShow.ets(55:7)", "home");
                    Column.size({ width: '100%', height: '100%' });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Divider.create();
                    Divider.debugLine("features/Home/src/main/ets/view/GridShow.ets(57:9)", "home");
                    Divider.color(Color.Gray);
                    Divider.margin({ left: 16, right: 16 });
                }, Divider);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Grid.create();
                    Grid.debugLine("features/Home/src/main/ets/view/GridShow.ets(60:9)", "home");
                    Grid.padding({ left: '12vp', right: '12vp' });
                    Grid.columnsGap('12vp');
                    Grid.rowsGap('20vp');
                    Grid.columnsTemplate('1fr 1fr');
                    Grid.layoutDirection(GridDirection.Row);
                    Grid.scrollBar(BarState.Off);
                }, Grid);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = _item => {
                        const item = _item;
                        {
                            const itemCreation2 = (elmtId, isInitialRender) => {
                                GridItem.create(() => { }, false);
                                GridItem.debugLine("features/Home/src/main/ets/view/GridShow.ets(63:13)", "home");
                            };
                            const observedDeepRender = () => {
                                this.observeComponentCreation2(itemCreation2, GridItem);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Column.create();
                                    Column.debugLine("features/Home/src/main/ets/view/GridShow.ets(64:15)", "home");
                                    Column.clip(true);
                                    Column.width('100%');
                                    Column.alignItems(HorizontalAlign.Start);
                                }, Column);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Image.create({ "id": -1, "type": -1, params: [item.pic], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
                                    Image.debugLine("features/Home/src/main/ets/view/GridShow.ets(65:17)", "home");
                                    Image.width('100%');
                                    Image.objectFit(ImageFit.Contain);
                                    Image.borderRadius('12vp');
                                    Image.border({ width: 1, color: Color.Gray });
                                }, Image);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    // .margin({ left: '12vp' })
                                    Column.create();
                                    Column.debugLine("features/Home/src/main/ets/view/GridShow.ets(72:17)", "home");
                                    // .margin({ left: '12vp' })
                                    Column.alignItems(HorizontalAlign.Start);
                                    // .margin({ left: '12vp' })
                                    Column.margin({ top: '8vp' });
                                }, Column);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(item.name);
                                    Text.debugLine("features/Home/src/main/ets/view/GridShow.ets(73:19)", "home");
                                    Text.fontSize('18vp');
                                    Text.fontColor(Color.Black);
                                    Text.textOverflow({ overflow: TextOverflow.Ellipsis });
                                    Text.maxLines(1);
                                }, Text);
                                Text.pop();
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    // .textAlign(TextAlign.Start)
                                    Text.create(item.artist);
                                    Text.debugLine("features/Home/src/main/ets/view/GridShow.ets(79:19)", "home");
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
                                GridItem.pop();
                            };
                            observedDeepRender();
                        }
                    };
                    this.forEachUpdateFunction(elmtId, this.listData, forEachItemGenFunction, (item: ListData) => JSON.stringify(item), false, false);
                }, ForEach);
                ForEach.pop();
                Grid.pop();
                Column.pop();
            }, { moduleName: "phone", pagePath: "features/Home/src/main/ets/view/GridShow" });
            NavDestination.title({ builder: this.GridShowTitle.bind(this) });
            NavDestination.hideBackButton(true);
            NavDestination.hideTitleBar(false);
            NavDestination.onReady((ctx: NavDestinationContext) => {
                // NavDestinationContext获取当前所在的导航控制器
                this.pathInfos = ctx.pathStack;
            });
            NavDestination.debugLine("features/Home/src/main/ets/view/GridShow.ets(54:5)", "home");
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
(function () {
    if (typeof NavigationBuilderRegister === "function") {
        NavigationBuilderRegister("GridShow", wrapBuilder(GridShowBuilder));
    }
})();

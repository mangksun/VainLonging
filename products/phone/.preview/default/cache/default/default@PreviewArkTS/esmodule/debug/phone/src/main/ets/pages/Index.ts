if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Index_Params {
    pathStack?: NavPathStack;
    scrollerForScroll?: Scroller;
    arr?: number[];
    tabsController?: TabsController;
    currentIndex?: number;
}
import { HomePage } from "@normalized:N&&&home/Index&1.0.0";
import { Player } from "@normalized:N&&&musicplayer/Index&1.0.0";
class Index extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.pathStack = new NavPathStack();
        this.scrollerForScroll = new Scroller();
        this.arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        this.tabsController = new TabsController();
        this.__currentIndex = new ObservedPropertySimplePU(0, this, "currentIndex");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: Index_Params) {
        if (params.pathStack !== undefined) {
            this.pathStack = params.pathStack;
        }
        if (params.scrollerForScroll !== undefined) {
            this.scrollerForScroll = params.scrollerForScroll;
        }
        if (params.arr !== undefined) {
            this.arr = params.arr;
        }
        if (params.tabsController !== undefined) {
            this.tabsController = params.tabsController;
        }
        if (params.currentIndex !== undefined) {
            this.currentIndex = params.currentIndex;
        }
    }
    updateStateVars(params: Index_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__currentIndex.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__currentIndex.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private pathStack: NavPathStack;
    private scrollerForScroll: Scroller;
    private arr: number[];
    private tabsController: TabsController;
    private __currentIndex: ObservedPropertySimplePU<number>;
    get currentIndex() {
        return this.__currentIndex.get();
    }
    set currentIndex(newValue: number) {
        this.__currentIndex.set(newValue);
    }
    tabBuilder(title: ResourceStr, targetIndex: number, selectedImg: Resource, normalImg: Resource, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/phone/src/main/ets/pages/Index.ets(14:5)", "phone");
            Column.width('100%');
            Column.height(30);
            Column.justifyContent(FlexAlign.Center);
            Column.onClick(() => {
                this.currentIndex = targetIndex;
                this.tabsController.changeIndex(this.currentIndex);
            });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create(this.currentIndex === targetIndex ? selectedImg : normalImg);
            Image.debugLine("products/phone/src/main/ets/pages/Index.ets(15:7)", "phone");
            Image.size({ width: 25, height: 25 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.debugLine("products/phone/src/main/ets/pages/Index.ets(17:7)", "phone");
            Text.fontColor(this.currentIndex === targetIndex ? '#FF0000' : '#6B6B6B');
            Text.fontSize(12);
        }, Text);
        Text.pop();
        Column.pop();
    }
    // 全局设置一个NavPathStack
    aboutToAppear(): void {
        AppStorage.setOrCreate("PathStack", this.pathStack);
    }
    NavigationMenus(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("products/phone/src/main/ets/pages/Index.ets(37:7)", "phone");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831493, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
            SymbolGlyph.debugLine("products/phone/src/main/ets/pages/Index.ets(38:9)", "phone");
            SymbolGlyph.fontSize(24);
            SymbolGlyph.margin({ top: 14, right: 16 });
        }, SymbolGlyph);
        Row.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("products/phone/src/main/ets/pages/Index.ets(46:7)", "phone");
            Column.width('100%');
            Column.height('100%');
            Column.backgroundColor('#F1F3F5');
            Column.backgroundBlurStyle(BlurStyle.Thin);
            Column.expandSafeArea([SafeAreaType.SYSTEM], [SafeAreaEdge.TOP, SafeAreaEdge.BOTTOM]);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Tabs.create({ barPosition: BarPosition.End, index: this.currentIndex, controller: this.tabsController });
            Tabs.debugLine("products/phone/src/main/ets/pages/Index.ets(47:9)", "phone");
            Tabs.onAnimationStart((index: number, targetIndex: number) => {
                // hilog.info(0x0000, 'index', index.toString());
                this.currentIndex = targetIndex;
            });
        }, Tabs);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Stack.create();
                    Stack.debugLine("products/phone/src/main/ets/pages/Index.ets(49:13)", "phone");
                    Stack.alignContent(Alignment.Bottom);
                    Stack.width('100%');
                    Stack.height('100%');
                }, Stack);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.zIndex(0);
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new HomePage(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/Index.ets", line: 50, col: 15 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "HomePage" });
                }
                __Common__.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    __Common__.create();
                    __Common__.zIndex(1);
                }, __Common__);
                {
                    this.observeComponentCreation2((elmtId, isInitialRender) => {
                        if (isInitialRender) {
                            let componentCall = new Player(this, {}, undefined, elmtId, () => { }, { page: "products/phone/src/main/ets/pages/Index.ets", line: 51, col: 15 });
                            ViewPU.create(componentCall);
                            let paramsLambda = () => {
                                return {};
                            };
                            componentCall.paramsGenerator_ = paramsLambda;
                        }
                        else {
                            this.updateStateVarsOfChildByElmtId(elmtId, {});
                        }
                    }, { name: "Player" });
                }
                __Common__.pop();
                Stack.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilder.call(this, '首页', 0, { "id": 150994951, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" }, { "id": 150994944, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
                } });
            TabContent.debugLine("products/phone/src/main/ets/pages/Index.ets(48:11)", "phone");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('资源库');
                    Text.debugLine("products/phone/src/main/ets/pages/Index.ets(59:13)", "phone");
                    Text.fontSize(30);
                    Text.fontWeight(FontWeight.Bold);
                }, Text);
                Text.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilder.call(this, '资源库', 1, { "id": 150994949, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" }, { "id": 150994947, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
                } });
            TabContent.debugLine("products/phone/src/main/ets/pages/Index.ets(58:11)", "phone");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('搜索');
                    Text.debugLine("products/phone/src/main/ets/pages/Index.ets(65:13)", "phone");
                    Text.fontSize(30);
                    Text.fontWeight(FontWeight.Bold);
                }, Text);
                Text.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilder.call(this, '搜索', 2, { "id": 150994945, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" }, { "id": 150994946, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
                } });
            TabContent.debugLine("products/phone/src/main/ets/pages/Index.ets(64:11)", "phone");
        }, TabContent);
        TabContent.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            TabContent.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create('我的');
                    Text.debugLine("products/phone/src/main/ets/pages/Index.ets(71:13)", "phone");
                    Text.fontSize(30);
                    Text.fontWeight(FontWeight.Bold);
                }, Text);
                Text.pop();
            });
            TabContent.tabBar({ builder: () => {
                    this.tabBuilder.call(this, '我的', 3, { "id": 150994948, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" }, { "id": 150994952, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
                } });
            TabContent.debugLine("products/phone/src/main/ets/pages/Index.ets(70:11)", "phone");
        }, TabContent);
        TabContent.pop();
        Tabs.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName(): string {
        return "Index";
    }
}
registerNamedRoute(() => new Index(undefined, {}), "", { bundleName: "com.example.wangningmei", moduleName: "phone", pagePath: "pages/Index", pageFullPath: "products/phone/src/main/ets/pages/Index", integratedHsp: "false", moduleType: "followWithHap" });

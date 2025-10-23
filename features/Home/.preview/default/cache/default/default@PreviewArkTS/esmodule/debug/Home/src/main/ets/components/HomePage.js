if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { ListItemSmall } from '@normalized:N&&&home/src/main/ets/components/ListItemSmall&1.0.0';
import { ListItemHuge } from '@normalized:N&&&home/src/main/ets/components/ListItemHuge&1.0.0';
export function HomePageBuilder(parent = null) {
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
            if (isInitialRender) {
                let componentCall = new HomePage(parent ? parent : this, {}, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/components/HomePage.ets", line: 8, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {};
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "HomePage" });
    }
}
export class HomePage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.pathStack = new NavPathStack();
        this.__httpGridItems = new ObservedPropertyObjectPU([], this, "httpGridItems");
        this.__pictureUri = new ObservedPropertySimplePU('', this, "pictureUri");
        this.scrollerForScroll = new Scroller();
        this.context = this.getUIContext().getHostContext();
        this.applicationContext = this.context.getApplicationContext();
        this.cacheDir = this.applicationContext.filesDir;
        this.arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
        if (params.pathStack !== undefined) {
            this.pathStack = params.pathStack;
        }
        if (params.httpGridItems !== undefined) {
            this.httpGridItems = params.httpGridItems;
        }
        if (params.pictureUri !== undefined) {
            this.pictureUri = params.pictureUri;
        }
        if (params.scrollerForScroll !== undefined) {
            this.scrollerForScroll = params.scrollerForScroll;
        }
        if (params.context !== undefined) {
            this.context = params.context;
        }
        if (params.applicationContext !== undefined) {
            this.applicationContext = params.applicationContext;
        }
        if (params.cacheDir !== undefined) {
            this.cacheDir = params.cacheDir;
        }
        if (params.arr !== undefined) {
            this.arr = params.arr;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
        this.__httpGridItems.purgeDependencyOnElmtId(rmElmtId);
        this.__pictureUri.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        this.__httpGridItems.aboutToBeDeleted();
        this.__pictureUri.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    get httpGridItems() {
        return this.__httpGridItems.get();
    }
    set httpGridItems(newValue) {
        this.__httpGridItems.set(newValue);
    }
    get pictureUri() {
        return this.__pictureUri.get();
    }
    set pictureUri(newValue) {
        this.__pictureUri.set(newValue);
    }
    async aboutToAppear() {
        //   let httpUtil: HttpUtils = new HttpUtils();
        //   await httpUtil.postHttpRequest().then((value: Array<MusicInfo>) => {
        //     this.httpGridItems = value;
        //   });
        //   await httpUtil.getHttpRequest()
        //   //   .then((value: string) => {
        //   //   this.pictureUri = value;
        //   // })
        //   ;
        //   httpUtil.destroyHttpRequest();
    }
    NavigationMenus(parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/Home/src/main/ets/components/HomePage.ets(40:5)", "home");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831493, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "Home" });
            SymbolGlyph.debugLine("features/Home/src/main/ets/components/HomePage.ets(41:7)", "home");
            SymbolGlyph.fontSize(24);
            SymbolGlyph.fontWeight(FontWeight.Bold);
            SymbolGlyph.margin({ top: 14, right: 16 });
        }, SymbolGlyph);
        Row.pop();
    }
    StandardList(title, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/Home/src/main/ets/components/HomePage.ets(49:5)", "home");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 5 });
            Row.debugLine("features/Home/src/main/ets/components/HomePage.ets(50:7)", "home");
            Row.justifyContent(FlexAlign.Center);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.debugLine("features/Home/src/main/ets/components/HomePage.ets(51:9)", "home");
            Text.fontSize(25);
            Text.fontColor(Color.Black);
            Text.margin({ top: 20, left: 16, bottom: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125832664, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "Home" });
            SymbolGlyph.debugLine("features/Home/src/main/ets/components/HomePage.ets(55:9)", "home");
            SymbolGlyph.fontSize(30);
            SymbolGlyph.margin({ top: 10 });
        }, SymbolGlyph);
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ListItemSmall(this, {}, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/components/HomePage.ets", line: 61, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ListItemSmall" });
        }
        Column.pop();
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Navigation.create(this.pathStack, { moduleName: "Home", pagePath: "features/Home/src/main/ets/components/HomePage", isUserCreateStack: true });
            Navigation.debugLine("features/Home/src/main/ets/components/HomePage.ets(66:5)", "home");
            Navigation.title('主页', {
                backgroundBlurStyle: BlurStyle.Thin,
                barStyle: BarStyle.STACK
            });
            Navigation.menus({ builder: this.NavigationMenus.bind(this) });
            Navigation.mode(NavigationMode.Stack);
            Navigation.titleMode(NavigationTitleMode.Free);
            Navigation.hideTitleBar(false);
        }, Navigation);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Column() {
            Scroll.create(this.scrollerForScroll);
            Scroll.debugLine("features/Home/src/main/ets/components/HomePage.ets(68:9)", "home");
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
            Column.debugLine("features/Home/src/main/ets/components/HomePage.ets(69:11)", "home");
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 设置与标题栏高度一致，以便观察STACK效果
            Blank.create();
            Blank.debugLine("features/Home/src/main/ets/components/HomePage.ets(71:13)", "home");
            // 设置与标题栏高度一致，以便观察STACK效果
            Blank.height(92);
            // 设置与标题栏高度一致，以便观察STACK效果
            Blank.width('100%');
        }, Blank);
        // 设置与标题栏高度一致，以便观察STACK效果
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/Home/src/main/ets/components/HomePage.ets(76:13)", "home");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("features/Home/src/main/ets/components/HomePage.ets(77:15)", "home");
            Divider.color(Color.Gray);
            Divider.margin({ left: 16, right: 16 });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('精选推荐');
            Text.debugLine("features/Home/src/main/ets/components/HomePage.ets(80:15)", "home");
            Text.fontSize(25);
            Text.fontColor(Color.Black);
            Text.margin({ top: 20, left: 16, bottom: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/Home/src/main/ets/components/HomePage.ets(84:15)", "home");
            Blank.height(10);
        }, Blank);
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ListItemHuge(this, {}, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/components/HomePage.ets", line: 86, col: 15 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ListItemHuge" });
        }
        Column.pop();
        this.StandardList.bind(this)('最近播放');
        this.StandardList.bind(this)('最近热门');
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/Home/src/main/ets/components/HomePage.ets(93:13)", "home");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 5 });
            Row.debugLine("features/Home/src/main/ets/components/HomePage.ets(94:15)", "home");
            Row.justifyContent(FlexAlign.End);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "Home" });
            Image.debugLine("features/Home/src/main/ets/components/HomePage.ets(95:17)", "home");
            Image.width(40);
            Image.height(40);
            Image.borderRadius('6vp');
            Image.margin({ top: 20, bottom: 10, left: 15 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/Home/src/main/ets/components/HomePage.ets(100:17)", "home");
            Column.justifyContent(FlexAlign.End);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('有关“”的更多内容');
            Text.debugLine("features/Home/src/main/ets/components/HomePage.ets(101:19)", "home");
            Text.fontSize(12);
            Text.fontColor(Color.Gray);
            Text.margin({ top: 20 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('陶喆');
            Text.debugLine("features/Home/src/main/ets/components/HomePage.ets(105:19)", "home");
            Text.fontSize(24);
            Text.fontColor(Color.Black);
            Text.margin({ bottom: 10 });
        }, Text);
        Text.pop();
        Column.pop();
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ListItemSmall(this, {}, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/components/HomePage.ets", line: 115, col: 15 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {};
                    };
                    componentCall.paramsGenerator_ = paramsLambda;
                }
                else {
                    this.updateStateVarsOfChildByElmtId(elmtId, {});
                }
            }, { name: "ListItemSmall" });
        }
        Column.pop();
        this.StandardList.bind(this)('最新发行');
        this.StandardList.bind(this)('为您推荐');
        Column.pop();
        // Column() {
        Scroll.pop();
        Navigation.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName() {
        return "HomePage";
    }
}
registerNamedRoute(() => new HomePage(undefined, {}), "", { bundleName: "com.example.wangningmei", moduleName: "Home", pagePath: "components/HomePage", pageFullPath: "features/Home/src/main/ets/components/HomePage", integratedHsp: "false", moduleType: "followWithHap" });
(function () {
    if (typeof NavigationBuilderRegister === "function") {
        NavigationBuilderRegister("HomePage", wrapBuilder(HomePageBuilder));
    }
})();
//# sourceMappingURL=HomePage.js.map
if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { ListDataViewModel } from '@normalized:N&&&home/src/main/ets/viewmodel/ListDataViewModel&1.0.0';
import { ListItemSmall } from '@normalized:N&&&home/src/main/ets/components/ListItemSmall&1.0.0';
import { ListItemHuge } from '@normalized:N&&&home/src/main/ets/components/ListItemHuge&1.0.0';
export function HomePageBuilder(parent = null) {
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
            if (isInitialRender) {
                let componentCall = new HomePage(parent ? parent : this, {}, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/view/HomePage.ets", line: 10, col: 3 });
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
        this.__listData = new ObservedPropertyObjectPU(new ListDataViewModel().getListDataList(), this, "listData");
        this.__RecentlyPlayedList = new ObservedPropertyObjectPU(new ListDataViewModel().getRecentlyPlayedList(), this, "RecentlyPlayedList");
        this.__FeatureRecommonedList = new ObservedPropertyObjectPU(new ListDataViewModel().getFeaturedRecommendationsList(), this, "FeatureRecommonedList");
        this.__popularList = new ObservedPropertyObjectPU(new ListDataViewModel().getPopularList(), this, "popularList");
        this.__NewReleasesList = new ObservedPropertyObjectPU(new ListDataViewModel().getNewReleasesList(), this, "NewReleasesList");
        this.__recommonedList = new ObservedPropertyObjectPU(new ListDataViewModel().getRecommendList(), this, "recommonedList");
        this.__HisMoreList = new ObservedPropertyObjectPU(new ListDataViewModel().getHisMoreList(), this, "HisMoreList");
        this.pathStack = new NavPathStack();
        this.scrollerForScroll = new Scroller();
        this.context = this.getUIContext().getHostContext();
        this.applicationContext = this.context.getApplicationContext();
        this.cacheDir = this.applicationContext.filesDir;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params) {
        if (params.listData !== undefined) {
            this.listData = params.listData;
        }
        if (params.RecentlyPlayedList !== undefined) {
            this.RecentlyPlayedList = params.RecentlyPlayedList;
        }
        if (params.FeatureRecommonedList !== undefined) {
            this.FeatureRecommonedList = params.FeatureRecommonedList;
        }
        if (params.popularList !== undefined) {
            this.popularList = params.popularList;
        }
        if (params.NewReleasesList !== undefined) {
            this.NewReleasesList = params.NewReleasesList;
        }
        if (params.recommonedList !== undefined) {
            this.recommonedList = params.recommonedList;
        }
        if (params.HisMoreList !== undefined) {
            this.HisMoreList = params.HisMoreList;
        }
        if (params.pathStack !== undefined) {
            this.pathStack = params.pathStack;
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
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__listData.purgeDependencyOnElmtId(rmElmtId);
        this.__RecentlyPlayedList.purgeDependencyOnElmtId(rmElmtId);
        this.__FeatureRecommonedList.purgeDependencyOnElmtId(rmElmtId);
        this.__popularList.purgeDependencyOnElmtId(rmElmtId);
        this.__NewReleasesList.purgeDependencyOnElmtId(rmElmtId);
        this.__recommonedList.purgeDependencyOnElmtId(rmElmtId);
        this.__HisMoreList.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__listData.aboutToBeDeleted();
        this.__RecentlyPlayedList.aboutToBeDeleted();
        this.__FeatureRecommonedList.aboutToBeDeleted();
        this.__popularList.aboutToBeDeleted();
        this.__NewReleasesList.aboutToBeDeleted();
        this.__recommonedList.aboutToBeDeleted();
        this.__HisMoreList.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get listData() {
        return this.__listData.get();
    }
    set listData(newValue) {
        this.__listData.set(newValue);
    }
    get RecentlyPlayedList() {
        return this.__RecentlyPlayedList.get();
    }
    set RecentlyPlayedList(newValue) {
        this.__RecentlyPlayedList.set(newValue);
    }
    get FeatureRecommonedList() {
        return this.__FeatureRecommonedList.get();
    }
    set FeatureRecommonedList(newValue) {
        this.__FeatureRecommonedList.set(newValue);
    }
    get popularList() {
        return this.__popularList.get();
    }
    set popularList(newValue) {
        this.__popularList.set(newValue);
    }
    get NewReleasesList() {
        return this.__NewReleasesList.get();
    }
    set NewReleasesList(newValue) {
        this.__NewReleasesList.set(newValue);
    }
    get recommonedList() {
        return this.__recommonedList.get();
    }
    set recommonedList(newValue) {
        this.__recommonedList.set(newValue);
    }
    get HisMoreList() {
        return this.__HisMoreList.get();
    }
    set HisMoreList(newValue) {
        this.__HisMoreList.set(newValue);
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
            Row.debugLine("features/Home/src/main/ets/view/HomePage.ets(48:5)", "home");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831493, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "Home" });
            SymbolGlyph.debugLine("features/Home/src/main/ets/view/HomePage.ets(49:7)", "home");
            SymbolGlyph.fontSize(24);
            SymbolGlyph.fontWeight(FontWeight.Bold);
            SymbolGlyph.margin({ top: 14, right: 16 });
        }, SymbolGlyph);
        Row.pop();
    }
    StandardList(title, listData, parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/Home/src/main/ets/view/HomePage.ets(58:5)", "home");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 5 });
            Row.debugLine("features/Home/src/main/ets/view/HomePage.ets(59:7)", "home");
            Row.justifyContent(FlexAlign.Center);
            Row.onClick(() => {
                switch (title) {
                    case '最近播放':
                        this.pathStack.pushPathByName("GridShow", ObservedObject.GetRawObject(this.RecentlyPlayedList));
                        break;
                    case '最新发行':
                        this.pathStack.pushPathByName("GridShow", ObservedObject.GetRawObject(this.NewReleasesList));
                        break;
                    case '为您推荐':
                        this.pathStack.pushPathByName("GridShow", ObservedObject.GetRawObject(this.recommonedList));
                        break;
                    case '最近热门':
                        this.pathStack.pushPathByName("GridShow", ObservedObject.GetRawObject(this.popularList));
                }
            });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create(title);
            Text.debugLine("features/Home/src/main/ets/view/HomePage.ets(60:9)", "home");
            Text.fontSize(25);
            Text.fontColor(Color.Black);
            Text.margin({ top: 20, left: 16, bottom: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125832664, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "Home" });
            SymbolGlyph.debugLine("features/Home/src/main/ets/view/HomePage.ets(64:9)", "home");
            SymbolGlyph.fontSize(30);
            SymbolGlyph.margin({ top: 10 });
        }, SymbolGlyph);
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ListItemSmall(this, { listData }, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/view/HomePage.ets", line: 85, col: 7 });
                    ViewPU.create(componentCall);
                    let paramsLambda = () => {
                        return {
                            listData
                        };
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
            Navigation.create(this.pathStack, { moduleName: "Home", pagePath: "features/Home/src/main/ets/view/HomePage", isUserCreateStack: true });
            Navigation.debugLine("features/Home/src/main/ets/view/HomePage.ets(91:5)", "home");
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
            Scroll.debugLine("features/Home/src/main/ets/view/HomePage.ets(93:9)", "home");
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
            Column.debugLine("features/Home/src/main/ets/view/HomePage.ets(94:11)", "home");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 设置与标题栏高度一致，以便观察STACK效果
            Blank.create();
            Blank.debugLine("features/Home/src/main/ets/view/HomePage.ets(96:13)", "home");
            // 设置与标题栏高度一致，以便观察STACK效果
            Blank.height(92);
            // 设置与标题栏高度一致，以便观察STACK效果
            Blank.width('100%');
        }, Blank);
        // 设置与标题栏高度一致，以便观察STACK效果
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/Home/src/main/ets/view/HomePage.ets(100:13)", "home");
            Blank.height(10);
            Blank.width('388vp');
            Blank.backgroundColor(Color.Red);
        }, Blank);
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/Home/src/main/ets/view/HomePage.ets(104:13)", "home");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("features/Home/src/main/ets/view/HomePage.ets(105:15)", "home");
            Divider.color(Color.Gray);
            Divider.margin({ left: 16, right: 16 });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('精选推荐');
            Text.debugLine("features/Home/src/main/ets/view/HomePage.ets(108:15)", "home");
            Text.fontSize(25);
            Text.fontColor(Color.Black);
            Text.margin({ top: 20, left: 16, bottom: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/Home/src/main/ets/view/HomePage.ets(112:15)", "home");
            Blank.height(10);
        }, Blank);
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ListItemHuge(this, {}, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/view/HomePage.ets", line: 114, col: 15 });
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
        this.StandardList.bind(this)('最近播放', ObservedObject.GetRawObject(this.RecentlyPlayedList));
        this.StandardList.bind(this)('最近热门', ObservedObject.GetRawObject(this.popularList));
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/Home/src/main/ets/view/HomePage.ets(121:13)", "home");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 5 });
            Row.debugLine("features/Home/src/main/ets/view/HomePage.ets(122:15)", "home");
            Row.justifyContent(FlexAlign.End);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 16777229, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "Home" });
            Image.debugLine("features/Home/src/main/ets/view/HomePage.ets(123:17)", "home");
            Image.width(40);
            Image.height(40);
            Image.borderRadius('6vp');
            Image.margin({ top: 20, bottom: 10, left: 15 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/Home/src/main/ets/view/HomePage.ets(128:17)", "home");
            Column.justifyContent(FlexAlign.End);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('您最近经常听他的歌');
            Text.debugLine("features/Home/src/main/ets/view/HomePage.ets(129:19)", "home");
            Text.fontSize(12);
            Text.fontColor(Color.Gray);
            Text.margin({ top: 20 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('陶喆');
            Text.debugLine("features/Home/src/main/ets/view/HomePage.ets(133:19)", "home");
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
                    let componentCall = new ListItemSmall(this, {}, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/view/HomePage.ets", line: 143, col: 15 });
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
        this.StandardList.bind(this)('最新发行', ObservedObject.GetRawObject(this.NewReleasesList));
        this.StandardList.bind(this)('为您推荐', ObservedObject.GetRawObject(this.recommonedList));
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
registerNamedRoute(() => new HomePage(undefined, {}), "", { bundleName: "com.example.wangningmei", moduleName: "Home", pagePath: "view/HomePage", pageFullPath: "features/Home/src/main/ets/view/HomePage", integratedHsp: "false", moduleType: "followWithHap" });
(function () {
    if (typeof NavigationBuilderRegister === "function") {
        NavigationBuilderRegister("HomePage", wrapBuilder(HomePageBuilder));
    }
})();
//# sourceMappingURL=HomePage.js.map
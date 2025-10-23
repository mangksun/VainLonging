if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface HomePage_Params {
    listData?: ListData[];
    RecentlyPlayedList?: ListData[];
    FeatureRecommonedList?: ListData[];
    popularList?: ListData[];
    NewReleasesList?: ListData[];
    recommonedList?: ListData[];
    HisMoreList?: ListData[];
    pathStack?: NavPathStack;
    scrollerForScroll?: Scroller;
    context?;
    applicationContext?;
    cacheDir?;
}
import type common from "@ohos:app.ability.common";
import { HttpUtils } from "@normalized:N&&&utils/Index&1.0.0";
import type { SongItem } from "@normalized:N&&&utils/Index&1.0.0";
import type { ListData } from '../viewmodel/ListData';
import { ListDataViewModel } from "@normalized:N&&&home/src/main/ets/viewmodel/ListDataViewModel&1.0.0";
import { ListItemSmall } from "@normalized:N&&&home/src/main/ets/components/ListItemSmall&1.0.0";
import { ListItemHuge } from "@normalized:N&&&home/src/main/ets/components/ListItemHuge&1.0.0";
import { songList } from "@normalized:N&&&home/src/main/ets/viewmodel/songList&1.0.0";
export function HomePageBuilder(parent = null) {
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
            if (isInitialRender) {
                let componentCall = new HomePage(parent ? parent : this, {}, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/view/HomePage.ets", line: 12, col: 3 });
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
        this.__pathStack = new ObservedPropertyObjectPU(new NavPathStack(), this, "pathStack");
        this.addProvidedVar("navStack", this.__pathStack, false);
        this.addProvidedVar("pathStack", this.__pathStack, false);
        this.scrollerForScroll = new Scroller();
        this.context = this.getUIContext().getHostContext() as common.UIAbilityContext;
        this.applicationContext = this.context.getApplicationContext();
        this.cacheDir = this.applicationContext.filesDir;
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params: HomePage_Params) {
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
    updateStateVars(params: HomePage_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__listData.purgeDependencyOnElmtId(rmElmtId);
        this.__RecentlyPlayedList.purgeDependencyOnElmtId(rmElmtId);
        this.__FeatureRecommonedList.purgeDependencyOnElmtId(rmElmtId);
        this.__popularList.purgeDependencyOnElmtId(rmElmtId);
        this.__NewReleasesList.purgeDependencyOnElmtId(rmElmtId);
        this.__recommonedList.purgeDependencyOnElmtId(rmElmtId);
        this.__HisMoreList.purgeDependencyOnElmtId(rmElmtId);
        this.__pathStack.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__listData.aboutToBeDeleted();
        this.__RecentlyPlayedList.aboutToBeDeleted();
        this.__FeatureRecommonedList.aboutToBeDeleted();
        this.__popularList.aboutToBeDeleted();
        this.__NewReleasesList.aboutToBeDeleted();
        this.__recommonedList.aboutToBeDeleted();
        this.__HisMoreList.aboutToBeDeleted();
        this.__pathStack.aboutToBeDeleted();
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
    private __RecentlyPlayedList: ObservedPropertyObjectPU<ListData[]>;
    get RecentlyPlayedList() {
        return this.__RecentlyPlayedList.get();
    }
    set RecentlyPlayedList(newValue: ListData[]) {
        this.__RecentlyPlayedList.set(newValue);
    }
    private __FeatureRecommonedList: ObservedPropertyObjectPU<ListData[]>;
    get FeatureRecommonedList() {
        return this.__FeatureRecommonedList.get();
    }
    set FeatureRecommonedList(newValue: ListData[]) {
        this.__FeatureRecommonedList.set(newValue);
    }
    private __popularList: ObservedPropertyObjectPU<ListData[]>;
    get popularList() {
        return this.__popularList.get();
    }
    set popularList(newValue: ListData[]) {
        this.__popularList.set(newValue);
    }
    private __NewReleasesList: ObservedPropertyObjectPU<ListData[]>;
    get NewReleasesList() {
        return this.__NewReleasesList.get();
    }
    set NewReleasesList(newValue: ListData[]) {
        this.__NewReleasesList.set(newValue);
    }
    private __recommonedList: ObservedPropertyObjectPU<ListData[]>;
    get recommonedList() {
        return this.__recommonedList.get();
    }
    set recommonedList(newValue: ListData[]) {
        this.__recommonedList.set(newValue);
    }
    private __HisMoreList: ObservedPropertyObjectPU<ListData[]>;
    get HisMoreList() {
        return this.__HisMoreList.get();
    }
    set HisMoreList(newValue: ListData[]) {
        this.__HisMoreList.set(newValue);
    }
    private __pathStack: ObservedPropertyObjectPU<NavPathStack>;
    get pathStack() {
        return this.__pathStack.get();
    }
    set pathStack(newValue: NavPathStack) {
        this.__pathStack.set(newValue);
    }
    private scrollerForScroll: Scroller;
    private context;
    private applicationContext;
    private cacheDir;
    async aboutToAppear(): Promise<void> {
        AppStorage.setOrCreate('songList', songList);
        // MediaService.getInstance();
        //let responseSongList: Array<SongItem> | undefined;
        let httpUtil: HttpUtils = new HttpUtils();
        let targetUrl: string = 'https://music-api.gdstudio.xyz/api.php?types=search&source=kuwo&count=10&name=晴天';
        await httpUtil.RedirectSearchRequest(targetUrl).then((value: Array<SongItem> | undefined) => {
            if (value) {
                console.log('httpSearchRequest ' + JSON.stringify(value[0].artist));
            }
        });
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
            Row.debugLine("features/Home/src/main/ets/view/HomePage.ets(57:5)", "home");
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831493, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
            SymbolGlyph.debugLine("features/Home/src/main/ets/view/HomePage.ets(58:7)", "home");
            SymbolGlyph.fontSize(24);
            SymbolGlyph.fontWeight(FontWeight.Bold);
            SymbolGlyph.margin({ top: 14, right: 16 });
        }, SymbolGlyph);
        Row.pop();
    }
    StandardList(title: string, listData: ListData[], parent = null) {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/Home/src/main/ets/view/HomePage.ets(67:5)", "home");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 5 });
            Row.debugLine("features/Home/src/main/ets/view/HomePage.ets(68:7)", "home");
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
            Text.debugLine("features/Home/src/main/ets/view/HomePage.ets(69:9)", "home");
            Text.fontSize(25);
            Text.fontColor(Color.Black);
            Text.margin({ top: 20, left: 16, bottom: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125832664, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
            SymbolGlyph.debugLine("features/Home/src/main/ets/view/HomePage.ets(73:9)", "home");
            SymbolGlyph.fontSize(30);
            SymbolGlyph.margin({ top: 10 });
        }, SymbolGlyph);
        Row.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ListItemSmall(this, { listData }, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/view/HomePage.ets", line: 94, col: 7 });
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
            Navigation.create(this.pathStack, { moduleName: "phone", pagePath: "features/Home/src/main/ets/view/HomePage", isUserCreateStack: true });
            Navigation.debugLine("features/Home/src/main/ets/view/HomePage.ets(100:5)", "home");
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
            Scroll.debugLine("features/Home/src/main/ets/view/HomePage.ets(102:9)", "home");
        }, Scroll);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 20 });
            Column.debugLine("features/Home/src/main/ets/view/HomePage.ets(103:11)", "home");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // 设置与标题栏高度一致，以便观察STACK效果
            Blank.create();
            Blank.debugLine("features/Home/src/main/ets/view/HomePage.ets(105:13)", "home");
            // 设置与标题栏高度一致，以便观察STACK效果
            Blank.height(92);
            // 设置与标题栏高度一致，以便观察STACK效果
            Blank.width('100%');
        }, Blank);
        // 设置与标题栏高度一致，以便观察STACK效果
        Blank.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Blank()
            //   .height(10)
            //   .width('388vp')
            //   .backgroundColor(Color.Red)
            Column.create();
            Column.debugLine("features/Home/src/main/ets/view/HomePage.ets(113:13)", "home");
            // Blank()
            //   .height(10)
            //   .width('388vp')
            //   .backgroundColor(Color.Red)
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Divider.create();
            Divider.debugLine("features/Home/src/main/ets/view/HomePage.ets(114:15)", "home");
            Divider.color(Color.Gray);
            Divider.margin({ left: 16, right: 16 });
        }, Divider);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('精选推荐');
            Text.debugLine("features/Home/src/main/ets/view/HomePage.ets(117:15)", "home");
            Text.fontSize(25);
            Text.fontColor(Color.Black);
            Text.margin({ top: 20, left: 16, bottom: 10 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Blank.create();
            Blank.debugLine("features/Home/src/main/ets/view/HomePage.ets(121:15)", "home");
            Blank.height(10);
        }, Blank);
        Blank.pop();
        {
            this.observeComponentCreation2((elmtId, isInitialRender) => {
                if (isInitialRender) {
                    let componentCall = new ListItemHuge(this, {}, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/view/HomePage.ets", line: 123, col: 15 });
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
        // Blank()
        //   .height(10)
        //   .width('388vp')
        //   .backgroundColor(Color.Red)
        Column.pop();
        this.StandardList.bind(this)('最近播放', ObservedObject.GetRawObject(this.RecentlyPlayedList));
        this.StandardList.bind(this)('最近热门', ObservedObject.GetRawObject(this.popularList));
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/Home/src/main/ets/view/HomePage.ets(130:13)", "home");
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 5 });
            Row.debugLine("features/Home/src/main/ets/view/HomePage.ets(131:15)", "home");
            Row.justifyContent(FlexAlign.End);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create('https://img2.kuwo.cn/star/albumcover/500/s4s75/99/2508427700.jpg');
            Image.debugLine("features/Home/src/main/ets/view/HomePage.ets(132:17)", "home");
            Image.width(40);
            Image.height(40);
            Image.borderRadius('6vp');
            Image.margin({ top: 20, bottom: 10, left: 15 });
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/Home/src/main/ets/view/HomePage.ets(137:17)", "home");
            Column.justifyContent(FlexAlign.End);
            Column.alignItems(HorizontalAlign.Start);
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('您最近经常听他的歌');
            Text.debugLine("features/Home/src/main/ets/view/HomePage.ets(138:19)", "home");
            Text.fontSize(12);
            Text.fontColor(Color.Gray);
            Text.margin({ top: 20 });
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('陶喆');
            Text.debugLine("features/Home/src/main/ets/view/HomePage.ets(142:19)", "home");
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
                    let componentCall = new ListItemSmall(this, {}, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/view/HomePage.ets", line: 152, col: 15 });
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
}
(function () {
    if (typeof NavigationBuilderRegister === "function") {
        NavigationBuilderRegister("HomePage", wrapBuilder(HomePageBuilder));
    }
})();

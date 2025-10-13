if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
import { HttpUtils, MediaService } from '@normalized:N&&&utils/Index&1.0.0';
export function AlbumInfoPageBuilder(name, album, parent = null) {
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender) => {
            if (isInitialRender) {
                let componentCall = new AlbumInfoPage(parent ? parent : this, { name, album }, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/view/AlbumInfoPage.ets", line: 7, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        name,
                        album
                    };
                };
                componentCall.paramsGenerator_ = paramsLambda;
            }
            else {
                (parent ? parent : this).updateStateVarsOfChildByElmtId(elmtId, {});
            }
        }, { name: "AlbumInfoPage" });
    }
}
export class AlbumInfoPage extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__songList = this.createStorageLink('songList', [], "songList");
        this.__album = new ObservedPropertySimplePU('曹操', this, "album");
        this.__albumSongs = new ObservedPropertyObjectPU([], this, "albumSongs");
        this.__name = new ObservedPropertySimplePU(''
        //专辑封面url
        , this, "name");
        this.__albumCover = new ObservedPropertySimplePU('', this, "albumCover");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params) {
        if (params.album !== undefined) {
            this.album = params.album;
        }
        if (params.albumSongs !== undefined) {
            this.albumSongs = params.albumSongs;
        }
        if (params.name !== undefined) {
            this.name = params.name;
        }
        if (params.albumCover !== undefined) {
            this.albumCover = params.albumCover;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__songList.purgeDependencyOnElmtId(rmElmtId);
        this.__album.purgeDependencyOnElmtId(rmElmtId);
        this.__albumSongs.purgeDependencyOnElmtId(rmElmtId);
        this.__name.purgeDependencyOnElmtId(rmElmtId);
        this.__albumCover.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__songList.aboutToBeDeleted();
        this.__album.aboutToBeDeleted();
        this.__albumSongs.aboutToBeDeleted();
        this.__name.aboutToBeDeleted();
        this.__albumCover.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get songList() {
        return this.__songList.get();
    }
    set songList(newValue) {
        this.__songList.set(newValue);
    }
    get album() {
        return this.__album.get();
    }
    set album(newValue) {
        this.__album.set(newValue);
    }
    get albumSongs() {
        return this.__albumSongs.get();
    }
    set albumSongs(newValue) {
        this.__albumSongs.set(newValue);
    }
    get name() {
        return this.__name.get();
    }
    set name(newValue) {
        this.__name.set(newValue);
    }
    get albumCover() {
        return this.__albumCover.get();
    }
    set albumCover(newValue) {
        this.__albumCover.set(newValue);
    }
    async aboutToAppear() {
        console.log("跳转专辑页面成功");
        let httpUtil = new HttpUtils();
        let targetUrl = `https://music-api.gdstudio.xyz/api.php?types=search&source=netease_album&count=20&name=${this.album}`;
        await httpUtil.RedirectSearchRequest(targetUrl).then((value) => {
            console.log('AlbumSearchSuccessfully ' + JSON.stringify(value));
            if (value) {
                this.albumSongs = value;
            }
        });
        this.albumCover = await httpUtil.httpPicUrlRequest(this.albumSongs[0].pic_id);
    }
    pushToSongList(item) {
        MediaService.getInstance().loadAssent(item);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/Home/src/main/ets/view/AlbumInfoPage.ets(42:7)", "home");
                    Column.size({ width: '100%', height: '100%' });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Image.create(this.albumCover);
                    Image.debugLine("features/Home/src/main/ets/view/AlbumInfoPage.ets(43:9)", "home");
                    Image.objectFit(ImageFit.Cover);
                    Image.width(100);
                    Image.height(100);
                }, Image);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    List.create();
                    List.debugLine("features/Home/src/main/ets/view/AlbumInfoPage.ets(47:9)", "home");
                }, List);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    ForEach.create();
                    const forEachItemGenFunction = (_item, index) => {
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
                                ListItem.width('100%');
                                ListItem.height('10%');
                                ListItem.onClick(() => {
                                    this.pushToSongList(item);
                                });
                                ListItem.debugLine("features/Home/src/main/ets/view/AlbumInfoPage.ets(49:13)", "home");
                            };
                            const deepRenderFunction = (elmtId, isInitialRender) => {
                                itemCreation(elmtId, isInitialRender);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Column.create();
                                    Column.debugLine("features/Home/src/main/ets/view/AlbumInfoPage.ets(50:15)", "home");
                                }, Column);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Row.create();
                                    Row.debugLine("features/Home/src/main/ets/view/AlbumInfoPage.ets(51:17)", "home");
                                    Row.width('100%');
                                }, Row);
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(`${index + 1}`);
                                    Text.debugLine("features/Home/src/main/ets/view/AlbumInfoPage.ets(52:19)", "home");
                                    Text.fontSize(20);
                                }, Text);
                                Text.pop();
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Text.create(item.name);
                                    Text.debugLine("features/Home/src/main/ets/view/AlbumInfoPage.ets(54:19)", "home");
                                    Text.fontSize(20);
                                }, Text);
                                Text.pop();
                                Row.pop();
                                this.observeComponentCreation2((elmtId, isInitialRender) => {
                                    Divider.create();
                                    Divider.debugLine("features/Home/src/main/ets/view/AlbumInfoPage.ets(58:17)", "home");
                                    Divider.width('80%');
                                    Divider.height(1);
                                }, Divider);
                                Column.pop();
                                ListItem.pop();
                            };
                            this.observeComponentCreation2(itemCreation2, ListItem);
                            ListItem.pop();
                        }
                    };
                    this.forEachUpdateFunction(elmtId, this.albumSongs, forEachItemGenFunction, undefined, true, false);
                }, ForEach);
                ForEach.pop();
                List.pop();
                Column.pop();
            }, { moduleName: "Home", pagePath: "features/Home/src/main/ets/view/AlbumInfoPage" });
            NavDestination.title(``);
            NavDestination.debugLine("features/Home/src/main/ets/view/AlbumInfoPage.ets(41:5)", "home");
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
    static getEntryName() {
        return "AlbumInfoPage";
    }
}
registerNamedRoute(() => new AlbumInfoPage(undefined, {}), "", { bundleName: "com.example.wangningmei", moduleName: "Home", pagePath: "view/AlbumInfoPage", pageFullPath: "features/Home/src/main/ets/view/AlbumInfoPage", integratedHsp: "false", moduleType: "followWithHap" });
(function () {
    if (typeof NavigationBuilderRegister === "function") {
        NavigationBuilderRegister("AlbumInfoPage", wrapBuilder(AlbumInfoPageBuilder));
    }
})();
//# sourceMappingURL=AlbumInfoPage.js.map
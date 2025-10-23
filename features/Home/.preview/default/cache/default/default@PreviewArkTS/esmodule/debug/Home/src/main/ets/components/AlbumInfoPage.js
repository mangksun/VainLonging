if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
//PageOne.ets
export function AlbumInfoPageBuilder(listData, parent = null) {
    const __listData__ = listData;
    {
        (parent ? parent : this).observeComponentCreation2((elmtId, isInitialRender, listData = __listData__) => {
            if (isInitialRender) {
                let componentCall = new AlbumInfoPage(parent ? parent : this, { listData }, undefined, elmtId, () => { }, { page: "features/Home/src/main/ets/components/AlbumInfoPage.ets", line: 6, col: 3 });
                ViewPU.create(componentCall);
                let paramsLambda = () => {
                    return {
                        listData
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
        this.pathInfos = new NavPathStack();
        this.__listData = new ObservedPropertyObjectPU([], this, "listData");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params) {
        if (params.pathInfos !== undefined) {
            this.pathInfos = params.pathInfos;
        }
        if (params.listData !== undefined) {
            this.listData = params.listData;
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
    // name: string = '';
    // @State value: string = '';
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            NavDestination.create(() => {
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Column.create();
                    Column.debugLine("features/Home/src/main/ets/components/AlbumInfoPage.ets(18:7)", "home");
                    Column.size({ width: '100%', height: '100%' });
                }, Column);
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Text.create(`设置页面`);
                    Text.debugLine("features/Home/src/main/ets/components/AlbumInfoPage.ets(19:9)", "home");
                    Text.width('100%');
                    Text.fontSize(20);
                    Text.fontColor(0x333333);
                    Text.textAlign(TextAlign.Center);
                    Text.textShadow({
                        radius: 2,
                        offsetX: 4,
                        offsetY: 4,
                        color: 0x909399
                    });
                    Text.padding({ top: 30 });
                }, Text);
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    // Text(`${JSON.stringify(this.value)}`)
                    Text.create(``);
                    Text.debugLine("features/Home/src/main/ets/components/AlbumInfoPage.ets(32:9)", "home");
                    // Text(`${JSON.stringify(this.value)}`)
                    Text.width('100%');
                    // Text(`${JSON.stringify(this.value)}`)
                    Text.fontSize(18);
                    // Text(`${JSON.stringify(this.value)}`)
                    Text.fontColor(0x666666);
                    // Text(`${JSON.stringify(this.value)}`)
                    Text.textAlign(TextAlign.Center);
                    // Text(`${JSON.stringify(this.value)}`)
                    Text.padding({ top: 45 });
                }, Text);
                // Text(`${JSON.stringify(this.value)}`)
                Text.pop();
                this.observeComponentCreation2((elmtId, isInitialRender) => {
                    Button.createWithLabel('返回');
                    Button.debugLine("features/Home/src/main/ets/components/AlbumInfoPage.ets(38:9)", "home");
                    Button.width('50%');
                    Button.height(40);
                    Button.margin({ top: 50 });
                    Button.onClick(() => {
                        //弹出路由栈栈顶元素，返回上个页面
                        this.pathInfos.pop();
                    });
                }, Button);
                Button.pop();
                Column.pop();
            }, { moduleName: "Home", pagePath: "features/Home/src/main/ets/components/AlbumInfoPage" });
            NavDestination.title(``);
            NavDestination.onReady((ctx) => {
                // NavDestinationContext获取当前所在的导航控制器
                this.pathInfos = ctx.pathStack;
            });
            NavDestination.debugLine("features/Home/src/main/ets/components/AlbumInfoPage.ets(17:5)", "home");
        }, NavDestination);
        NavDestination.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=AlbumInfoPage.js.map
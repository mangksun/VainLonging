if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
export class Player extends ViewPU {
    constructor(parent, params, __localStorage, elmtId = -1, paramsLambda = undefined, extraInfo) {
        super(parent, __localStorage, elmtId, extraInfo);
        if (typeof paramsLambda === "function") {
            this.paramsGenerator_ = paramsLambda;
        }
        this.__message = new ObservedPropertySimplePU('Hello World', this, "message");
        this.setInitiallyProvidedValue(params);
        this.finalizeConstruction();
    }
    setInitiallyProvidedValue(params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    get message() {
        return this.__message.get();
    }
    set message(newValue) {
        this.__message.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create();
            Column.debugLine("features/MusicPlayer/src/main/ets/view/Player.ets(9:5)", "musicplayer");
            Column.alignItems(HorizontalAlign.Center);
            Column.justifyContent(FlexAlign.Center);
            Column.width('100%');
            Column.height('100%');
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create();
            Row.debugLine("features/MusicPlayer/src/main/ets/view/Player.ets(10:7)", "musicplayer");
            Row.height(70);
            Row.width('364vp');
            Row.borderRadius(16);
            Row.backgroundColor(Color.Red);
            Row.alignItems(VerticalAlign.Center);
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 50331650, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "MusicPlayer" });
            Image.debugLine("features/MusicPlayer/src/main/ets/view/Player.ets(11:9)", "musicplayer");
            Image.objectFit(ImageFit.Contain);
            Image.width(56);
            Image.height(56);
            Image.margin({ left: 14 });
            Image.borderRadius(8);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 2 });
            Column.debugLine("features/MusicPlayer/src/main/ets/view/Player.ets(17:9)", "musicplayer");
            Column.height('100%');
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.Start);
            Column.margin({ left: 7 });
            Column.padding({ top: 14 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('高木同学');
            Text.debugLine("features/MusicPlayer/src/main/ets/view/Player.ets(18:11)", "musicplayer");
            Text.fontSize(16);
            Text.fontColor(Color.Black);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('西片太太');
            Text.debugLine("features/MusicPlayer/src/main/ets/view/Player.ets(21:11)", "musicplayer");
            Text.fontSize(16);
            Text.fontColor(Color.Grey);
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 5 });
            Row.debugLine("features/MusicPlayer/src/main/ets/view/Player.ets(32:9)", "musicplayer");
            Row.margin({ left: 110 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831829, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "MusicPlayer" });
            SymbolGlyph.debugLine("features/MusicPlayer/src/main/ets/view/Player.ets(33:11)", "musicplayer");
            SymbolGlyph.fontSize(30);
        }, SymbolGlyph);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831175, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "MusicPlayer" });
            SymbolGlyph.debugLine("features/MusicPlayer/src/main/ets/view/Player.ets(35:11)", "musicplayer");
            SymbolGlyph.fontSize(30);
        }, SymbolGlyph);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // .border({width: 1, radius: 50})
            SymbolGlyph.create({ "id": 125831830, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "MusicPlayer" });
            SymbolGlyph.debugLine("features/MusicPlayer/src/main/ets/view/Player.ets(38:11)", "musicplayer");
            // .border({width: 1, radius: 50})
            SymbolGlyph.fontSize(30);
        }, SymbolGlyph);
        Row.pop();
        Row.pop();
        Column.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}
//# sourceMappingURL=Player.js.map
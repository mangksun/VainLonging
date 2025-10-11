if (!("finalizeConstruction" in ViewPU.prototype)) {
    Reflect.set(ViewPU.prototype, "finalizeConstruction", () => { });
}
interface Player_Params {
    message?: string;
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
    setInitiallyProvidedValue(params: Player_Params) {
        if (params.message !== undefined) {
            this.message = params.message;
        }
    }
    updateStateVars(params: Player_Params) {
    }
    purgeVariableDependenciesOnElmtId(rmElmtId) {
        this.__message.purgeDependencyOnElmtId(rmElmtId);
    }
    aboutToBeDeleted() {
        this.__message.aboutToBeDeleted();
        SubscriberManager.Get().delete(this.id__());
        this.aboutToBeDeletedInternal();
    }
    private __message: ObservedPropertySimplePU<string>;
    get message() {
        return this.__message.get();
    }
    set message(newValue: string) {
        this.__message.set(newValue);
    }
    initialRender() {
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // Row(){
            Row.create();
            // Row(){
            Row.height(70);
            // Row(){
            Row.width('376vp');
            // Row(){
            Row.margin({ left: 6, right: 6, bottom: 6 });
            // Row(){
            Row.borderRadius(16);
            // Row(){
            Row.border({ width: 1, color: '#D3D3D3' });
            // Row(){
            Row.backgroundColor(Color.White);
            // Row(){
            Row.alignItems(VerticalAlign.Center);
            // Row(){
            Row.justifyContent(FlexAlign.Start);
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Image.create({ "id": 150994971, "type": 20000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
            Image.objectFit(ImageFit.Contain);
            Image.width(56);
            Image.height(56);
            Image.margin({ left: 14 });
            Image.borderRadius(8);
        }, Image);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Column.create({ space: 2 });
            Column.height('100%');
            Column.alignItems(HorizontalAlign.Start);
            Column.justifyContent(FlexAlign.Start);
            Column.margin({ left: 7 });
            Column.padding({ top: 14 });
        }, Column);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('高木同学');
            Text.fontSize(14);
            Text.fontColor('#696969');
            Text.fontWeight(FontWeight.Bold);
        }, Text);
        Text.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Text.create('西片太太');
            Text.fontSize(14);
            Text.fontColor('#696969');
        }, Text);
        Text.pop();
        Column.pop();
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            Row.create({ space: 5 });
            Row.margin({ left: 110 });
        }, Row);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831829, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
            SymbolGlyph.fontSize(30);
        }, SymbolGlyph);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            SymbolGlyph.create({ "id": 125831175, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
            SymbolGlyph.fontSize(30);
        }, SymbolGlyph);
        this.observeComponentCreation2((elmtId, isInitialRender) => {
            // .border({width: 1, radius: 50})
            SymbolGlyph.create({ "id": 125831830, "type": 40000, params: [], "bundleName": "com.example.wangningmei", "moduleName": "phone" });
            // .border({width: 1, radius: 50})
            SymbolGlyph.fontSize(30);
        }, SymbolGlyph);
        Row.pop();
        // Row(){
        Row.pop();
    }
    rerender() {
        this.updateDirtyElements();
    }
}

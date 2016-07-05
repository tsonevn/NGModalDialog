"use strict";
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var AppComponent = (function () {
    function AppComponent(modalService) {
        // this._zone.run(()=>{ 
        //     this.onTap();
        // });
        this.modalService = modalService;
        this.onButtonTap = function () {
            console.log('Button tapped');
            this.modalService.showModal(MyDialog, {});
        };
    }
    Object.defineProperty(AppComponent.prototype, "items", {
        get: function () {
            return ['a', 'b', 'c'];
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        console.log('show dialog');
        var that = this;
        that.modalService.showModal(MyDialog, {});
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            directives: [modal_dialog_1.ModalDialogHost],
            providers: [modal_dialog_1.ModalDialogService],
            template: "\n    <StackLayout modal-dialog-host>\n        <Button text=\"Show\" (tap)=\"onTap()\"></Button>\n        <ListView [items]=\"items\" class=\"small-spacing\" >\n            <template let-item=\"item\" > \n                <GridLayout columns=\"*, *\" rows=\"auto\">\n                    <Label class=\"scoreline-text\" [text]=\"item\" col=\"0\"></Label>\n                    <Button text=\"Show\" (tap)=\"onButtonTap()\" col=\"1\"></Button>\n                </GridLayout>\n            </template>\n        </ListView>\n    </StackLayout>"
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var MyDialog = (function () {
    function MyDialog(params) {
        this.params = params;
    }
    MyDialog = __decorate([
        core_1.Component({
            template: "<Label text=\"Hello\"></Label>"
        }), 
        __metadata('design:paramtypes', [modal_dialog_1.ModalDialogParams])
    ], MyDialog);
    return MyDialog;
}());
//# sourceMappingURL=app.component.js.map
import {Component} from "@angular/core";
import {ModalDialogService, ModalDialogOptions, ModalDialogHost, ModalDialogParams} from "nativescript-angular/modal-dialog";
import * as dialogs from "ui/dialogs";

@Component({
    selector: "my-app",
    directives: [ModalDialogHost],
    providers: [ModalDialogService],
    template: `
    <StackLayout modal-dialog-host>
        <Button text="Show" (tap)="onTap()"></Button>
        <ListView [items]="items" class="small-spacing" >
            <template let-item="item" > 
                <GridLayout columns="*, *" rows="auto">
                    <Label class="scoreline-text" [text]="item" col="0"></Label>
                    <Button text="Show" (tap)="onTap()" col="1"></Button>
                </GridLayout>
            </template>
        </ListView>
    </StackLayout>`
})
export class AppComponent {
    constructor( private modalService: ModalDialogService ) {
    }

    public get items(): string[] {
        return ['a', 'b', 'c'];
    }

    public onTap() {
        console.log('show dialog');
        var that =this;
        that.modalService.showModal(MyDialog, {});
    }
}


@Component({
    template: `<Label text="Hello"></Label>`
})
class MyDialog {
    constructor(private params: ModalDialogParams) { }
}
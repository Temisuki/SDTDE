import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import * as Electron from "electron";
import {ElectronService} from "ngx-electron";
import {XMLFileReader} from "./utility/XMLFileReader";
import {EditorService} from "./editor.service";

@Component({
    selector: 'demo-app',
    templateUrl: require('./app.component.html'),
    styleUrls: [require('./app.component.scss')]
})
export class AppComponent implements OnInit{

    fileReader = new XMLFileReader();
    items;

    constructor(private electronService: ElectronService,
                private editorService: EditorService,
                private ref: ChangeDetectorRef) {

    }

    fileDialog() {
        // this.fileReader.readFile('');
        // this._electronService.remote.dialog.showOpenDialog({
        //     properties: ['openFile']
        // }, (file) => {
        //     this.fileReader.readFile(file[0]);
        // });
    }

    ngOnInit(): void {
        this.editorService.itemList.subscribe(list => {
            console.log(list);
            this.items = list;
            this.ref.detectChanges();
        });
    }
}
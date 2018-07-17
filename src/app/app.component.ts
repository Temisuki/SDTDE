import { Component } from '@angular/core';
import * as Electron from "electron";
import {ElectronService} from "ngx-electron";

@Component({
    selector: 'demo-app',
    templateUrl: require('./app.component.html'),
    styleUrls: [require('./app.component.scss')]
})
export class AppComponent {
    constructor(private _electronService: ElectronService) {

    }

    fileDialog() {
        console.log(this._electronService.remote.dialog.showOpenDialog({
            properties: ['openFile', 'multiSelections']
        }, () => {
            console.log('dialog');
        }));
    }
}
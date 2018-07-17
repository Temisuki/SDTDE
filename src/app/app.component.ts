import { Component } from '@angular/core';
import * as Electron from "electron";
import {ElectronService} from "ngx-electron";
import {XMLFileReader} from "./XMLFileReader";

@Component({
    selector: 'demo-app',
    templateUrl: require('./app.component.html'),
    styleUrls: [require('./app.component.scss')]
})
export class AppComponent {

    fileReader = new XMLFileReader();

    constructor(private _electronService: ElectronService) {

    }

    fileDialog() {
        this._electronService.remote.dialog.showOpenDialog({
            properties: ['openFile']
        }, (file) => {
            this.fileReader.readFile(file[0]);
        });
    }
}
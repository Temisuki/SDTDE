import {ElectronService} from "ngx-electron";

export class UtilityScripts {

    static openFileDialog(electronService, callback: (path: string) => any) {
        electronService.remote.dialog.showOpenDialog({
            properties: ['openFile']
        }, (file) => {
            if (file.length > 0)
                callback(file[0]);
        });
    }
}
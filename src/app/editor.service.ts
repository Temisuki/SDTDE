import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {LocalStorageKeys, UtilityScripts} from "./utility/utility-scripts";
import {ElectronService} from "ngx-electron";
import {XMLFileReader} from "./utility/XMLFileReader";
import {FilePaths} from "./link";

@Injectable()
export class EditorService {

    constructor(private electronService: ElectronService) { }

    itemList = new BehaviorSubject(null);
    private gamePath = null;
    private serverSettingsPath = null;
    private itemsSettingsPath = null;

    setGamePath(path: string) {
        this.gamePath = path;
        UtilityScripts.saveToLocalStorage(LocalStorageKeys.GAMEPATH, path);
        this.setServerSettingsPath(this.gamePath + FilePaths.SERVERXML);
    }

    setServerSettingsPath(path: string) {
        if (XMLFileReader.checkIfFileExist(path)) {
            this.serverSettingsPath = path;
            UtilityScripts.saveToLocalStorage(LocalStorageKeys.SERVERXMLPATH, path);
        }
    }

    getServerSettingsPath(): string {
        if (this.serverSettingsPath) {
            return this.serverSettingsPath;
        } else {
            this.serverSettingsPath = UtilityScripts.getFromLocalStorage(LocalStorageKeys.SERVERXMLPATH);
            return this.serverSettingsPath;
        }
    }

    setItemsSettingsPath(path: string) {
        if (XMLFileReader.checkIfFileExist(path)) {
            this.itemsSettingsPath = path;
            UtilityScripts.saveToLocalStorage(LocalStorageKeys.ITEMSXMLPATH, path);
        }
    }

    getItemsSettingsPath(): string {
        if (this.itemsSettingsPath) {
            return this.itemsSettingsPath;
        } else {
            this.itemsSettingsPath = UtilityScripts.getFromLocalStorage(LocalStorageKeys.ITEMSXMLPATH);
            return this.itemsSettingsPath;
        }
    }

    getGamePath(): string {
        if (this.gamePath) {
            return this.gamePath;
        } else {
            this.gamePath = UtilityScripts.getFromLocalStorage(LocalStorageKeys.GAMEPATH);
            return this.gamePath;
        }
    }
}
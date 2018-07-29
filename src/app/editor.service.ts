import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";
import {LocalStorageKeys, UtilityScripts} from "./utility/utility-scripts";

@Injectable()
export class EditorService {
    itemList = new BehaviorSubject(null);
    private gamePath = null;

    setGamePath(path: string) {
        this.gamePath = path;
        UtilityScripts.saveToLocalStorage(LocalStorageKeys.GAMEPATH, path);
    }

    getGamePath() {
        if (this.gamePath) {
            return this.gamePath;
        } else {
            let gamePathFromLocalStorage = UtilityScripts.getFromLocalStorage(LocalStorageKeys.GAMEPATH);
            console.log(gamePathFromLocalStorage, 'GamePathFromLocalStorage');
            if (gamePathFromLocalStorage) {
                this.gamePath = gamePathFromLocalStorage;
                return gamePathFromLocalStorage;
            } else {
                return null;
            }
        }
    }
}
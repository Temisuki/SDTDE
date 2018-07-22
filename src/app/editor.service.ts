import {Injectable} from "@angular/core";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable()
export class EditorService {
    itemList = new BehaviorSubject(null);
    gamePath = null;
}
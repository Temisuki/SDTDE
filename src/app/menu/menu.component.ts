import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {NavigatorService} from "../navigator.service";
import { Links } from "../link";
import {ElectronService} from "ngx-electron";
import {UtilityScripts} from "../utility/utility-scripts";
import {EditorService} from "../editor.service";

@Component({
    selector: 'boilerplate-app',
    templateUrl: require('./menu.component.html'),
    styleUrls: [require('./menu.component.scss')]
})
export class MenuComponent implements OnInit, AfterViewInit {

    constructor(private navigator: NavigatorService,
    private electronService: ElectronService,
    private editorService: EditorService,
    private ref: ChangeDetectorRef) { }
    ngOnInit(): void {
        if(!this.editorService.getGamePath()) {
            UtilityScripts.openDirectoryDialog(this.electronService, (path) => {
                this.editorService.setGamePath(path);
            });
        }
    }

    gotoItems() {
        this.navigator.goTo(Links.Items);
    }
    gotoSettings() {
        this.navigator.goTo(Links.Items);
    }

    gotoQuickSettings() {
        this.navigator.goTo(Links.Items);
    }

    gotoServer() {
        this.navigator.goTo(Links.Server);
    }

    ngAfterViewInit(): void {

    }
}
import {AfterViewInit, ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {NavigatorService} from "../navigator.service";
import { Links } from "../link";
import {ElectronService} from "ngx-electron";
import {UtilityScripts} from "../utility/utility-scripts";
import {EditorService} from "../editor.service";
import {NewsService} from "../news.service";
import {News} from "../utility/models/news.model";

@Component({
    selector: 'boilerplate-app',
    templateUrl: require('./menu.component.html'),
    styleUrls: [require('./menu.component.scss')]
})
export class MenuComponent implements OnInit, AfterViewInit {

    news: News[] = [];
    constructor(private navigator: NavigatorService,
    private newsService: NewsService,
    private electronService: ElectronService,
    private editorService: EditorService,
    private ref: ChangeDetectorRef) { }
    ngOnInit(): void {
        if(!this.editorService.getGamePath()) {
            UtilityScripts.openDirectoryDialog(this.electronService, (path) => {
                this.editorService.setGamePath(path);
            });
        }
        this.getNews();
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

    getNews() {
        this.newsService.getNews().subscribe(
            news => this.news = news
        )
    }

    openInBrowser(link) {
        this.electronService.shell.openExternal(link);
    }
}
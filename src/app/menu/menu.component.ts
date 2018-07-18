import {Component, OnInit} from "@angular/core";
import {NavigatorService} from "../navigator.service";
import { links } from "../link";

@Component({
    selector: 'boilerplate-app',
    templateUrl: require('./menu.component.html'),
    styleUrls: [require('./menu.component.scss')]
})
export class MenuComponent implements OnInit {

    constructor(private navigator: NavigatorService) { }
    ngOnInit(): void {
    }

    gotoItems() {
        this.navigator.goTo(links.Items);
    }
    gotoSettings() {
        this.navigator.goTo(links.Items);
    }

    gotoQuickSettings() {
        this.navigator.goTo(links.Items);
    }

    gotoServer() {
        this.navigator.goTo(links.Items);
    }
}
import {Component, OnInit} from "@angular/core";
import {NavigatorService} from "../navigator.service";

@Component({
    selector: 'server-settings-app',
    templateUrl: require('./server-settings.component.html'),
    styleUrls: [require('./server-settings.component.scss')]
})
export class ServerSettingsComponent implements OnInit {

    constructor(private navigator: NavigatorService) { }
    ngOnInit(): void {
    }

}
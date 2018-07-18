import {Component, OnInit} from "@angular/core";
import {NavigatorService} from "../navigator.service";

@Component({
    selector: 'main-app',
    templateUrl: require('./main.component.html'),
    styleUrls: [require('./main.component.scss')]
})
export class MainComponent implements OnInit {

    constructor(private navigator: NavigatorService) {}

    ngOnInit(): void {
    }
}
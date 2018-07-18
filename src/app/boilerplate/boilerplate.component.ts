import {Component, OnInit} from "@angular/core";
import {NavigatorService} from "../navigator.service";

@Component({
    selector: 'boilerplate-app',
    templateUrl: require('./boilerplate.component.html'),
    styleUrls: [require('./boilerplate.component.scss')]
})
export class BoilerplateComponent implements OnInit {

    constructor(private navigator: NavigatorService) { }
    ngOnInit(): void {
    }

}
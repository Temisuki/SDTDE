import {Component, OnInit} from "@angular/core";
import {NavigatorService} from "../navigator.service";

@Component({
    selector: 'navbar-app',
    templateUrl: require('./navbar.component.html'),
    styleUrls: [require('./navbar.component.scss')]
})
export class NavbarComponent implements OnInit {

    constructor(private navigator: NavigatorService) { }
    ngOnInit(): void {
    }

}
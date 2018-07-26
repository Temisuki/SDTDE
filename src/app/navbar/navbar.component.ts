import {Component, OnInit} from "@angular/core";
import {NavigatorService} from "../navigator.service";
import {BreakpointObserver} from "@angular/cdk/layout";
import {NavigationEnd, Router} from "@angular/router";

@Component({
    selector: 'navbar-app',
    templateUrl: require('./navbar.component.html'),
    styleUrls: [require('./navbar.component.scss')]
})
export class NavbarComponent implements OnInit {

    currentUrl: String = '/';

    constructor(private navigator: NavigatorService, private breakpointObserver: BreakpointObserver, private router: Router) {
        router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
    }
    ngOnInit(): void {
    }

}
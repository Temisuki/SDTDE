import {Component, Input, OnInit} from "@angular/core";
import {NavigatorService} from "../navigator.service";
import {BreakpointObserver} from "@angular/cdk/layout";
import {NavigationEnd, Router} from "@angular/router";
import {NavbarOptionsModel} from "../utility/navbar-options.model";

@Component({
    selector: 'navbar-app',
    templateUrl: require('./navbar.component.html'),
    styleUrls: [require('./navbar.component.scss')]
})
export class NavbarComponent implements OnInit {

    currentUrl: String = '/';
    @Input() options: NavbarOptionsModel = null;

    constructor(private navigator: NavigatorService, private breakpointObserver: BreakpointObserver, private router: Router) {
        router.events.subscribe((_: NavigationEnd) => this.currentUrl = _.url)
    }
    ngOnInit(): void {
    }

    saveMethod() {
        this.options.saveCallback();
    }

    backMethod() {
        this.options.backCallback();
    }

    restoreMethod() {
        this.options.restoreCallback();
    }

}
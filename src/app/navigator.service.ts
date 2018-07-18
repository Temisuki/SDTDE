import { Injectable } from "@angular/core";
import {ActivatedRoute, Router} from "@angular/router";

@Injectable()
export class NavigatorService {

    constructor(private route: ActivatedRoute, private router: Router) { }

    goTo(destination) {
        this.router.navigate(['/' + destination]);
    }
}
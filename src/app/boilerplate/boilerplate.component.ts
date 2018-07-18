import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'boilerplate-app',
    templateUrl: require('./boilerplate.component.html'),
    styleUrls: [require('./boilerplate.component.scss')]
})
export class BoilerplateComponent implements OnInit {
    ngOnInit(): void {
    }
}
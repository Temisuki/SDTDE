import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'test-app',
    templateUrl: require('./test.component.html'),
    styleUrls: [require('./test.component.scss')]
})
export class TestComponent implements OnInit {

    ngOnInit(): void {
    }

}
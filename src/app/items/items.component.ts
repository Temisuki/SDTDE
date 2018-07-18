import {Component, OnInit} from "@angular/core";

@Component({
    selector: 'items-app',
    templateUrl: require('./items.component.html'),
    styleUrls: [require('./items.component.scss')]
})
export class ItemsComponent implements OnInit {

    ngOnInit(): void {
    }


}
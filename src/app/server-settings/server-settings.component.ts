import {
    AfterContentChecked,
    AfterViewInit,
    ChangeDetectorRef,
    Component, ElementRef,
    Input,
    OnChanges,
    OnInit, ViewChild
} from "@angular/core";
import {NavigatorService} from "../navigator.service";
import {XMLFileReader} from "../XMLFileReader";
import {isBoolean} from "ngx-bootstrap/chronos/utils/type-checks";
import {Difficulty, ServerSettings, TypeOfValue} from "./server-settings";
import {BsDropdownDirective} from "ngx-bootstrap";

@Component({
    selector: 'server-settings-app',
    templateUrl: require('./server-settings.component.html'),
    styleUrls: [require('./server-settings.component.scss')]
})
export class ServerSettingsComponent implements OnInit, AfterViewInit {

    xmlFileReader: XMLFileReader;
    TypeOfValue = TypeOfValue;
    Difficulty = Difficulty;
    getBooleanValue = ServerSettings.getBooleanValue;
    serverXML = null;
    lol = '';
    constructor(private navigator: NavigatorService,
                private ref: ChangeDetectorRef) { }
    ngOnInit(): void {
        this.xmlFileReader = new XMLFileReader();
        this.xmlFileReader.readFile('', (XML) => {
            this.serverXML = XML;
            console.log(this.serverXML)
            this.ref.detectChanges();
        });
    }

    getTypeOfDirective(name, value) {
        if (name === 'GameDifficulty') return TypeOfValue.Difficulty;
        const booleanType = this.getBooleanValue(value);
        if(isBoolean(booleanType)) {
            return TypeOfValue.Boolean;
        }
        return TypeOfValue.String;
    }

    debug() {
        console.log(this.serverXML);
    }

    booleanChangeOposite(index) {
        this.serverXML.ServerSettings.property[index].$.value = !this.getBooleanValue(this.serverXML.ServerSettings.property[index].$.value);
        this.ref.detectChanges();
    }

    setDifficulty(difficulty, index) {
        this.serverXML.ServerSettings.property[index].$.value = Difficulty[difficulty];
        this.detectChanges();
    }

    detectChanges() {
        console.log('Detect changes');
        this.ref.detectChanges();
        setTimeout(() =>{
            this.ref.detectChanges();
        }, 100);
    }

    ngAfterViewInit(): void {
    }

}
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
import {UtilityScripts} from "../utility/utility-scripts";
import {ElectronService} from "ngx-electron";

@Component({
    selector: 'server-settings-app',
    templateUrl: require('./server-settings.component.html'),
    styleUrls: [require('./server-settings.component.scss')]
})
export class ServerSettingsComponent implements OnInit, AfterViewInit {

    xmlFileReader: XMLFileReader;
    XMLPath = '';
    TypeOfValue = TypeOfValue;
    Difficulty = Difficulty;
    getBooleanValue = ServerSettings.getBooleanValue;
    serverXML = null;
    lol = '';
    constructor(private navigator: NavigatorService,
                private electronService: ElectronService,
                private ref: ChangeDetectorRef) { }
    ngOnInit(): void {
        this.xmlFileReader = new XMLFileReader();
        UtilityScripts.openFileDialog(this.electronService, (path) => {
            this.readFile(path);
        });
        // ServerSettings.spawnProcess();
    }

    readFile(path: string) {
        this.xmlFileReader.readFile(path, (XML) => {
            this.serverXML = XML;
            this.ref.detectChanges();
        });
    }

    getTypeOfDirective(name, value) {
        if(value === '') return TypeOfValue.String;
        if (name === 'GameDifficulty') return TypeOfValue.Difficulty;
        if (name === 'LootAbundance' || name === 'BlockDurabilityModifier') return TypeOfValue.Percentage;
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

    setPercentage(index, input) {
        if (this.serverXML.ServerSettings.property[index].$.value > 100 || this.serverXML.ServerSettings.property[index].$.value < 0) {
            this.serverXML.ServerSettings.property[index].$.value = 100;
            input.value = 100;
        }
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
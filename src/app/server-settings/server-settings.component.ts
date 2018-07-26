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
import {XMLFileReader} from "../utility/XMLFileReader";
import {isBoolean} from "ngx-bootstrap/chronos/utils/type-checks";
import {
    Difficulty,
    ServerSettings,
    TypeOfValue,
    EnemyDifficulty,
    DropOnDeath,
    DropOnQuit,
    GameWorld, PlayerKillingMode, ZombiesRun
} from "./server-settings";
import {BsDropdownDirective} from "ngx-bootstrap";
import {UtilityScripts} from "../utility/utility-scripts";
import {ElectronService} from "ngx-electron";
import {NavbarOptionsModel} from "../utility/navbar-options.model";

@Component({
    selector: 'server-settings-app',
    templateUrl: require('./server-settings.component.html'),
    styleUrls: [require('./server-settings.component.scss')]
})
export class ServerSettingsComponent implements OnInit, AfterViewInit {

    options: NavbarOptionsModel;
    propertyName = '';
    xmlFileReader: XMLFileReader;
    XMLPath = '';

    // Enums
    TypeOfValue = TypeOfValue;
    Difficulty = Difficulty;
    ZombiesRun = ZombiesRun;
    EnemyDifficulty = EnemyDifficulty;
    DropOnQuit = DropOnQuit;
    DropOnDeath = DropOnDeath;
    GameWorld = GameWorld;
    PlayerKillingMode = PlayerKillingMode;

    getBooleanValue = ServerSettings.getBooleanValue;
    serverXML = null;

    constructor(private navigator: NavigatorService,
                private electronService: ElectronService,
                private ref: ChangeDetectorRef) { }
    ngOnInit(): void {
        this.options = new NavbarOptionsModel();
        this.options.saveCallback = () => {
            console.log('save');
        };
        this.xmlFileReader = new XMLFileReader();
        UtilityScripts.openFileDialog(this.electronService, (path) => {
            this.XMLPath = path;
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

    saveXML() {
        // this.xmlFileReader.saveXML(this.serverXML, this.XMLPath);
    }

    getTypeOfDirective(name, value) {
        if(value === '') return TypeOfValue.String;
        if (name === 'GameDifficulty') return TypeOfValue.Difficulty;
        if (name === 'ZombiesRun') return TypeOfValue.ZombiesRun;
        if (name === 'GameWorld') return TypeOfValue.GameWorld;
        if (name === 'PlayerKillingMode') return TypeOfValue.PlayerKillingMode;
        if (name === 'EnemyDifficulty') return TypeOfValue.EnemyDifficulty;
        if (name === 'DropOnDeath') return TypeOfValue.DropOnDeath;
        if (name === 'DropOnQuit') return TypeOfValue.DropOnQuit;
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

    getItemByName(name) {
        return this.serverXML.ServerSettings.property.find(x => x.$.name === name);
    }

    booleanChangeOposite(name) {
        this.getItemByName(name).$.value = !this.getBooleanValue(this.getItemByName(name).$.value);
        this.ref.detectChanges();
    }

    setDifficulty(difficulty, name) {
        this.getItemByName(name).$.value = Difficulty[difficulty];
        this.detectChanges();
    }

    setDropOnDeath(dropOnDeath, name) {
        this.getItemByName(name).$.value = DropOnDeath[dropOnDeath];
        this.detectChanges();
    }

    setDropOnQuit(dropOnQuit, name) {
        this.getItemByName(name).$.value = DropOnQuit[dropOnQuit];
        this.detectChanges();
    }

    setEnemyDifficulty(enemyDifficulty, name) {
        this.getItemByName(name).$.value = EnemyDifficulty[enemyDifficulty];
        this.detectChanges();
    }

    setZombiesRun(zombiesRun, name) {
        this.getItemByName(name).$.value = ZombiesRun[zombiesRun];
        this.detectChanges();
    }

    setGameWorld(gameWorld, name) {
        this.getItemByName(name).$.value = gameWorld.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1).join(' ');
        this.detectChanges();
    }

    setPlayerKillingMode(playerKillingMode, name) {
        this.getItemByName(name).$.value = PlayerKillingMode[playerKillingMode];
        this.detectChanges();
    }

    setPercentage(name, input) {
        if (this.getItemByName(name).$.value > 100 || this.getItemByName(name).$.value < 0) {
            this.getItemByName(name).$.value = 100;
            input.value = 100;
        }
    }


    detectChanges() {
        this.ref.detectChanges();
        setTimeout(() =>{
            this.ref.detectChanges();
        }, 100);
    }

    ngAfterViewInit(): void {
    }

}
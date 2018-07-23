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

    booleanChangeOposite(index) {
        this.serverXML.ServerSettings.property[index].$.value = !this.getBooleanValue(this.serverXML.ServerSettings.property[index].$.value);
        this.ref.detectChanges();
    }

    setDifficulty(difficulty, index) {
        this.serverXML.ServerSettings.property[index].$.value = Difficulty[difficulty];
        this.detectChanges();
    }

    setDropOnDeath(dropOnDeath, index) {
        this.serverXML.ServerSettings.property[index].$.value = DropOnDeath[dropOnDeath];
        this.detectChanges();
    }

    setDropOnQuit(dropOnQuit, index) {
        this.serverXML.ServerSettings.property[index].$.value = DropOnQuit[dropOnQuit];
        this.detectChanges();
    }

    setEnemyDifficulty(enemyDifficulty, index) {
        this.serverXML.ServerSettings.property[index].$.value = EnemyDifficulty[enemyDifficulty];
        this.detectChanges();
    }

    setZombiesRun(zombiesRun, index) {
        this.serverXML.ServerSettings.property[index].$.value = ZombiesRun[zombiesRun];
        this.detectChanges();
    }

    setGameWorld(gameWorld, index) {
        this.serverXML.ServerSettings.property[index].$.value = gameWorld.match(/([A-Z]?[^A-Z]*)/g).slice(0,-1).join(' ');
        this.detectChanges();
    }

    setPlayerKillingMode(playerKillingMode, index) {
        this.serverXML.ServerSettings.property[index].$.value = PlayerKillingMode[playerKillingMode];
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
import {
    AfterViewInit,
    ChangeDetectorRef,
    Component, ElementRef,
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
import {UtilityScripts} from "../utility/utility-scripts";
import {ElectronService} from "ngx-electron";
import {NavbarOptionsModel, PropertyModel} from "../utility/navbar-options.model";
import {Observable} from "rxjs";
import {debounceTime, distinctUntilChanged, map} from "rxjs/operators";
import {COMMA, ENTER, SPACE} from "@angular/cdk/keycodes";
import {MatChipInputEvent} from "@angular/material";
import {EditorService} from "../editor.service";
import {FilePaths} from "../link";

@Component({
    selector: 'server-settings-app',
    templateUrl: require('./server-settings.component.html'),
    styleUrls: [require('./server-settings.component.scss')]
})
export class ServerSettingsComponent implements OnInit, AfterViewInit {

    @ViewChild('inputChips') inputChips: ElementRef;

    options: NavbarOptionsModel;
    propertyName = [];
    separatorKeysCodes = [ENTER, COMMA, SPACE];
    removable = true;
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
    initialXML = null;

    padding = '66px';

    lastChanges: PropertyModel[] = [];
    typeAheadArray: string[] = [];
    fakeSearchWord = true;

    search = (text$: Observable<string>) =>
        text$.pipe(
            debounceTime(200),
            distinctUntilChanged(),
            map(term => term.length < 2 ? []
                : this.typeAheadArray.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
        );

    constructor(private navigator: NavigatorService,
                private electronService: ElectronService,
                private editorService: EditorService,
                private ref: ChangeDetectorRef) {
    }

    ngOnInit(): void {

        this.inputChips.nativeElement.addEventListener('onresize', function () {
            console.log('resize');
        });
        this.options = new NavbarOptionsModel();
        this.options.saveCallback = () => {
            this.saveXML();
        };
        this.options.restoreCallback = () => {
            this.restoreXML();
        };
        this.xmlFileReader = new XMLFileReader();
        if (this.editorService.gamePath) {
            this.readFile(this.editorService.gamePath + FilePaths.SERVERXML);
        } else {
            UtilityScripts.openFileDialog(this.electronService, (path) => {
                this.XMLPath = path;
                this.readFile(path);
            });
        }
        // ServerSettings.spawnProcess();
    }

    add(event: MatChipInputEvent): void {
        let input = event.input;
        let value = event.value;
        if (value.length > 0) {
            this.propertyName.push(value);
            this.changeHeight();
        }
        if (input) {
            input.value = '';
        }
    }

    remove(item) {
        this.propertyName.splice(this.propertyName.indexOf(item), 1);
        this.changeHeight();
    }

    removeByKey(value) {
        if (value.length < 1) {
            if (this.propertyName.length > 0) {
                this.propertyName.pop();
                this.changeHeight();
            }
        }
    }

    changeHeight() {
        setTimeout(() => {
            this.fakeSearchWord = !this.fakeSearchWord;
            this.padding = this.inputChips.nativeElement.clientHeight + 'px';
            this.detectChanges();
        }, 100);
    }

    readFile(path: string) {
        this.xmlFileReader.readFile(path, (XML) => {
            this.serverXML = XML;
            this.initialXML = (JSON.parse(JSON.stringify(XML)));
            this.fillTypeAhead();
            this.ref.detectChanges();
        });
    }

    fillTypeAhead() {
        this.serverXML.ServerSettings.property.forEach(property => {
            this.typeAheadArray.push(property.$.name);
        })
    }

    saveXML() {
        this.xmlFileReader.saveXML(this.serverXML, this.XMLPath);
    }

    getTypeOfDirective(name, value) {
        if (value === '') return TypeOfValue.String;
        if (name === 'GameDifficulty') return TypeOfValue.Difficulty;
        if (name === 'ZombiesRun') return TypeOfValue.ZombiesRun;
        if (name === 'GameWorld') return TypeOfValue.GameWorld;
        if (name === 'PlayerKillingMode') return TypeOfValue.PlayerKillingMode;
        if (name === 'EnemyDifficulty') return TypeOfValue.EnemyDifficulty;
        if (name === 'DropOnDeath') return TypeOfValue.DropOnDeath;
        if (name === 'DropOnQuit') return TypeOfValue.DropOnQuit;
        if (name === 'LootAbundance' || name === 'BlockDurabilityModifier') return TypeOfValue.Percentage;
        const booleanType = this.getBooleanValue(value);
        if (isBoolean(booleanType)) {
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
        this.addToBack(new PropertyModel(this.getItemByName(name)));
        this.getItemByName(name).$.value = !this.getBooleanValue(this.getItemByName(name).$.value);
        this.ref.detectChanges();
    }

    setDifficulty(difficulty, name) {
        this.addToBack(new PropertyModel(this.getItemByName(name)));
        this.getItemByName(name).$.value = Difficulty[difficulty];
        this.detectChanges();
    }

    setDropOnDeath(dropOnDeath, name) {
        this.addToBack(new PropertyModel(this.getItemByName(name)));
        this.getItemByName(name).$.value = DropOnDeath[dropOnDeath];
        this.detectChanges();
    }

    setDropOnQuit(dropOnQuit, name) {
        this.addToBack(new PropertyModel(this.getItemByName(name)));
        this.getItemByName(name).$.value = DropOnQuit[dropOnQuit];
        this.detectChanges();
    }

    setEnemyDifficulty(enemyDifficulty, name) {
        this.addToBack(new PropertyModel(this.getItemByName(name)));
        this.getItemByName(name).$.value = EnemyDifficulty[enemyDifficulty];
        this.detectChanges();
    }

    setZombiesRun(zombiesRun, name) {
        this.addToBack(new PropertyModel(this.getItemByName(name)));
        this.getItemByName(name).$.value = ZombiesRun[zombiesRun];
        this.detectChanges();
    }

    setGameWorld(gameWorld, name) {
        this.addToBack(new PropertyModel(this.getItemByName(name)));
        this.getItemByName(name).$.value = gameWorld.match(/([A-Z]?[^A-Z]*)/g).slice(0, -1).join(' ');
        this.detectChanges();
    }

    setPlayerKillingMode(playerKillingMode, name) {
        this.addToBack(new PropertyModel(this.getItemByName(name)));
        this.getItemByName(name).$.value = PlayerKillingMode[playerKillingMode];
        this.detectChanges();
    }

    setPercentage(name, input) {
        if (this.getItemByName(name).$.value > 100 || this.getItemByName(name).$.value < 0) {
            this.getItemByName(name).$.value = 100;
            input.value = 100;
        }
    }

    addToBack(lastProperty: PropertyModel) {
        this.lastChanges.push(lastProperty);
    }

    backChanges() {
        if (this.lastChanges.length > 0) {
            this.getItemByName(this.lastChanges[this.lastChanges.length - 1].name).$.value = this.lastChanges[this.lastChanges.length - 1].value;
            this.lastChanges.pop();
            this.detectChanges();
        }
    }

    restoreXML() {
        this.serverXML = JSON.parse(JSON.stringify(this.initialXML));
        this.detectChanges();
    }

    detectChanges() {
        this.ref.detectChanges();
        setTimeout(() => {
            this.ref.detectChanges();
        }, 100);
    }

    ngAfterViewInit(): void {
    }
}
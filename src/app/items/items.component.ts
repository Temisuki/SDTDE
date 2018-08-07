import {ChangeDetectorRef, Component, OnInit} from "@angular/core";
import {ItemsModel} from "./items.model";
import {XMLFileReader} from "../utility/XMLFileReader";
import {NavigatorService} from "../navigator.service";
import {ElectronService} from "ngx-electron";
import {EditorService} from "../editor.service";
import {NavbarOptionsModel} from "../utility/models/navbar-options.model";
import {UtilityScripts} from "../utility/utility-scripts";

@Component({
    selector: 'items-app',
    templateUrl: require('./items.component.html'),
    styleUrls: [require('./items.component.scss')]
})
export class ItemsComponent implements OnInit {

    xmlFileReader: XMLFileReader;
    XMLPath = '';
    itemsXML: ItemsModel = null;
    initialXML = null;
    typeAheadArray: string[] = [];
    itemStacknumber: number;


    constructor(private navigator: NavigatorService,
                private electronService: ElectronService,
                private editorService: EditorService,
                private ref: ChangeDetectorRef) {
    }


    ngOnInit(): void {

        this.xmlFileReader = new XMLFileReader();
        if (this.editorService.getItemsSettingsPath()) {
            this.XMLPath = this.editorService.getItemsSettingsPath();
            this.readFile(this.XMLPath);
        } else {
            UtilityScripts.openFileDialog(this.electronService, (path) => {
                this.editorService.setItemsSettingsPath(path);
                this.XMLPath = path;
                this.readFile(path);
            });
        }
    }

    readFile(path: string) {
        XMLFileReader.itemsReadFile(path, (XML) => {
            this.itemsXML = XML;
            this.initialXML = (JSON.parse(JSON.stringify(XML)));
            this.fillTypeAhead();
            this.ref.detectChanges();
        });
    }

    fillTypeAhead() {
        this.itemsXML.items.item.forEach(item => {
            this.typeAheadArray.push(item["-name"]);
        })
    }

    // getItemStacknumber(item) {
    //     let value = item.property.find(x => x["-name"] === 'Stacknumber');
    //     console.log(value);
    //     if(value !== undefined) {
    //         return value['-name'];
    //     }
    // }
    getItemStacknumber(index) {
        let value = this.itemsXML.items.item[index].property.find(x => x["-name"] === 'Stacknumber');
        if(value != undefined)
        {
            return 'Stacknumber: ' + value['-value'];
        }

    }

}
import * as fs from "fs";
import {parseString, Builder} from 'xml2js';
import {ItemsActions} from "./ItemsActions";
import {EditorService} from "./editor.service";

export class XMLFileReader {

    parser;
    itemsActions = new ItemsActions();

    constructor(private editorService: EditorService) {
        this.parser = new DOMParser();
    }

    readFile(path: string) {
        fs.readFile('C:\\Users\\Mateusz\\Desktop\\items.xml', 'utf8', (err, data) => {
            parseString(data, (err, result) => {
                this.saveXML(this.itemsActions.changeQuantity(result));
                this.editorService.itemList.next(result.items.item);
            });

        });
    }

    saveXML(data) {
        const builder = new Builder();
        const xml = builder.buildObject(this.itemsActions.changeQuantity(data));
        fs.writeFile('xml.xml', xml, () => {});
    }
}
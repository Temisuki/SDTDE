import * as fs from "fs";
import {parseString, Builder} from 'xml2js';
import {ItemsActions} from "./ItemsActions";

export class XMLFileReader {

    parser;
    itemsActions = new ItemsActions();

    constructor() {
        this.parser = new DOMParser();
    }

    readFile(path: string, callback: (XML: any) => any) {
        fs.readFile('C:\\Users\\Mateusz\\Desktop\\serverconfig.xml', 'utf8', (err, data) => {
            parseString(data, (err, result) => {
                callback(result);
                // this.saveXML(this.itemsActions.changeQuantity(result));
                // this.editorService.itemList.next(result.items.item);
            });
        });
    }

    saveXML(data) {
        const builder = new Builder();
        const xml = builder.buildObject(this.itemsActions.changeQuantity(data));
        fs.writeFile('xml.xml', xml, () => {});
    }
}
import * as fs from "fs";
import {parseString, Builder} from 'xml2js';
import {ItemsActions} from "./ItemsActions";
import swal from 'sweetalert2'

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

    saveXML(xml, path: string) {
        const builder = new Builder();
        fs.writeFile(path, builder.buildObject(xml), () => {
            swal({
                type: "success",
                title: 'File saved successfuly'
            })
        });
    }
}
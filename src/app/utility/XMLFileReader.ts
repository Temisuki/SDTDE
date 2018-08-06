import * as fs from "fs";
import {parseString, Builder} from 'xml2js';
import * as ObjTree from '../../../node_modules/objtree'
import swal from 'sweetalert2'
import {ServerModel} from "../server-settings/server-settings.model";

// TODO: Enum with basic filenames
export class XMLFileReader {

    parser: DOMParser;
    xotree: ObjTree;

    constructor() {
        this.parser = new DOMParser();
        this.xotree = new ObjTree()
    }

    static readFile(path: string, callback: (XML: any) => any) {
        const xotree = new ObjTree();
        console.log(xotree);

        fs.readFile(path, 'utf8', (err, data) => {
            // xotree.attr_prefix = 'att_';
            const json = xotree.parseXML(data);
            console.log(json);
            let serverSettings: ServerModel = null;
            serverSettings = <ServerModel>json;
            console.log(serverSettings.ServerSettings.property[0]["-name"]);
            // console.log(xotree.writeXML(json));
            parseString(data, (err, result) => {
                callback(result);
                // this.saveXML(this.itemsActions.changeQuantity(result));
                // this.editorService.itemList.next(result.items.item);
            });
        });
    }

    static saveXML(xml, path: string) {
        const builder = new Builder();
        fs.writeFile(path, builder.buildObject(xml), () => {
            swal({
                type: "success",
                title: 'File saved successfuly',
                confirmButtonColor: '#00adb5',
                background: '#222831',
            })
        });
    }
    static saveJSON(xml, path: string) {
        console.log(xml);
        fs.writeFile('json.json', JSON.stringify(xml),() => {
            console.log('sukces');
        })
    }

    static checkIfFileExist(path: string) {
        return fs.existsSync(path);
    }
}
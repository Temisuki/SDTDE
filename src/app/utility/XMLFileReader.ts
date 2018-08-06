import * as fs from "fs";
import {parseString, Builder} from 'xml2js';
import swal from 'sweetalert2'

// TODO: Enum with basic filenames
export class XMLFileReader {

    parser: DOMParser;

    constructor() {
        this.parser = new DOMParser();
    }

    static readFile(path: string, callback: (XML: any) => any) {
        fs.readFile(path, 'utf8', (err, data) => {
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
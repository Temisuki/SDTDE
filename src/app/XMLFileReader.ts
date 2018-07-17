import * as fs from "fs";

export class XMLFileReader {

    parser;
    xmlDoc;

    constructor() {
        this.parser = new DOMParser();
    }

    readFile(path: string) {
        fs.readFile(path, 'utf8', (err, data) => {
            console.log(data);
            this.xmlDoc = this.parser.parseFromString(data, "text/xml");
            console.log(this.xmlDoc.getElementsByTagName('item'));
        })
    }
}
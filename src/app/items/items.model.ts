// export class ServerSettingsInterface {
//     'property': PropertyInterface[];
// }
//
// export class PropertyInterface {
//     '-name': string;
//     '-value': string;
// }
//
// export class ServerModel {
//     'ServerSettings': ServerSettingsInterface;
// }

export class ItemPropertyInterface {
    '-name': string;
    '-value': string;
}

export class ItemsInterface {
    '-id': string;
    '-name': string;
    'property': ItemPropertyInterface[];
}

export class ItemsModel {
    'items': ItemsInterface[];
}


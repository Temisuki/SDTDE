export class ServerSettingsInterface {
    'property': PropertyInterface[];
}

export class PropertyInterface {
    '-name': string;
    '-value': string;
}

export class ServerModel {
    'ServerSettings': ServerSettingsInterface;
}
export class ItemPropertyInterface {
    '-name': string;
    '-value': string;
}

export class ItemInterface {
    '-id': string;
    '-name': string;
    'property': ItemPropertyInterface[];
}

export class ItemsInterface {
    'item': ItemInterface[]
}

export class ItemsModel {
    'items': ItemsInterface;
}


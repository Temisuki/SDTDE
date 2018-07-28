export class NavbarOptionsModel {
    saveCallback: () => void = null;
    backCallback: () => void = null;
    restoreCallback: () => void = null;
}

export class PropertyModel {

    constructor(property) {
        this.name = property.$.name;
        this.value = property.$.value;
    }

    name: string;
    value: any;
}
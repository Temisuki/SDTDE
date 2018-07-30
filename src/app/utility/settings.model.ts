export class SettingsModel {
    language: LanguageModel;
}

export class LanguageModel {
    name: string;
    properties: PropertySettingsModel[];
}

export class PropertySettingsModel {
    name: string;
    translatedName: string;
    description: string;
    defaultValue: string;
}
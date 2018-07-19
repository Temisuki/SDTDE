export class ServerSettings {
    static getBooleanValue(value) {
        return value === 'true' || (value !== 'false') && value || false;
    }
}

export enum TypeOfValue {
    Boolean,
    Number,
    String,
    Difficulty
}

export enum Difficulty {
    Scavenger = 0,
    Adventurer = 1,
    Nomad = 2,
    Warrior = 3,
    Survivalist = 4,
    Insane = 5
}
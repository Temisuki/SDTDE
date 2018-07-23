const { spawn } = require('child_process');

export class ServerSettings {

    static spawnProcess() {
        console.log(spawn);
    }

    static getBooleanValue(value) {
        return value === 'true' || (value !== 'false') && value || false;
    }
}

export enum TypeOfValue {
    Boolean,
    Number,
    String,
    Difficulty,
    Percentage,
    ZombiesRun,
    EnemyDifficulty,
    DropOnDeath,
    DropOnQuit,
    PlayerKillingMode,
    GameWorld
}

export enum Difficulty {
    Scavenger = 0,
    Adventurer = 1,
    Nomad = 2,
    Warrior = 3,
    Survivalist = 4,
    Insane = 5
}

export enum EnemyDifficulty {
    Normal = 0,
    Feral = 1
}

export enum DropOnDeath {
    Everything = 0,
    ToolbeltOnly = 1,
    BackpackOnly = 2,
    DeleteAll = 3
}

export enum DropOnQuit {
    Nothing = 0,
    Everything = 1,
    ToolbeltOnly = 2,
    BackpackOnly = 3
}

export enum PlayerKillingMode {
    NoKilling = 0,
    KillAlliesOnly = 1,
    KillStrangersOnly = 2,
    KillEveryone = 3
}

export enum ZombiesRun {
    DayWalkNightRun = 0,
    NeverRun = 1,
    AlwaysRun = 2
}

export enum GameWorld {
    Navezgane = 'Navezgane',
    RandomGen = 'Random Gen'
}
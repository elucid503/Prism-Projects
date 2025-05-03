// Type Util

export type RenderedResource<T> = { HTML: string, JSON: T };

// Internal/Frontend

export enum AnimationTimes {

    Short = 200,
    Medium = 350,
    Long = 475

}

export type CacheItem<T> = {

    Data: T;
    Expiry: number;

}

export interface GlobalCache {

    // Nothing yet

    [key: string]: { [key: string]: CacheItem<any> };

}

export interface GlobalStates {

}

export interface Storage {

    Cache: GlobalCache;

    States: GlobalStates;

}

// Logs

export enum LogLevel {

    Info = 0,
    Warning = 1,
    Error = 2

}
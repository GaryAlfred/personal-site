
export type TaggedAndDescribed = Tagged & Described;

export interface Tagged {
    tags: string[];
}

export interface Described {
    description?: string;
}

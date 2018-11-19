import { Typed } from './index';
export interface MediaAttributes {
    id: string;
    type: 'link' | 'file';
    collection: string;
    occurrenceKey?: string;
}
export declare class Media {
    private readonly attrs;
    constructor(attrs: MediaAttributes);
    toJSON(): Typed;
}

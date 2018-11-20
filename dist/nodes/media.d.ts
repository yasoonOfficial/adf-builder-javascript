import { Typed } from './index';
export interface MediaAttributes {
    id: string;
    type: 'link' | 'file';
    url?: string;
    collection: string;
    occurrenceKey?: string;
    width?: number;
    height?: number;
}
export declare class Media {
    private readonly attrs;
    constructor(attrs: MediaAttributes);
    toJSON(): Typed;
}

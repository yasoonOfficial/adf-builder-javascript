import { Mark } from './mark';
export declare class TextColor extends Mark {
    private readonly color;
    constructor(color: string);
    toJSON(): {
        type: string;
        attrs: {
            color: string;
        };
    };
}

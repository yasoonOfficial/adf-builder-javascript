import { Mark } from './mark';
export declare class SubSup extends Mark {
    private readonly variant;
    constructor(variant: 'sub' | 'sup');
    toJSON(): {
        type: string;
        attrs: {
            type: "sub" | "sup";
        };
    };
}

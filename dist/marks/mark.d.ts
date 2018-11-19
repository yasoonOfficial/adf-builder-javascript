export declare abstract class Mark {
    readonly type: string;
    constructor(type: string);
    toJSON(): {
        type: string;
    };
}

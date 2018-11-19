export interface Typed {
    type: string;
    [key: string]: any;
}
export interface JSONable {
    toJSON: () => Typed;
}
export declare class ContentNode<T extends JSONable> {
    private readonly type;
    private readonly minLength;
    private content;
    constructor(type: string, minLength?: number);
    toJSON(): {
        type: string;
        content: Typed[];
    };
    add<U extends T>(node: U): U;
}
export declare abstract class TopLevelNode implements JSONable {
    abstract toJSON(): Typed;
}
export declare abstract class InlineNode implements JSONable {
    abstract toJSON(): Typed;
}

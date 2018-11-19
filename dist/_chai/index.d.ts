declare global  {
    namespace Chai {
        interface Assertion {
            validADF(): Assertion;
        }
    }
}
export declare function adfValidator(): Promise<(chai: any, utils: any) => void>;

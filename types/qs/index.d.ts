// Type definitions for qs 6.9
// Project: https://github.com/ljharb/qs
// Definitions by: Roman Korneev <https://github.com/RWander>
//                 Leon Yu <https://github.com/leonyu>
//                 Belinda Teh <https://github.com/tehbelinda>
//                 Melvin Lee <https://github.com/zyml>
//                 Arturs Vonda <https://github.com/artursvonda>
//                 Carlos Bonetti <https://github.com/CarlosBonetti>
//                 Dan Smith <https://github.com/dpsmith3>
//                 Hunter Perrin <https://github.com/hperrin>
//                 Jordan Harband <https://github.com/ljharb>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped
export = QueryString;
export as namespace qs;

declare namespace QueryString {
    type defaultEncoder = (str: any, defaultEncoder?: any, charset?: string) => string;
    type defaultDecoder = (str: string, decoder?: any, charset?: string) => string;

    interface IStringifyOptions {
        delimiter?: string;
        strictNullHandling?: boolean;
        skipNulls?: boolean;
        encode?: boolean;
        encoder?: (str: any, defaultEncoder: defaultEncoder, charset: string, type: 'key' | 'value') => string;
        filter?: Array<string | number> | ((prefix: string, value: any) => any);
        arrayFormat?: 'indices' | 'brackets' | 'repeat' | 'comma';
        indices?: boolean;
        sort?: (a: any, b: any) => number;
        serializeDate?: (d: Date) => string;
        format?: 'RFC1738' | 'RFC3986';
        encodeValuesOnly?: boolean;
        addQueryPrefix?: boolean;
        allowDots?: boolean;
        charset?: 'utf-8' | 'iso-8859-1';
        charsetSentinel?: boolean;
    }

    interface IParseOptions {
        comma?: boolean;
        delimiter?: string | RegExp;
        depth?: number | false;
        decoder?: (str: string, defaultDecoder: defaultDecoder, charset: string, type: 'key' | 'value') => any;
        arrayLimit?: number;
        parseArrays?: boolean;
        allowDots?: boolean;
        plainObjects?: boolean;
        allowPrototypes?: boolean;
        parameterLimit?: number;
        strictNullHandling?: boolean;
        ignoreQueryPrefix?: boolean;
        charset?: 'utf-8' | 'iso-8859-1';
        charsetSentinel?: boolean;
        interpretNumericEntities?: boolean;
    }

    // TODO: The value type here is a version of `unknown` which replicates with an acceptably lossy amount of accuracy.
    // When these types support TypeScript 3.0+, we can replace this with `unknown`.
    type UnknownFacade = {} | null | undefined;

    /** @deprecated - UnknownFacade is more clear about what's going on */
    type PoorMansUnknown = UnknownFacade

    interface ParsedQs { [key: string]: undefined | string | string[] | ParsedQs | ParsedQs[] }

    function stringify(obj: any, options?: IStringifyOptions): string;
    function parse(str: string, options?: IParseOptions & { decoder?: never }): ParsedQs;
    function parse(str: string, options?: IParseOptions): { [key: string]: UnknownFacade };
}

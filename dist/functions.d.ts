export declare function isMeepoTrue(val: any): boolean;
export declare function isTrueProperty(val: any): boolean;
export declare function isCheckedProperty(a: any, b: any): boolean;
/** @hidden */
export declare function isBoolean(val: any): val is boolean;
/** @hidden */
export declare function isString(val: any): val is string;
/** @hidden */
export declare function isNumber(val: any): val is number;
/** @hidden */
export declare function isFunction(val: any): val is Function;
/** @hidden */
export declare function isDefined(val: any): boolean;
/** @hidden */
export declare function isUndefined(val: any): val is undefined;
/** @hidden */
export declare function isPresent(val: any): val is any;
/** @hidden */
export declare function isBlank(val: any): val is null;
/** @hidden */
export declare function isObject(val: any): val is Object;
/** @hidden */
export declare const isArray: (arg: any) => arg is any[];
export declare const isFinite: (number: number) => boolean;
export declare function isNaN(value: any): boolean;
export declare function isWindow(el: any): boolean;
export declare function isDocument(el: any): boolean;

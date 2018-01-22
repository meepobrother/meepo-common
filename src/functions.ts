export function isMeepoTrue(val) {
    return isTrueProperty(val);
}

export function isTrueProperty(val: any): boolean {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
}

export function isCheckedProperty(a: any, b: any): boolean {
    if (a === undefined || a === null || a === '') {
        return (b === undefined || b === null || b === '');

    } else if (a === true || a === 'true') {
        return (b === true || b === 'true');

    } else if (a === false || a === 'false') {
        return (b === false || b === 'false');

    } else if (a === 0 || a === '0') {
        return (b === 0 || b === '0');
    }
    // not using strict comparison on purpose
    return (a == b); // tslint:disable-line
}


/** @hidden */
export function isBoolean(val: any): val is boolean { return typeof val === 'boolean'; }
/** @hidden */
export function isString(val: any): val is string { return typeof val === 'string'; }
/** @hidden */
export function isNumber(val: any): val is number { return typeof val === 'number'; }
/** @hidden */
export function isFunction(val: any): val is Function { return typeof val === 'function'; }
/** @hidden */
export function isDefined(val: any): boolean { return typeof val !== 'undefined'; }
/** @hidden */
export function isUndefined(val: any): val is undefined { return typeof val === 'undefined'; }
/** @hidden */
export function isPresent(val: any): val is any { return val !== undefined && val !== null; }
/** @hidden */
export function isBlank(val: any): val is null { return val === undefined || val === null; }
/** @hidden */
export function isObject(val: any): val is Object { return typeof val === 'object'; }
/** @hidden */
export const isArray = Array.isArray;
export const isFinite = Number.isFinite;

export function isNaN(value: any): boolean {
    return isNumber(value) && value !== +value;
}

export function isWindow(el) {
    return el !== null && el === el.window
}

export function isDocument(el) {
    return el.nodeType === 9
}



export { isDevMode } from '@angular/core';
import { Type } from '@angular/core';

import { Observable } from 'rxjs/Observable';

export function isPromise(obj: any): obj is Promise<any> {
    return !!obj && typeof obj.then === 'function';
}

export function isObservable(obj: any | Observable<any>): obj is Observable<any> {
    return !!obj && typeof obj.subscribe === 'function';
}

export function isType(v: any): v is Type<any> {
    return typeof v === 'function';
}

export function isComponentView(view: any): boolean {
    return !!view.parent && !!(view.parentNodeDef!.flags & 1 << 15);
}

export function isEmbeddedView(view: any): boolean {
    return !!view.parent && !(view.parentNodeDef!.flags & 1 << 15);
}

export function stringify(token: any): string {
    if (typeof token === 'string') {
        return token;
    }
    if (token instanceof Array) {
        return '[' + token.map(stringify).join(', ') + ']';
    }
    if (token == null) {
        return '' + token;
    }
    if (token.overriddenName) {
        return `${token.overriddenName}`;
    }
    if (token.name) {
        return `${token.name}`;
    }
    const res = token.toString();
    if (res == null) {
        return '' + res;
    }
    const newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
// 两个数字是否相等
// JS has NaN !== NaN
export function looseIdentical(a: any, b: any): boolean {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}

// When Symbol.iterator doesn't exist, retrieves the key used in es6-shim
import { global } from './global';
declare const Symbol: any;
let _symbolIterator: any = null;
export function getSymbolIterator(): string | symbol {
    if (!_symbolIterator) {
        const Symbol = global['Symbol'];
        if (Symbol && Symbol.iterator) {
            _symbolIterator = Symbol.iterator;
        } else {
            // es6-shim specific logic
            const keys = Object.getOwnPropertyNames(Map.prototype);
            for (let i = 0; i < keys.length; ++i) {
                const key = keys[i];
                if (key !== 'entries' && key !== 'size' &&
                    (Map as any).prototype[key] === Map.prototype['entries']) {
                    _symbolIterator = key;
                }
            }
        }
    }
    return _symbolIterator;
}



export function isListLikeIterable(obj: any): boolean {
    if (!isJsObject(obj)) return false;
    return Array.isArray(obj) || (!(obj instanceof Map) && getSymbolIterator() in obj);
}

export function areIterablesEqual(
    a: any,
    b: any,
    comparator: (a: any, b: any) => boolean
): boolean {
    const iterator1 = a[getSymbolIterator()]();
    const iterator2 = b[getSymbolIterator()]();
    while (true) {
        const item1 = iterator1.next();
        const item2 = iterator2.next();
        if (item1.done && item2.done) return true;
        if (item1.done || item2.done) return false;
        if (!comparator(item1.value, item2.value)) return false;
    }
}

export function iterateListLike(obj: any, fn: (p: any) => any) {
    if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    } else {
        const iterator = obj[getSymbolIterator()]();
        let item: any;
        while (!((item = iterator.next()).done)) {
            fn(item.value);
        }
    }
}

export function isJsObject(o: any): boolean {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}


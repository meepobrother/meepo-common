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

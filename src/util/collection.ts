/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import { NgModuleFactory } from '@angular/core';
import { isObservable, isPromise } from '../functions';
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import { of } from 'rxjs/observable/of';
import { concatAll } from 'rxjs/operator/concatAll';
import { every } from 'rxjs/operator/every';
import * as l from 'rxjs/operator/last';
import { map } from 'rxjs/operator/map';
import { mergeAll } from 'rxjs/operator/mergeAll';

export function shallowEqualArrays(a: any[], b: any[]): boolean {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; ++i) {
        if (!shallowEqual(a[i], b[i])) return false;
    }
    return true;
}

export function shallowEqual(a: { [x: string]: any }, b: { [x: string]: any }): boolean {
    const k1 = Object.keys(a);
    const k2 = Object.keys(b);
    if (k1.length != k2.length) {
        return false;
    }
    let key: string;
    for (let i = 0; i < k1.length; i++) {
        key = k1[i];
        if (a[key] !== b[key]) {
            return false;
        }
    }
    return true;
}

/**
 * Flattens single-level nested arrays.
 */
export function flatten<T>(arr: T[][]): T[] {
    return Array.prototype.concat.apply([], arr);
}

/**
 * Return the last element of an array.
 */
export function last<T>(a: T[]): T | null {
    return a.length > 0 ? a[a.length - 1] : null;
}

/**
 * Verifys all booleans in an array are `true`.
 */
export function and(bools: boolean[]): boolean {
    return !bools.some(v => !v);
}

export function forEach<K, V>(
    map: { [key: string]: V },
    callback: (v: V, k: string) => void
): void {
    for (const prop in map) {
        if (map.hasOwnProperty(prop)) {
            callback(map[prop], prop);
        }
    }
}

/**
 * ANDs Observables by merging all input observables, reducing to an Observable verifying all
 * input Observables return `true`.
 */
export function andObservables(
    observables: Observable<Observable<any>>
): Observable<boolean> {
    const merged$ = mergeAll.call(observables);
    return every.call(merged$, (result: any) => result === true);
}

export function wrapIntoObservable<T>(
    value: T | NgModuleFactory<T> | Promise<T> | Observable<T>
): Observable<T> {
    if (isObservable(value)) {
        return value;
    }
    if (isPromise(value)) {
        return fromPromise(Promise.resolve(value));
    }
    return of(value as T);
}

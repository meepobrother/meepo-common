import { Directive, Input, KeyValueDiffers, NgModule, TemplateRef, ViewContainerRef } from '@angular/core';















import 'rxjs/add/operator/debounce';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/first';
import 'rxjs/add/operator/ignoreElements';
import 'rxjs/add/operator/last';
import 'rxjs/add/operator/sample';
import 'rxjs/add/operator/single';
import 'rxjs/add/operator/skip';
import 'rxjs/add/operator/skipUntil';
import 'rxjs/add/operator/skipWhile';
import 'rxjs/add/operator/take';
import 'rxjs/add/operator/takeUntil';
import 'rxjs/add/operator/takeWhile';
import 'rxjs/add/operator/takeLast';
import 'rxjs/add/operator/startWith';
import 'rxjs/add/operator/throttle';
import 'rxjs/add/operator/throttleTime';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/reduce';
import 'rxjs/add/operator/scan';
import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/combineAll';
import 'rxjs/add/operator/withLatestFrom';
import 'rxjs/add/operator/bufferCount';
import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/operator/every';
import 'rxjs/add/operator/defaultIfEmpty';
import 'rxjs/add/operator/do';




/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class NgEachOfContext {
    /**
     * @param {?} $implicit
     * @param {?} ngForOf
     * @param {?} key
     */
    constructor($implicit, ngForOf, key) {
        this.$implicit = $implicit;
        this.ngForOf = ngForOf;
        this.key = key;
    }
}
class NgEachOf {
    /**
     * @param {?} _viewContainer
     * @param {?} _template
     * @param {?} _differs
     */
    constructor(_viewContainer, _template, _differs) {
        this._viewContainer = _viewContainer;
        this._template = _template;
        this._differs = _differs;
        this._differ = null;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set ngForTemplate(value) {
        if (value) {
            this._template = value;
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if ('ngEachOf' in changes) {
            const /** @type {?} */ value = changes['ngEachOf'].currentValue;
            if (!this._differ && value) {
                this._differ = this._differs.find(value).create();
            }
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._differ) {
            const /** @type {?} */ changes = this._differ.diff(this.ngEachOf);
            if (changes)
                this._applyChanges(changes);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    _applyChanges(changes) {
        const /** @type {?} */ insertTuples = [];
        changes.forEachItem((item) => {
            if (item.previousValue == null) {
                const /** @type {?} */ view = this._viewContainer.createEmbeddedView(this._template, new NgEachOfContext(item.currentValue, this.ngEachOf, item.key), parseInt(item.key, 16));
                const /** @type {?} */ tuple = new RecordViewTuple(item, view, parseInt(item.key, 16));
                insertTuples.push(tuple);
            }
            else if (item.currentValue == null) {
                this._viewContainer.remove(parseInt(item.key, 16));
            }
            else {
                const /** @type {?} */ view = /** @type {?} */ ((this._viewContainer.get(parseInt(item.key, 16))));
                this._viewContainer.move(view, parseInt(item.key, 16));
                const /** @type {?} */ tuple = new RecordViewTuple(item.currentValue, /** @type {?} */ (view), parseInt(item.key, 16));
                insertTuples.push(tuple);
            }
        });
    }
}
NgEachOf.decorators = [
    { type: Directive, args: [{ selector: '[ngEach][ngEachOf]' },] },
];
/** @nocollapse */
NgEachOf.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: TemplateRef, },
    { type: KeyValueDiffers, },
];
NgEachOf.propDecorators = {
    "ngEachOf": [{ type: Input },],
    "ngForTemplate": [{ type: Input },],
};
class RecordViewTuple {
    /**
     * @param {?} record
     * @param {?} view
     * @param {?} index
     */
    constructor(record, view, index) {
        this.record = record;
        this.view = view;
        this.index = index;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MeepoCommonModule {
}
MeepoCommonModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    NgEachOf
                ],
                declarations: [
                    NgEachOf
                ]
            },] },
];
/** @nocollapse */
MeepoCommonModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @param {?} val
 * @return {?}
 */
function isMeepoTrue(val) {
    return isTrueProperty(val);
}
/**
 * @param {?} val
 * @return {?}
 */
function isTrueProperty(val) {
    if (typeof val === 'string') {
        val = val.toLowerCase().trim();
        return (val === 'true' || val === 'on' || val === '');
    }
    return !!val;
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function isCheckedProperty(a, b) {
    if (a === undefined || a === null || a === '') {
        return (b === undefined || b === null || b === '');
    }
    else if (a === true || a === 'true') {
        return (b === true || b === 'true');
    }
    else if (a === false || a === 'false') {
        return (b === false || b === 'false');
    }
    else if (a === 0 || a === '0') {
        return (b === 0 || b === '0');
    }
    // not using strict comparison on purpose
    return (a == b); // tslint:disable-line
}
/**
 * @hidden
 * @param {?} val
 * @return {?}
 */
function isBoolean(val) { return typeof val === 'boolean'; }
/**
 * @hidden
 * @param {?} val
 * @return {?}
 */
function isString(val) { return typeof val === 'string'; }
/**
 * @hidden
 * @param {?} val
 * @return {?}
 */
function isNumber(val) { return typeof val === 'number'; }
/**
 * @hidden
 * @param {?} val
 * @return {?}
 */
function isFunction(val) { return typeof val === 'function'; }
/**
 * @hidden
 * @param {?} val
 * @return {?}
 */
function isDefined(val) { return typeof val !== 'undefined'; }
/**
 * @hidden
 * @param {?} val
 * @return {?}
 */
function isUndefined(val) { return typeof val === 'undefined'; }
/**
 * @hidden
 * @param {?} val
 * @return {?}
 */
function isPresent(val) { return val !== undefined && val !== null; }
/**
 * @hidden
 * @param {?} val
 * @return {?}
 */
function isBlank(val) { return val === undefined || val === null; }
/**
 * @hidden
 * @param {?} val
 * @return {?}
 */
function isObject(val) { return typeof val === 'object'; }
/**
 * @hidden
 */
const isArray = Array.isArray;
const isFinite = Number.isFinite;
/**
 * @param {?} value
 * @return {?}
 */
function isNaN(value) {
    return isNumber(value) && value !== +value;
}
/**
 * @param {?} el
 * @return {?}
 */
function isWindow(el) {
    return el !== null && el === el.window;
}
/**
 * @param {?} el
 * @return {?}
 */
function isDocument(el) {
    return el.nodeType === 9;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { MeepoCommonModule, isMeepoTrue, isTrueProperty, isCheckedProperty, isBoolean, isString, isNumber, isFunction, isDefined, isUndefined, isPresent, isBlank, isObject, isArray, isFinite, isNaN, isWindow, isDocument, NgEachOf as ɵb, NgEachOfContext as ɵa };
export { of } from 'rxjs/observable/of';
export { empty } from 'rxjs/observable/empty';
export { from } from 'rxjs/observable/from';
export { interval } from 'rxjs/observable/interval';
export { timer } from 'rxjs/observable/timer';
export { fromEvent } from 'rxjs/observable/fromEvent';
export { fromPromise } from 'rxjs/observable/fromPromise';
export { range } from 'rxjs/observable/range';
export { fromEventPattern } from 'rxjs/observable/fromEventPattern';
export { combineLatest } from 'rxjs/observable/combineLatest';
export { concat } from 'rxjs/observable/concat';
export { forkJoin } from 'rxjs/observable/forkJoin';
export { merge } from 'rxjs/observable/merge';
export { race } from 'rxjs/observable/race';
export { zip } from 'rxjs/observable/zip';
export { Scheduler } from 'rxjs/Scheduler';
export { Subject } from 'rxjs/Subject';
export { Observable } from 'rxjs/Observable';
//# sourceMappingURL=meepo-common.js.map

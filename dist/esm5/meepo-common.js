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
var NgEachOfContext = /** @class */ (function () {
    /**
     * @param {?} $implicit
     * @param {?} ngForOf
     * @param {?} key
     */
    function NgEachOfContext($implicit, ngForOf, key) {
        this.$implicit = $implicit;
        this.ngForOf = ngForOf;
        this.key = key;
    }
    return NgEachOfContext;
}());
var NgEachOf = /** @class */ (function () {
    /**
     * @param {?} _viewContainer
     * @param {?} _template
     * @param {?} _differs
     */
    function NgEachOf(_viewContainer, _template, _differs) {
        this._viewContainer = _viewContainer;
        this._template = _template;
        this._differs = _differs;
        this._differ = null;
    }
    Object.defineProperty(NgEachOf.prototype, "ngForTemplate", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this._template = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} changes
     * @return {?}
     */
    NgEachOf.prototype.ngOnChanges = function (changes) {
        if ('ngEachOf' in changes) {
            var /** @type {?} */ value = changes['ngEachOf'].currentValue;
            if (!this._differ && value) {
                this._differ = this._differs.find(value).create();
            }
        }
    };
    /**
     * @return {?}
     */
    NgEachOf.prototype.ngDoCheck = function () {
        if (this._differ) {
            var /** @type {?} */ changes = this._differ.diff(this.ngEachOf);
            if (changes)
                this._applyChanges(changes);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NgEachOf.prototype._applyChanges = function (changes) {
        var _this = this;
        var /** @type {?} */ insertTuples = [];
        changes.forEachItem(function (item) {
            if (item.previousValue == null) {
                var /** @type {?} */ view = _this._viewContainer.createEmbeddedView(_this._template, new NgEachOfContext(item.currentValue, _this.ngEachOf, item.key), parseInt(item.key, 16));
                var /** @type {?} */ tuple = new RecordViewTuple(item, view, parseInt(item.key, 16));
                insertTuples.push(tuple);
            }
            else if (item.currentValue == null) {
                _this._viewContainer.remove(parseInt(item.key, 16));
            }
            else {
                var /** @type {?} */ view = ((_this._viewContainer.get(parseInt(item.key, 16))));
                _this._viewContainer.move(view, parseInt(item.key, 16));
                var /** @type {?} */ tuple = new RecordViewTuple(item.currentValue, /** @type {?} */ (view), parseInt(item.key, 16));
                insertTuples.push(tuple);
            }
        });
    };
    return NgEachOf;
}());
NgEachOf.decorators = [
    { type: Directive, args: [{ selector: '[ngEach][ngEachOf]' },] },
];
/** @nocollapse */
NgEachOf.ctorParameters = function () { return [
    { type: ViewContainerRef, },
    { type: TemplateRef, },
    { type: KeyValueDiffers, },
]; };
NgEachOf.propDecorators = {
    "ngEachOf": [{ type: Input },],
    "ngForTemplate": [{ type: Input },],
};
var RecordViewTuple = /** @class */ (function () {
    /**
     * @param {?} record
     * @param {?} view
     * @param {?} index
     */
    function RecordViewTuple(record, view, index) {
        this.record = record;
        this.view = view;
        this.index = index;
    }
    return RecordViewTuple;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MeepoCommonModule = /** @class */ (function () {
    function MeepoCommonModule() {
    }
    return MeepoCommonModule;
}());
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
MeepoCommonModule.ctorParameters = function () { return []; };
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
var isArray = Array.isArray;
var isFinite = Number.isFinite;
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

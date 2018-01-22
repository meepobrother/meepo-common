(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/add/operator/debounce'), require('rxjs/add/operator/debounceTime'), require('rxjs/add/operator/distinctUntilChanged'), require('rxjs/add/operator/filter'), require('rxjs/add/operator/first'), require('rxjs/add/operator/ignoreElements'), require('rxjs/add/operator/last'), require('rxjs/add/operator/sample'), require('rxjs/add/operator/single'), require('rxjs/add/operator/skip'), require('rxjs/add/operator/skipUntil'), require('rxjs/add/operator/skipWhile'), require('rxjs/add/operator/take'), require('rxjs/add/operator/takeUntil'), require('rxjs/add/operator/takeWhile'), require('rxjs/add/operator/takeLast'), require('rxjs/add/operator/startWith'), require('rxjs/add/operator/throttle'), require('rxjs/add/operator/throttleTime'), require('rxjs/add/operator/map'), require('rxjs/add/operator/reduce'), require('rxjs/add/operator/scan'), require('rxjs/add/operator/concatMap'), require('rxjs/add/operator/switchMap'), require('rxjs/add/operator/combineAll'), require('rxjs/add/operator/withLatestFrom'), require('rxjs/add/operator/bufferCount'), require('rxjs/add/operator/switchMapTo'), require('rxjs/add/operator/every'), require('rxjs/add/operator/defaultIfEmpty'), require('rxjs/add/operator/do'), require('rxjs/observable/of'), require('rxjs/observable/empty'), require('rxjs/observable/from'), require('rxjs/observable/interval'), require('rxjs/observable/timer'), require('rxjs/observable/fromEvent'), require('rxjs/observable/fromPromise'), require('rxjs/observable/range'), require('rxjs/observable/fromEventPattern'), require('rxjs/observable/combineLatest'), require('rxjs/observable/concat'), require('rxjs/observable/forkJoin'), require('rxjs/observable/merge'), require('rxjs/observable/race'), require('rxjs/observable/zip'), require('rxjs/Scheduler'), require('rxjs/Subject'), require('rxjs/Observable')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/add/operator/debounce', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/filter', 'rxjs/add/operator/first', 'rxjs/add/operator/ignoreElements', 'rxjs/add/operator/last', 'rxjs/add/operator/sample', 'rxjs/add/operator/single', 'rxjs/add/operator/skip', 'rxjs/add/operator/skipUntil', 'rxjs/add/operator/skipWhile', 'rxjs/add/operator/take', 'rxjs/add/operator/takeUntil', 'rxjs/add/operator/takeWhile', 'rxjs/add/operator/takeLast', 'rxjs/add/operator/startWith', 'rxjs/add/operator/throttle', 'rxjs/add/operator/throttleTime', 'rxjs/add/operator/map', 'rxjs/add/operator/reduce', 'rxjs/add/operator/scan', 'rxjs/add/operator/concatMap', 'rxjs/add/operator/switchMap', 'rxjs/add/operator/combineAll', 'rxjs/add/operator/withLatestFrom', 'rxjs/add/operator/bufferCount', 'rxjs/add/operator/switchMapTo', 'rxjs/add/operator/every', 'rxjs/add/operator/defaultIfEmpty', 'rxjs/add/operator/do', 'rxjs/observable/of', 'rxjs/observable/empty', 'rxjs/observable/from', 'rxjs/observable/interval', 'rxjs/observable/timer', 'rxjs/observable/fromEvent', 'rxjs/observable/fromPromise', 'rxjs/observable/range', 'rxjs/observable/fromEventPattern', 'rxjs/observable/combineLatest', 'rxjs/observable/concat', 'rxjs/observable/forkJoin', 'rxjs/observable/merge', 'rxjs/observable/race', 'rxjs/observable/zip', 'rxjs/Scheduler', 'rxjs/Subject', 'rxjs/Observable'], factory) :
	(factory((global['meepo-common'] = {}),global.ng.core,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx,global.Rx,global.Rx));
}(this, (function (exports,core,debounce,debounceTime,distinctUntilChanged,filter,first,ignoreElements,last,sample,single,skip,skipUntil,skipWhile,take,takeUntil,takeWhile,takeLast,startWith,throttle,throttleTime,map,reduce,scan,concatMap,switchMap,combineAll,withLatestFrom,bufferCount,switchMapTo,every,defaultIfEmpty,_do,of,empty,from,interval,timer,fromEvent,fromPromise,range,fromEventPattern,combineLatest,concat,forkJoin,merge,race,zip,Scheduler,Subject,Observable) { 'use strict';

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
    { type: core.Directive, args: [{ selector: '[ngEach][ngEachOf]' },] },
];
/** @nocollapse */
NgEachOf.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
    { type: core.TemplateRef, },
    { type: core.KeyValueDiffers, },
]; };
NgEachOf.propDecorators = {
    "ngEachOf": [{ type: core.Input },],
    "ngForTemplate": [{ type: core.Input },],
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
    { type: core.NgModule, args: [{
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

exports.MeepoCommonModule = MeepoCommonModule;
exports.ɵb = NgEachOf;
exports.ɵa = NgEachOfContext;
exports.of = of.of;
exports.empty = empty.empty;
exports.from = from.from;
exports.interval = interval.interval;
exports.timer = timer.timer;
exports.fromEvent = fromEvent.fromEvent;
exports.fromPromise = fromPromise.fromPromise;
exports.range = range.range;
exports.fromEventPattern = fromEventPattern.fromEventPattern;
exports.combineLatest = combineLatest.combineLatest;
exports.concat = concat.concat;
exports.forkJoin = forkJoin.forkJoin;
exports.merge = merge.merge;
exports.race = race.race;
exports.zip = zip.zip;
exports.Scheduler = Scheduler.Scheduler;
exports.Subject = Subject.Subject;
exports.Observable = Observable.Observable;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=meepo-common.umd.js.map

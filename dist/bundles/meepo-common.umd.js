(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('rxjs/add/operator/debounce'), require('rxjs/add/operator/debounceTime'), require('rxjs/add/operator/distinctUntilChanged'), require('rxjs/add/operator/filter'), require('rxjs/add/operator/first'), require('rxjs/add/operator/ignoreElements'), require('rxjs/add/operator/last'), require('rxjs/add/operator/sample'), require('rxjs/add/operator/single'), require('rxjs/add/operator/skip'), require('rxjs/add/operator/skipUntil'), require('rxjs/add/operator/skipWhile'), require('rxjs/add/operator/take'), require('rxjs/add/operator/takeUntil'), require('rxjs/add/operator/takeWhile'), require('rxjs/add/operator/takeLast'), require('rxjs/add/operator/startWith'), require('rxjs/add/operator/throttle'), require('rxjs/add/operator/throttleTime'), require('rxjs/add/operator/map'), require('rxjs/add/operator/reduce'), require('rxjs/add/operator/scan'), require('rxjs/add/operator/concatMap'), require('rxjs/add/operator/switchMap'), require('rxjs/add/operator/combineAll'), require('rxjs/add/operator/withLatestFrom'), require('rxjs/add/operator/bufferCount'), require('rxjs/add/operator/switchMapTo'), require('rxjs/add/operator/every'), require('rxjs/add/operator/defaultIfEmpty'), require('rxjs/add/operator/do'), require('rxjs/observable/of'), require('rxjs/observable/empty'), require('rxjs/observable/from'), require('rxjs/observable/interval'), require('rxjs/observable/timer'), require('rxjs/observable/fromEvent'), require('rxjs/observable/fromPromise'), require('rxjs/observable/range'), require('rxjs/observable/fromEventPattern'), require('rxjs/observable/combineLatest'), require('rxjs/observable/concat'), require('rxjs/observable/forkJoin'), require('rxjs/observable/merge'), require('rxjs/observable/race'), require('rxjs/observable/zip'), require('rxjs/Scheduler'), require('rxjs/Subject'), require('rxjs/Observable')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', 'rxjs/add/operator/debounce', 'rxjs/add/operator/debounceTime', 'rxjs/add/operator/distinctUntilChanged', 'rxjs/add/operator/filter', 'rxjs/add/operator/first', 'rxjs/add/operator/ignoreElements', 'rxjs/add/operator/last', 'rxjs/add/operator/sample', 'rxjs/add/operator/single', 'rxjs/add/operator/skip', 'rxjs/add/operator/skipUntil', 'rxjs/add/operator/skipWhile', 'rxjs/add/operator/take', 'rxjs/add/operator/takeUntil', 'rxjs/add/operator/takeWhile', 'rxjs/add/operator/takeLast', 'rxjs/add/operator/startWith', 'rxjs/add/operator/throttle', 'rxjs/add/operator/throttleTime', 'rxjs/add/operator/map', 'rxjs/add/operator/reduce', 'rxjs/add/operator/scan', 'rxjs/add/operator/concatMap', 'rxjs/add/operator/switchMap', 'rxjs/add/operator/combineAll', 'rxjs/add/operator/withLatestFrom', 'rxjs/add/operator/bufferCount', 'rxjs/add/operator/switchMapTo', 'rxjs/add/operator/every', 'rxjs/add/operator/defaultIfEmpty', 'rxjs/add/operator/do', 'rxjs/observable/of', 'rxjs/observable/empty', 'rxjs/observable/from', 'rxjs/observable/interval', 'rxjs/observable/timer', 'rxjs/observable/fromEvent', 'rxjs/observable/fromPromise', 'rxjs/observable/range', 'rxjs/observable/fromEventPattern', 'rxjs/observable/combineLatest', 'rxjs/observable/concat', 'rxjs/observable/forkJoin', 'rxjs/observable/merge', 'rxjs/observable/race', 'rxjs/observable/zip', 'rxjs/Scheduler', 'rxjs/Subject', 'rxjs/Observable'], factory) :
	(factory((global['meepo-common'] = {}),global.ng.core,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable.prototype,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx.Observable,global.Rx,global.Rx,global.Rx));
}(this, (function (exports,core,debounce,debounceTime,distinctUntilChanged,filter,first,ignoreElements,last,sample,single,skip,skipUntil,skipWhile,take,takeUntil,takeWhile,takeLast,startWith,throttle,throttleTime,map,reduce,scan,concatMap,switchMap,combineAll,withLatestFrom,bufferCount,switchMapTo,every,defaultIfEmpty,_do,of,empty,from,interval,timer,fromEvent,fromPromise,range,fromEventPattern,combineLatest,concat,forkJoin,merge,race,zip,Scheduler,Subject,Observable) { 'use strict';

var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
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
var NgStartDirective = /** @class */ (function () {
    function NgStartDirective() {
        this.ngStartChange = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    NgStartDirective.prototype.ngOnInit = function () {
        if (this.ngStart) {
            this.ngStartChange.emit(this.ngStart);
        }
    };
    return NgStartDirective;
}());
NgStartDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[ngStart]'
            },] },
];
/** @nocollapse */
NgStartDirective.ctorParameters = function () { return []; };
NgStartDirective.propDecorators = {
    "ngStart": [{ type: core.Input },],
    "ngStartChange": [{ type: core.Output },],
};
var NgEndDirective = /** @class */ (function () {
    function NgEndDirective() {
        this.ngEndChange = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    NgEndDirective.prototype.ngAfterViewInit = function () {
        if (this.ngEnd) {
            this.ngEndChange.emit(this.ngEnd);
        }
    };
    return NgEndDirective;
}());
NgEndDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[ngEnd]'
            },] },
];
/** @nocollapse */
NgEndDirective.ctorParameters = function () { return []; };
NgEndDirective.propDecorators = {
    "ngEnd": [{ type: core.Input },],
    "ngEndChange": [{ type: core.Output },],
};
var NgTrueDirective = /** @class */ (function () {
    function NgTrueDirective() {
        this.ngTrueChange = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    NgTrueDirective.prototype.ngOnInit = function () {
        if (this.ngTrue) {
            this.ngTrueChange.emit(true);
        }
    };
    /**
     * @return {?}
     */
    NgTrueDirective.prototype.ngAfterViewInit = function () {
        if (this.ngTrue) {
            this.ngTrueChange.emit(true);
        }
    };
    return NgTrueDirective;
}());
NgTrueDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[ngTrue]'
            },] },
];
/** @nocollapse */
NgTrueDirective.ctorParameters = function () { return []; };
NgTrueDirective.propDecorators = {
    "ngTrue": [{ type: core.Input },],
    "ngTrueChange": [{ type: core.Output },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ClassService = /** @class */ (function () {
    /**
     * @param {?} _iterableDiffers
     * @param {?} _keyValueDiffers
     * @param {?} _ngEl
     * @param {?} _renderer
     */
    function ClassService(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
        this._iterableDiffers = _iterableDiffers;
        this._keyValueDiffers = _keyValueDiffers;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._initialClasses = [];
    }
    Object.defineProperty(ClassService.prototype, "klass", {
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this._applyInitialClasses(true);
            this._initialClasses = typeof v === 'string' ? v.split(/\s+/) : [];
            this._applyInitialClasses(false);
            this._applyClasses(this._rawClass, false);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ClassService.prototype, "ngClass", {
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this._cleanupClasses(this._rawClass);
            this._iterableDiffer = null;
            this._keyValueDiffer = null;
            this._rawClass = typeof v === 'string' ? v.split(/\s+/) : v;
            if (this._rawClass) {
                if (core.ɵisListLikeIterable(this._rawClass)) {
                    this._iterableDiffer = this._iterableDiffers.find(this._rawClass).create();
                    this.ngDoCheck();
                }
                else {
                    this._keyValueDiffer = this._keyValueDiffers.find(this._rawClass).create();
                    this.ngDoCheck();
                }
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ClassService.prototype.ngDoCheck = function () {
        if (this._iterableDiffer) {
            var /** @type {?} */ iterableChanges = this._iterableDiffer.diff(/** @type {?} */ (this._rawClass));
            if (iterableChanges) {
                this._applyIterableChanges(iterableChanges);
            }
        }
        else if (this._keyValueDiffer) {
            var /** @type {?} */ keyValueChanges = this._keyValueDiffer.diff(/** @type {?} */ (this._rawClass));
            if (keyValueChanges) {
                this._applyKeyValueChanges(keyValueChanges);
            }
        }
    };
    /**
     * @param {?} rawClassVal
     * @return {?}
     */
    ClassService.prototype._cleanupClasses = function (rawClassVal) {
        this._applyClasses(rawClassVal, true);
        this._applyInitialClasses(false);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ClassService.prototype._applyKeyValueChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
        changes.forEachChangedItem(function (record) { return _this._toggleClass(record.key, record.currentValue); });
        changes.forEachRemovedItem(function (record) {
            if (record.previousValue) {
                _this._toggleClass(record.key, false);
            }
        });
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    ClassService.prototype._applyIterableChanges = function (changes) {
        var _this = this;
        changes.forEachAddedItem(function (record) {
            if (typeof record.item === 'string') {
                _this._toggleClass(record.item, true);
            }
            else {
                throw new Error("NgClass AntdClassService");
            }
        });
        changes.forEachRemovedItem(function (record) { return _this._toggleClass(record.item, false); });
    };
    /**
     * @param {?} isCleanup
     * @return {?}
     */
    ClassService.prototype._applyInitialClasses = function (isCleanup) {
        var _this = this;
        this._initialClasses.forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
    };
    /**
     * @param {?} rawClassVal
     * @param {?} isCleanup
     * @return {?}
     */
    ClassService.prototype._applyClasses = function (rawClassVal, isCleanup) {
        var _this = this;
        if (rawClassVal) {
            if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                ((rawClassVal)).forEach(function (klass) { return _this._toggleClass(klass, !isCleanup); });
            }
            else {
                Object.keys(rawClassVal).forEach(function (klass) {
                    if (rawClassVal[klass] != null)
                        _this._toggleClass(klass, !isCleanup);
                });
            }
        }
    };
    /**
     * @param {?} klass
     * @param {?} enabled
     * @return {?}
     */
    ClassService.prototype._toggleClass = function (klass, enabled) {
        var _this = this;
        klass = klass.trim();
        if (klass) {
            klass.split(/\s+/g).forEach(function (klass) {
                if (enabled) {
                    _this._renderer.addClass(_this._ngEl.nativeElement, klass);
                }
                else {
                    _this._renderer.removeClass(_this._ngEl.nativeElement, klass);
                }
            });
        }
    };
    return ClassService;
}());
ClassService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
ClassService.ctorParameters = function () { return [
    { type: core.IterableDiffers, },
    { type: core.KeyValueDiffers, },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentOutletService = /** @class */ (function () {
    /**
     * @param {?} _viewContainerRef
     */
    function ComponentOutletService(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this._componentRef = null;
        this._moduleRef = null;
    }
    /**
     * @param {?} ngComponentOutlet
     * @param {?=} ngComponentOutletInjector
     * @param {?=} ngComponentOutletContent
     * @param {?=} ngComponentOutletNgModuleFactory
     * @return {?}
     */
    ComponentOutletService.prototype.create = function (ngComponentOutlet, ngComponentOutletInjector, ngComponentOutletContent, ngComponentOutletNgModuleFactory) {
        this._viewContainerRef.clear();
        this._componentRef = null;
        if (ngComponentOutlet) {
            var /** @type {?} */ elInjector = ngComponentOutletInjector || this._viewContainerRef.parentInjector;
            if (this._moduleRef)
                this._moduleRef.destroy();
            if (ngComponentOutletNgModuleFactory) {
                var /** @type {?} */ parentModule = elInjector.get(core.NgModuleRef);
                this._moduleRef = ngComponentOutletNgModuleFactory.create(parentModule.injector);
            }
            else {
                this._moduleRef = null;
            }
            var /** @type {?} */ componentFactoryResolver = this._moduleRef ? this._moduleRef.componentFactoryResolver : elInjector.get(core.ComponentFactoryResolver);
            var /** @type {?} */ componentFactory = componentFactoryResolver.resolveComponentFactory(ngComponentOutlet);
            this._componentRef = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, elInjector, ngComponentOutletContent);
            return this._componentRef;
        }
        return null;
    };
    /**
     * @return {?}
     */
    ComponentOutletService.prototype.update = function () { };
    /**
     * @return {?}
     */
    ComponentOutletService.prototype.destroy = function () {
        if (this._moduleRef)
            this._moduleRef.destroy();
    };
    return ComponentOutletService;
}());
ComponentOutletService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
ComponentOutletService.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TemplateOutletService = /** @class */ (function () {
    /**
     * @param {?} _viewContainerRef
     */
    function TemplateOutletService(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @param {?} tpl
     * @param {?} context
     * @return {?}
     */
    TemplateOutletService.prototype.create = function (tpl, context) {
        if (this._viewRef) {
            this.destroy();
        }
        if (tpl) {
            this._viewRef = this._viewContainerRef.createEmbeddedView(tpl, context);
            return this._viewRef;
        }
        return null;
    };
    /**
     * @param {?} ctx
     * @return {?}
     */
    TemplateOutletService.prototype.update = function (ctx) {
        try {
            for (var _a = __values(Object.keys(ctx)), _b = _a.next(); !_b.done; _b = _a.next()) {
                var propName = _b.value;
                ((this._viewRef.context))[propName] = ((ctx))[propName];
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
            }
            finally { if (e_1) throw e_1.error; }
        }
        var e_1, _c;
    };
    /**
     * @return {?}
     */
    TemplateOutletService.prototype.destroy = function () {
        var /** @type {?} */ index = this._viewContainerRef.indexOf(this._viewRef);
        if (index >= 0) {
            this._viewContainerRef.remove(index);
        }
    };
    return TemplateOutletService;
}());
TemplateOutletService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
TemplateOutletService.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var HelperService = /** @class */ (function () {
    /**
     * @param {?} _viewContainerRef
     */
    function HelperService(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this._templateCreator = new TemplateOutletService(_viewContainerRef);
        this._componentCreator = new ComponentOutletService(_viewContainerRef);
    }
    /**
     * @param {?} tpl
     * @param {?=} context
     * @return {?}
     */
    HelperService.prototype.createTemplate = function (tpl, context) {
        this._templateCreator.create(tpl, context);
    };
    /**
     * @param {?} component
     * @param {?=} injector
     * @param {?=} content
     * @param {?=} ngModel
     * @return {?}
     */
    HelperService.prototype.createComponent = function (component, injector, content, ngModel) {
        this._componentCreator.create(component, injector, content, ngModel);
    };
    /**
     * @return {?}
     */
    HelperService.prototype.destory = function () {
        this._templateCreator.destroy();
        this._componentCreator.destroy();
    };
    return HelperService;
}());
HelperService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
HelperService.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
/**
 * @record
 */
var HelpersService = /** @class */ (function () {
    /**
     * @param {?} _viewContainerRef
     */
    function HelpersService(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this.components = [];
        this.templates = [];
    }
    /**
     * @param {?} component
     * @param {?=} injector
     * @param {?=} content
     * @param {?=} ngModel
     * @return {?}
     */
    HelpersService.prototype.addComponent = function (component, injector, content, ngModel) {
        var /** @type {?} */ helper = new HelperService(this._viewContainerRef);
        helper.createComponent(component, injector, content, ngModel);
        this.components.push(helper);
        return helper;
    };
    /**
     * @param {?} tpl
     * @param {?=} context
     * @return {?}
     */
    HelpersService.prototype.addTemplate = function (tpl, context) {
        var /** @type {?} */ helper = new HelperService(this._viewContainerRef);
        helper.createTemplate(tpl, context);
        this.templates.push(helper);
        return helper;
    };
    /**
     * @param {?=} components
     * @return {?}
     */
    HelpersService.prototype.addComponents = function (components) {
        var _this = this;
        if (components === void 0) { components = []; }
        components.map(function (res) {
            _this.addComponent(res.component, res.injector, res.content, res.ngModel);
        });
    };
    /**
     * @param {?=} tpls
     * @return {?}
     */
    HelpersService.prototype.addTemplates = function (tpls) {
        var _this = this;
        if (tpls === void 0) { tpls = []; }
        tpls.map(function (res) {
            _this.addTemplate(res.tpl, res.context);
        });
    };
    return HelpersService;
}());
HelpersService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
HelpersService.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StyleService = /** @class */ (function () {
    /**
     * @param {?} _differs
     * @param {?} _ngEl
     * @param {?} _renderer
     */
    function StyleService(_differs, _ngEl, _renderer) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
    }
    Object.defineProperty(StyleService.prototype, "ngStyle", {
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this._ngStyle = v;
            if (!this._differ && v) {
                this._differ = this._differs.find(v).create();
                this.ngDoCheck();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    StyleService.prototype.ngDoCheck = function () {
        if (this._differ) {
            var /** @type {?} */ changes = this._differ.diff(this._ngStyle);
            if (changes) {
                this._applyChanges(changes);
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    StyleService.prototype._applyChanges = function (changes) {
        var _this = this;
        changes.forEachRemovedItem(function (record) { return _this._setStyle(record.key, null); });
        changes.forEachAddedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
        changes.forEachChangedItem(function (record) { return _this._setStyle(record.key, record.currentValue); });
    };
    /**
     * @param {?} nameAndUnit
     * @param {?} value
     * @return {?}
     */
    StyleService.prototype._setStyle = function (nameAndUnit, value) {
        var _a = __read(nameAndUnit.split('.'), 2), name = _a[0], unit = _a[1];
        value = value != null && unit ? "" + value + unit : value;
        this._renderer.setStyle(this._ngEl.nativeElement, name, /** @type {?} */ (value));
    };
    return StyleService;
}());
StyleService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
StyleService.ctorParameters = function () { return [
    { type: core.KeyValueDiffers, },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
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
                    NgEachOf,
                    NgStartDirective,
                    NgEndDirective,
                    NgTrueDirective
                ],
                declarations: [
                    NgEachOf,
                    NgStartDirective,
                    NgEndDirective,
                    NgTrueDirective
                ],
                providers: [
                    HelpersService,
                    ClassService,
                    StyleService
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
var __window = typeof window !== 'undefined' && window;
var __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
var __global = typeof global !== 'undefined' && global;
var _global = __window || __global || __self;
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
 * @param {?} obj
 * @return {?}
 */
function isPromise(obj) {
    return !!obj && typeof obj.then === 'function';
}
/**
 * @param {?} obj
 * @return {?}
 */
function isObservable(obj) {
    return !!obj && typeof obj.subscribe === 'function';
}
/**
 * @param {?} v
 * @return {?}
 */
function isType(v) {
    return typeof v === 'function';
}
/**
 * @param {?} view
 * @return {?}
 */
function isComponentView(view) {
    return !!view.parent && !!(((view.parentNodeDef)).flags & 1 << 15);
}
/**
 * @param {?} view
 * @return {?}
 */
function isEmbeddedView(view) {
    return !!view.parent && !(((view.parentNodeDef)).flags & 1 << 15);
}
/**
 * @param {?} token
 * @return {?}
 */
function stringify(token) {
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
        return "" + token.overriddenName;
    }
    if (token.name) {
        return "" + token.name;
    }
    var /** @type {?} */ res = token.toString();
    if (res == null) {
        return '' + res;
    }
    var /** @type {?} */ newLineIndex = res.indexOf('\n');
    return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
/**
 * @param {?} a
 * @param {?} b
 * @return {?}
 */
function looseIdentical(a, b) {
    return a === b || typeof a === 'number' && typeof b === 'number' && isNaN(a) && isNaN(b);
}
var _symbolIterator = null;
/**
 * @return {?}
 */
function getSymbolIterator() {
    if (!_symbolIterator) {
        var /** @type {?} */ Symbol = _global['Symbol'];
        if (Symbol && Symbol.iterator) {
            _symbolIterator = Symbol.iterator;
        }
        else {
            // es6-shim specific logic
            var /** @type {?} */ keys = Object.getOwnPropertyNames(Map.prototype);
            for (var /** @type {?} */ i = 0; i < keys.length; ++i) {
                var /** @type {?} */ key = keys[i];
                if (key !== 'entries' && key !== 'size' &&
                    ((Map)).prototype[key] === Map.prototype['entries']) {
                    _symbolIterator = key;
                }
            }
        }
    }
    return _symbolIterator;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isListLikeIterable(obj) {
    if (!isJsObject(obj))
        return false;
    return Array.isArray(obj) || (!(obj instanceof Map) && getSymbolIterator() in obj);
}
/**
 * @param {?} a
 * @param {?} b
 * @param {?} comparator
 * @return {?}
 */
function areIterablesEqual(a, b, comparator) {
    var /** @type {?} */ iterator1 = a[getSymbolIterator()]();
    var /** @type {?} */ iterator2 = b[getSymbolIterator()]();
    while (true) {
        var /** @type {?} */ item1 = iterator1.next();
        var /** @type {?} */ item2 = iterator2.next();
        if (item1.done && item2.done)
            return true;
        if (item1.done || item2.done)
            return false;
        if (!comparator(item1.value, item2.value))
            return false;
    }
}
/**
 * @param {?} obj
 * @param {?} fn
 * @return {?}
 */
function iterateListLike(obj, fn) {
    if (Array.isArray(obj)) {
        for (var /** @type {?} */ i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    }
    else {
        var /** @type {?} */ iterator = obj[getSymbolIterator()]();
        var /** @type {?} */ item = void 0;
        while (!((item = iterator.next()).done)) {
            fn(item.value);
        }
    }
}
/**
 * @param {?} o
 * @return {?}
 */
function isJsObject(o) {
    return o !== null && (typeof o === 'function' || typeof o === 'object');
}
var classNames = require('classnames');

exports.MeepoCommonModule = MeepoCommonModule;
exports.isMeepoTrue = isMeepoTrue;
exports.isTrueProperty = isTrueProperty;
exports.isCheckedProperty = isCheckedProperty;
exports.isBoolean = isBoolean;
exports.isString = isString;
exports.isNumber = isNumber;
exports.isFunction = isFunction;
exports.isDefined = isDefined;
exports.isUndefined = isUndefined;
exports.isPresent = isPresent;
exports.isBlank = isBlank;
exports.isObject = isObject;
exports.isArray = isArray;
exports.isFinite = isFinite;
exports.isNaN = isNaN;
exports.isWindow = isWindow;
exports.isDocument = isDocument;
exports.isPromise = isPromise;
exports.isObservable = isObservable;
exports.isType = isType;
exports.isComponentView = isComponentView;
exports.isEmbeddedView = isEmbeddedView;
exports.stringify = stringify;
exports.looseIdentical = looseIdentical;
exports.getSymbolIterator = getSymbolIterator;
exports.isListLikeIterable = isListLikeIterable;
exports.areIterablesEqual = areIterablesEqual;
exports.iterateListLike = iterateListLike;
exports.isJsObject = isJsObject;
exports.classNames = classNames;
exports.ClassService = ClassService;
exports.ComponentOutletService = ComponentOutletService;
exports.HelperService = HelperService;
exports.HelpersService = HelpersService;
exports.StyleService = StyleService;
exports.TemplateOutletService = TemplateOutletService;
exports.global = _global;
exports.ɵb = NgEachOf;
exports.ɵa = NgEachOfContext;
exports.ɵd = NgEndDirective;
exports.ɵc = NgStartDirective;
exports.ɵe = NgTrueDirective;
exports.ɵg = ClassService;
exports.ɵf = HelpersService;
exports.ɵh = StyleService;
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
exports.isDevMode = core.isDevMode;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=meepo-common.umd.js.map

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
import { ComponentFactoryResolver, Directive, ElementRef, EventEmitter, Injectable, Input, IterableDiffers, KeyValueDiffers, NgModule, NgModuleRef, Output, Renderer2, TemplateRef, ViewContainerRef, ɵisListLikeIterable } from '@angular/core';
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
var NgStartDirective = /** @class */ (function () {
    function NgStartDirective() {
        this.ngStartChange = new EventEmitter();
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
    { type: Directive, args: [{
                selector: '[ngStart]'
            },] },
];
/** @nocollapse */
NgStartDirective.ctorParameters = function () { return []; };
NgStartDirective.propDecorators = {
    "ngStart": [{ type: Input },],
    "ngStartChange": [{ type: Output },],
};
var NgEndDirective = /** @class */ (function () {
    function NgEndDirective() {
        this.ngEndChange = new EventEmitter();
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
    { type: Directive, args: [{
                selector: '[ngEnd]'
            },] },
];
/** @nocollapse */
NgEndDirective.ctorParameters = function () { return []; };
NgEndDirective.propDecorators = {
    "ngEnd": [{ type: Input },],
    "ngEndChange": [{ type: Output },],
};
var NgTrueDirective = /** @class */ (function () {
    function NgTrueDirective() {
        this.ngTrueChange = new EventEmitter();
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
    { type: Directive, args: [{
                selector: '[ngTrue]'
            },] },
];
/** @nocollapse */
NgTrueDirective.ctorParameters = function () { return []; };
NgTrueDirective.propDecorators = {
    "ngTrue": [{ type: Input },],
    "ngTrueChange": [{ type: Output },],
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
                if (ɵisListLikeIterable(this._rawClass)) {
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
    { type: Injectable },
];
/** @nocollapse */
ClassService.ctorParameters = function () { return [
    { type: IterableDiffers, },
    { type: KeyValueDiffers, },
    { type: ElementRef, },
    { type: Renderer2, },
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
                var /** @type {?} */ parentModule = elInjector.get(NgModuleRef);
                this._moduleRef = ngComponentOutletNgModuleFactory.create(parentModule.injector);
            }
            else {
                this._moduleRef = null;
            }
            var /** @type {?} */ componentFactoryResolver = this._moduleRef ? this._moduleRef.componentFactoryResolver : elInjector.get(ComponentFactoryResolver);
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
    { type: Injectable },
];
/** @nocollapse */
ComponentOutletService.ctorParameters = function () { return [
    { type: ViewContainerRef, },
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
    { type: Injectable },
];
/** @nocollapse */
TemplateOutletService.ctorParameters = function () { return [
    { type: ViewContainerRef, },
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
    { type: Injectable },
];
/** @nocollapse */
HelperService.ctorParameters = function () { return [
    { type: ViewContainerRef, },
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
    { type: Injectable },
];
/** @nocollapse */
HelpersService.ctorParameters = function () { return [
    { type: ViewContainerRef, },
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
    { type: Injectable },
];
/** @nocollapse */
StyleService.ctorParameters = function () { return [
    { type: KeyValueDiffers, },
    { type: ElementRef, },
    { type: Renderer2, },
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
    { type: NgModule, args: [{
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
export { MeepoCommonModule, isMeepoTrue, isTrueProperty, isCheckedProperty, isBoolean, isString, isNumber, isFunction, isDefined, isUndefined, isPresent, isBlank, isObject, isArray, isFinite, isNaN, isWindow, isDocument, ClassService, ComponentOutletService, HelperService, HelpersService, StyleService, TemplateOutletService, NgEachOf as ɵb, NgEachOfContext as ɵa, NgEndDirective as ɵd, NgStartDirective as ɵc, NgTrueDirective as ɵe, ClassService as ɵg, HelpersService as ɵf, StyleService as ɵh };
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

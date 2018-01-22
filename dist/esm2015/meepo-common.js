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
class NgStartDirective {
    constructor() {
        this.ngStartChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.ngStart) {
            this.ngStartChange.emit(this.ngStart);
        }
    }
}
NgStartDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngStart]'
            },] },
];
/** @nocollapse */
NgStartDirective.ctorParameters = () => [];
NgStartDirective.propDecorators = {
    "ngStart": [{ type: Input },],
    "ngStartChange": [{ type: Output },],
};
class NgEndDirective {
    constructor() {
        this.ngEndChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.ngEnd) {
            this.ngEndChange.emit(this.ngEnd);
        }
    }
}
NgEndDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngEnd]'
            },] },
];
/** @nocollapse */
NgEndDirective.ctorParameters = () => [];
NgEndDirective.propDecorators = {
    "ngEnd": [{ type: Input },],
    "ngEndChange": [{ type: Output },],
};
class NgTrueDirective {
    constructor() {
        this.ngTrueChange = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.ngTrue) {
            this.ngTrueChange.emit(true);
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.ngTrue) {
            this.ngTrueChange.emit(true);
        }
    }
}
NgTrueDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ngTrue]'
            },] },
];
/** @nocollapse */
NgTrueDirective.ctorParameters = () => [];
NgTrueDirective.propDecorators = {
    "ngTrue": [{ type: Input },],
    "ngTrueChange": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ClassService {
    /**
     * @param {?} _iterableDiffers
     * @param {?} _keyValueDiffers
     * @param {?} _ngEl
     * @param {?} _renderer
     */
    constructor(_iterableDiffers, _keyValueDiffers, _ngEl, _renderer) {
        this._iterableDiffers = _iterableDiffers;
        this._keyValueDiffers = _keyValueDiffers;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
        this._initialClasses = [];
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set klass(v) {
        this._applyInitialClasses(true);
        this._initialClasses = typeof v === 'string' ? v.split(/\s+/) : [];
        this._applyInitialClasses(false);
        this._applyClasses(this._rawClass, false);
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set ngClass(v) {
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
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._iterableDiffer) {
            const /** @type {?} */ iterableChanges = this._iterableDiffer.diff(/** @type {?} */ (this._rawClass));
            if (iterableChanges) {
                this._applyIterableChanges(iterableChanges);
            }
        }
        else if (this._keyValueDiffer) {
            const /** @type {?} */ keyValueChanges = this._keyValueDiffer.diff(/** @type {?} */ (this._rawClass));
            if (keyValueChanges) {
                this._applyKeyValueChanges(keyValueChanges);
            }
        }
    }
    /**
     * @param {?} rawClassVal
     * @return {?}
     */
    _cleanupClasses(rawClassVal) {
        this._applyClasses(rawClassVal, true);
        this._applyInitialClasses(false);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    _applyKeyValueChanges(changes) {
        changes.forEachAddedItem((record) => this._toggleClass(record.key, record.currentValue));
        changes.forEachChangedItem((record) => this._toggleClass(record.key, record.currentValue));
        changes.forEachRemovedItem((record) => {
            if (record.previousValue) {
                this._toggleClass(record.key, false);
            }
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    _applyIterableChanges(changes) {
        changes.forEachAddedItem((record) => {
            if (typeof record.item === 'string') {
                this._toggleClass(record.item, true);
            }
            else {
                throw new Error(`NgClass AntdClassService`);
            }
        });
        changes.forEachRemovedItem((record) => this._toggleClass(record.item, false));
    }
    /**
     * @param {?} isCleanup
     * @return {?}
     */
    _applyInitialClasses(isCleanup) {
        this._initialClasses.forEach(klass => this._toggleClass(klass, !isCleanup));
    }
    /**
     * @param {?} rawClassVal
     * @param {?} isCleanup
     * @return {?}
     */
    _applyClasses(rawClassVal, isCleanup) {
        if (rawClassVal) {
            if (Array.isArray(rawClassVal) || rawClassVal instanceof Set) {
                (/** @type {?} */ (rawClassVal)).forEach((klass) => this._toggleClass(klass, !isCleanup));
            }
            else {
                Object.keys(rawClassVal).forEach(klass => {
                    if (rawClassVal[klass] != null)
                        this._toggleClass(klass, !isCleanup);
                });
            }
        }
    }
    /**
     * @param {?} klass
     * @param {?} enabled
     * @return {?}
     */
    _toggleClass(klass, enabled) {
        klass = klass.trim();
        if (klass) {
            klass.split(/\s+/g).forEach(klass => {
                if (enabled) {
                    this._renderer.addClass(this._ngEl.nativeElement, klass);
                }
                else {
                    this._renderer.removeClass(this._ngEl.nativeElement, klass);
                }
            });
        }
    }
}
ClassService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ClassService.ctorParameters = () => [
    { type: IterableDiffers, },
    { type: KeyValueDiffers, },
    { type: ElementRef, },
    { type: Renderer2, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ComponentOutletService {
    /**
     * @param {?} _viewContainerRef
     */
    constructor(_viewContainerRef) {
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
    create(ngComponentOutlet, ngComponentOutletInjector, ngComponentOutletContent, ngComponentOutletNgModuleFactory) {
        this._viewContainerRef.clear();
        this._componentRef = null;
        if (ngComponentOutlet) {
            const /** @type {?} */ elInjector = ngComponentOutletInjector || this._viewContainerRef.parentInjector;
            if (this._moduleRef)
                this._moduleRef.destroy();
            if (ngComponentOutletNgModuleFactory) {
                const /** @type {?} */ parentModule = elInjector.get(NgModuleRef);
                this._moduleRef = ngComponentOutletNgModuleFactory.create(parentModule.injector);
            }
            else {
                this._moduleRef = null;
            }
            const /** @type {?} */ componentFactoryResolver = this._moduleRef ? this._moduleRef.componentFactoryResolver : elInjector.get(ComponentFactoryResolver);
            const /** @type {?} */ componentFactory = componentFactoryResolver.resolveComponentFactory(ngComponentOutlet);
            this._componentRef = this._viewContainerRef.createComponent(componentFactory, this._viewContainerRef.length, elInjector, ngComponentOutletContent);
            return this._componentRef;
        }
        return null;
    }
    /**
     * @return {?}
     */
    update() { }
    /**
     * @return {?}
     */
    destroy() {
        if (this._moduleRef)
            this._moduleRef.destroy();
    }
}
ComponentOutletService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ComponentOutletService.ctorParameters = () => [
    { type: ViewContainerRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TemplateOutletService {
    /**
     * @param {?} _viewContainerRef
     */
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
    }
    /**
     * @param {?} tpl
     * @param {?} context
     * @return {?}
     */
    create(tpl, context) {
        if (this._viewRef) {
            this.destroy();
        }
        if (tpl) {
            this._viewRef = this._viewContainerRef.createEmbeddedView(tpl, context);
            return this._viewRef;
        }
        return null;
    }
    /**
     * @param {?} ctx
     * @return {?}
     */
    update(ctx) {
        for (let /** @type {?} */ propName of Object.keys(ctx)) {
            (/** @type {?} */ (this._viewRef.context))[propName] = (/** @type {?} */ (ctx))[propName];
        }
    }
    /**
     * @return {?}
     */
    destroy() {
        const /** @type {?} */ index = this._viewContainerRef.indexOf(this._viewRef);
        if (index >= 0) {
            this._viewContainerRef.remove(index);
        }
    }
}
TemplateOutletService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
TemplateOutletService.ctorParameters = () => [
    { type: ViewContainerRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class HelperService {
    /**
     * @param {?} _viewContainerRef
     */
    constructor(_viewContainerRef) {
        this._viewContainerRef = _viewContainerRef;
        this._templateCreator = new TemplateOutletService(_viewContainerRef);
        this._componentCreator = new ComponentOutletService(_viewContainerRef);
    }
    /**
     * @param {?} tpl
     * @param {?=} context
     * @return {?}
     */
    createTemplate(tpl, context) {
        this._templateCreator.create(tpl, context);
    }
    /**
     * @param {?} component
     * @param {?=} injector
     * @param {?=} content
     * @param {?=} ngModel
     * @return {?}
     */
    createComponent(component, injector, content, ngModel) {
        this._componentCreator.create(component, injector, content, ngModel);
    }
    /**
     * @return {?}
     */
    destory() {
        this._templateCreator.destroy();
        this._componentCreator.destroy();
    }
}
HelperService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HelperService.ctorParameters = () => [
    { type: ViewContainerRef, },
];

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

class HelpersService {
    /**
     * @param {?} _viewContainerRef
     */
    constructor(_viewContainerRef) {
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
    addComponent(component, injector, content, ngModel) {
        const /** @type {?} */ helper = new HelperService(this._viewContainerRef);
        helper.createComponent(component, injector, content, ngModel);
        this.components.push(helper);
        return helper;
    }
    /**
     * @param {?} tpl
     * @param {?=} context
     * @return {?}
     */
    addTemplate(tpl, context) {
        const /** @type {?} */ helper = new HelperService(this._viewContainerRef);
        helper.createTemplate(tpl, context);
        this.templates.push(helper);
        return helper;
    }
    /**
     * @param {?=} components
     * @return {?}
     */
    addComponents(components = []) {
        components.map((res) => {
            this.addComponent(res.component, res.injector, res.content, res.ngModel);
        });
    }
    /**
     * @param {?=} tpls
     * @return {?}
     */
    addTemplates(tpls = []) {
        tpls.map((res) => {
            this.addTemplate(res.tpl, res.context);
        });
    }
}
HelpersService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
HelpersService.ctorParameters = () => [
    { type: ViewContainerRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StyleService {
    /**
     * @param {?} _differs
     * @param {?} _ngEl
     * @param {?} _renderer
     */
    constructor(_differs, _ngEl, _renderer) {
        this._differs = _differs;
        this._ngEl = _ngEl;
        this._renderer = _renderer;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set ngStyle(v) {
        this._ngStyle = v;
        if (!this._differ && v) {
            this._differ = this._differs.find(v).create();
            this.ngDoCheck();
        }
    }
    /**
     * @return {?}
     */
    ngDoCheck() {
        if (this._differ) {
            const /** @type {?} */ changes = this._differ.diff(this._ngStyle);
            if (changes) {
                this._applyChanges(changes);
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    _applyChanges(changes) {
        changes.forEachRemovedItem((record) => this._setStyle(record.key, null));
        changes.forEachAddedItem((record) => this._setStyle(record.key, record.currentValue));
        changes.forEachChangedItem((record) => this._setStyle(record.key, record.currentValue));
    }
    /**
     * @param {?} nameAndUnit
     * @param {?} value
     * @return {?}
     */
    _setStyle(nameAndUnit, value) {
        const [name, unit] = nameAndUnit.split('.');
        value = value != null && unit ? `${value}${unit}` : value;
        this._renderer.setStyle(this._ngEl.nativeElement, name, /** @type {?} */ (value));
    }
}
StyleService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
StyleService.ctorParameters = () => [
    { type: KeyValueDiffers, },
    { type: ElementRef, },
    { type: Renderer2, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MeepoCommonModule {
}
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
MeepoCommonModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const __window = typeof window !== 'undefined' && window;
const __self = typeof self !== 'undefined' && typeof WorkerGlobalScope !== 'undefined' &&
    self instanceof WorkerGlobalScope && self;
const __global = typeof global !== 'undefined' && global;
const _global = __window || __global || __self;

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
    return !!view.parent && !!(/** @type {?} */ ((view.parentNodeDef)).flags & 1 << 15);
}
/**
 * @param {?} view
 * @return {?}
 */
function isEmbeddedView(view) {
    return !!view.parent && !(/** @type {?} */ ((view.parentNodeDef)).flags & 1 << 15);
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
        return `${token.overriddenName}`;
    }
    if (token.name) {
        return `${token.name}`;
    }
    const /** @type {?} */ res = token.toString();
    if (res == null) {
        return '' + res;
    }
    const /** @type {?} */ newLineIndex = res.indexOf('\n');
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
let _symbolIterator = null;
/**
 * @return {?}
 */
function getSymbolIterator() {
    if (!_symbolIterator) {
        const /** @type {?} */ Symbol = _global['Symbol'];
        if (Symbol && Symbol.iterator) {
            _symbolIterator = Symbol.iterator;
        }
        else {
            // es6-shim specific logic
            const /** @type {?} */ keys = Object.getOwnPropertyNames(Map.prototype);
            for (let /** @type {?} */ i = 0; i < keys.length; ++i) {
                const /** @type {?} */ key = keys[i];
                if (key !== 'entries' && key !== 'size' &&
                    (/** @type {?} */ (Map)).prototype[key] === Map.prototype['entries']) {
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
    const /** @type {?} */ iterator1 = a[getSymbolIterator()]();
    const /** @type {?} */ iterator2 = b[getSymbolIterator()]();
    while (true) {
        const /** @type {?} */ item1 = iterator1.next();
        const /** @type {?} */ item2 = iterator2.next();
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
        for (let /** @type {?} */ i = 0; i < obj.length; i++) {
            fn(obj[i]);
        }
    }
    else {
        const /** @type {?} */ iterator = obj[getSymbolIterator()]();
        let /** @type {?} */ item;
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

export { MeepoCommonModule, isMeepoTrue, isTrueProperty, isCheckedProperty, isBoolean, isString, isNumber, isFunction, isDefined, isUndefined, isPresent, isBlank, isObject, isArray, isFinite, isNaN, isWindow, isDocument, isPromise, isObservable, isType, isComponentView, isEmbeddedView, stringify, looseIdentical, getSymbolIterator, isListLikeIterable, areIterablesEqual, iterateListLike, isJsObject, ClassService, ComponentOutletService, HelperService, HelpersService, StyleService, TemplateOutletService, _global as global, NgEachOf as ɵb, NgEachOfContext as ɵa, NgEndDirective as ɵd, NgStartDirective as ɵc, NgTrueDirective as ɵe, ClassService as ɵg, HelpersService as ɵf, StyleService as ɵh };
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
export { isDevMode } from '@angular/core';
//# sourceMappingURL=meepo-common.js.map

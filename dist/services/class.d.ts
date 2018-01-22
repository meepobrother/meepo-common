import { Renderer2, ElementRef, IterableDiffers, KeyValueDiffers } from '@angular/core';
export declare class ClassService {
    private _iterableDiffers;
    private _keyValueDiffers;
    private _ngEl;
    private _renderer;
    private _iterableDiffer;
    private _keyValueDiffer;
    private _initialClasses;
    private _rawClass;
    constructor(_iterableDiffers: IterableDiffers, _keyValueDiffers: KeyValueDiffers, _ngEl: ElementRef, _renderer: Renderer2);
    klass: string;
    ngClass: string | string[] | Set<string> | {
        [klass: string]: any;
    };
    private ngDoCheck();
    private _cleanupClasses(rawClassVal);
    private _applyKeyValueChanges(changes);
    private _applyIterableChanges(changes);
    private _applyInitialClasses(isCleanup);
    private _applyClasses(rawClassVal, isCleanup);
    private _toggleClass(klass, enabled);
}

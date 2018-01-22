import { ElementRef, KeyValueDiffers, Renderer2 } from '@angular/core';
export declare class StyleService {
    private _differs;
    private _ngEl;
    private _renderer;
    private _ngStyle;
    private _differ;
    constructor(_differs: KeyValueDiffers, _ngEl: ElementRef, _renderer: Renderer2);
    ngStyle: {
        [key: string]: string;
    };
    private ngDoCheck();
    private _applyChanges(changes);
    private _setStyle(nameAndUnit, value);
}

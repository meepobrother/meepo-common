import { ElementRef } from '@angular/core';
export declare class Scroller {
    ele: ElementRef;
    _viewportSize: any;
    constructor(ele: ElementRef);
    getViewportScrollPosition(): {
        top: any;
        left: any;
    };
    private _updateViewportSize();
    getViewportSize(): Readonly<{
        width: number;
        height: number;
    }>;
    getViewportRect(): ClientRect;
}

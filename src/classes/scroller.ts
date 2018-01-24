import { ElementRef } from '@angular/core';

export class Scroller {
    _viewportSize: any;
    constructor(
        public ele: ElementRef
    ) { }

    getViewportScrollPosition() {
        const ele = this.ele.nativeElement;
        const documentRect = ele.getBoundingClientRect();
        const top = -documentRect.top || ele.scrollTop || 0;
        const left = -documentRect.left || ele.scrollLeft || 0;
        return { top, left };
    }

    private _updateViewportSize() {
        this._viewportSize = {
            width: this.ele.nativeElement.offsetWidth,
            height: this.ele.nativeElement.offsetHeight
        };
    }

    getViewportSize(): Readonly<{ width: number, height: number }> {
        if (!this._viewportSize || !this._viewportSize.height || !this._viewportSize.width) {
            this._updateViewportSize();
        }
        return {
            width: this._viewportSize.width,
            height: this._viewportSize.height
        };
    }

    getViewportRect(): ClientRect {
        const scrollPosition = this.getViewportScrollPosition();
        const { width, height } = this.getViewportSize();
        return {
            top: scrollPosition.top,
            left: scrollPosition.left,
            bottom: scrollPosition.top + height,
            right: scrollPosition.left + width,
            height,
            width,
        };
    }
}

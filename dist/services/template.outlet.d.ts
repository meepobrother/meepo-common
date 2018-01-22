import { EmbeddedViewRef, TemplateRef, ViewContainerRef } from '@angular/core';
export declare class TemplateOutletService {
    private _viewContainerRef;
    private _viewRef;
    constructor(_viewContainerRef: ViewContainerRef);
    create(tpl: TemplateRef<any>, context: Object): EmbeddedViewRef<any> | null;
    update(ctx: Object): void;
    destroy(): void;
}

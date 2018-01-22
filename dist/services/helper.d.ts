import { ViewContainerRef, TemplateRef } from '@angular/core';
import { Type, Injector, NgModuleFactory } from '@angular/core';
export declare class HelperService {
    private _viewContainerRef;
    private _templateCreator;
    private _componentCreator;
    constructor(_viewContainerRef: ViewContainerRef);
    createTemplate(tpl: TemplateRef<any>, context?: Object): void;
    createComponent(component: Type<any>, injector?: Injector, content?: any[][], ngModel?: NgModuleFactory<any>): void;
    destory(): void;
}

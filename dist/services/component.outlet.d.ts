import { ComponentRef, Injector, NgModuleFactory, Type, ViewContainerRef } from '@angular/core';
export declare class ComponentOutletService {
    private _viewContainerRef;
    private _componentRef;
    private _moduleRef;
    constructor(_viewContainerRef: ViewContainerRef);
    create(ngComponentOutlet: Type<any>, ngComponentOutletInjector?: Injector, ngComponentOutletContent?: any[][], ngComponentOutletNgModuleFactory?: NgModuleFactory<any>): ComponentRef<any> | null;
    update(): void;
    destroy(): void;
}

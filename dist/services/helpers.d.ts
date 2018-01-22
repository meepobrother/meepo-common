import { ViewContainerRef, Type, NgModuleFactory, Injector, TemplateRef } from '@angular/core';
import { HelperService } from './helper';
export interface AddComponentProps {
    component: Type<any>;
    injector?: Injector;
    content?: any[][];
    ngModel?: NgModuleFactory<any>;
}
export interface AddTemplateProps {
    tpl: TemplateRef<any>;
    context?: Object;
}
export declare class HelpersService {
    private _viewContainerRef;
    components: any[];
    templates: any[];
    constructor(_viewContainerRef: ViewContainerRef);
    addComponent(component: Type<any>, injector?: Injector, content?: any[][], ngModel?: NgModuleFactory<any>): HelperService;
    addTemplate(tpl: TemplateRef<any>, context?: Object): HelperService;
    addComponents(components?: AddComponentProps[]): void;
    addTemplates(tpls?: AddTemplateProps[]): void;
}

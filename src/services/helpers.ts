import {
    Injectable, ViewContainerRef, Type,
    NgModuleFactory, Injector, TemplateRef,
    Host
} from '@angular/core';
import { HelperService } from './helper';

export interface AddComponentProps {
    component: Type<any>,
    injector?: Injector,
    content?: any[][],
    ngModel?: NgModuleFactory<any>
}

export interface AddTemplateProps {
    tpl: TemplateRef<any>,
    context?: Object
}

export class HelpersService {
    components: any[] = [];
    templates: any[] = [];
    constructor(
        @Host() private _viewContainerRef: ViewContainerRef
    ) { }

    addComponent(
        component: Type<any>,
        injector?: Injector,
        content?: any[][],
        ngModel?: NgModuleFactory<any>
    ): HelperService {
        const helper = new HelperService(this._viewContainerRef);
        helper.createComponent(component, injector, content, ngModel);
        this.components.push(helper);
        return helper;
    }

    addTemplate(
        tpl: TemplateRef<any>,
        context?: Object
    ): HelperService {
        const helper = new HelperService(this._viewContainerRef);
        helper.createTemplate(tpl, context);
        this.templates.push(helper);
        return helper;
    }

    addComponents(components: AddComponentProps[] = []) {
        components.map((res: AddComponentProps) => {
            this.addComponent(res.component, res.injector, res.content, res.ngModel)
        });
    }

    addTemplates(tpls: AddTemplateProps[] = []) {
        tpls.map((res: AddTemplateProps) => {
            this.addTemplate(res.tpl, res.context);
        });
    }
}
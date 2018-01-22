import { NgModule, ViewContainerRef } from '@angular/core';
import { NgEachOf } from './ng-each-of';
import { NgEndDirective, NgStartDirective, NgTrueDirective } from './ng-true';

import { ClassService, StyleService, HelpersService } from './services';

@NgModule({
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
})
export class MeepoCommonModule { }

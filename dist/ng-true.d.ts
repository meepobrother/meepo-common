import { EventEmitter, OnInit, AfterViewInit } from '@angular/core';
export declare class NgStartDirective implements OnInit {
    ngStart: boolean;
    ngStartChange: EventEmitter<any>;
    ngOnInit(): void;
}
export declare class NgEndDirective implements AfterViewInit {
    ngEnd: boolean;
    ngEndChange: EventEmitter<any>;
    ngAfterViewInit(): void;
}
export declare class NgTrueDirective {
    ngTrue: boolean;
    ngTrueChange: EventEmitter<any>;
    ngOnInit(): void;
    ngAfterViewInit(): void;
}

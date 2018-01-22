import { Directive, Input, Output, EventEmitter, OnInit, AfterViewInit } from '@angular/core';

@Directive({
    selector: '[ngStart]'
})
export class NgStartDirective implements OnInit {
    @Input() ngStart: boolean;
    @Output() ngStartChange: EventEmitter<any> = new EventEmitter();
    ngOnInit() {
        if (this.ngStart) {
            this.ngStartChange.emit(this.ngStart);
        }
    }
}


@Directive({
    selector: '[ngEnd]'
})
export class NgEndDirective implements AfterViewInit {
    @Input() ngEnd: boolean;
    @Output() ngEndChange: EventEmitter<any> = new EventEmitter();
    ngAfterViewInit() {
        if (this.ngEnd) {
            this.ngEndChange.emit(this.ngEnd);
        }
    }
}

@Directive({
    selector: '[ngTrue]'
})
export class NgTrueDirective {
    @Input() ngTrue: boolean;
    @Output() ngTrueChange: EventEmitter<any> = new EventEmitter();

    ngOnInit() {
        if (this.ngTrue) {
            this.ngTrueChange.emit(true);
        }
    }

    ngAfterViewInit() {
        if (this.ngTrue) {
            this.ngTrueChange.emit(true);
        }
    }
}

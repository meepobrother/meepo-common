### common

# directive

- ngEach

```ts
props: Object = {
    type: 'text'
}
```

```html
<div *ngEach="let item of props">
    {{item.type}}
</div>
```

- ngStart && ngEnd && ngTrue  双向绑定[()]

```html
<ul>
    <li *ngFor="let i of [1,2,3,4,5,6];last as l;">
        <span [ngStart]="l" (ngStartChange)="renderBegin()"></span>
    </li>
</ul>

<ul>
    <li *ngFor="let i of [1,2,3,4,5,6];first as f;">
        <span [ngEnd]="f" (ngEndChange)="renderEnd()"></span>
    </li>
</ul>


<ul>
    <li *ngFor="let i of [1,2,3,4,5,6];index as i;">
        <span [ngTrue]="i === 3" (ngTrueChange)="render3State($event)"></span>
    </li>
</ul>

```

```ts
renderBegin(){
    console.log('开始渲染第一个');
}

renderEnd(){
    console.log('渲染到最后一个列表');
}

render3State(e: boolean){
    if(e){
        console.log(`开始渲染第三个`);
    }else{
        console.loog(`第三个个渲染完毕`);
    }
}

```

# services

- helpersService 增减动态组件服务

```ts
constructor(public helper: HelpersService){}

addComponentRef(
    component: Type<any>,
    injector?: Injector,
    content?: any[][],
    ngModel?: NgModuleFactory<any>
){
    const helper = this.helper.addComponent(component,injector,content,ngModel);

    // helper.destory() 删除组件
}

addTemplateRef(
    tpl: TemplateRef<any>,
    context?: Object
){
    const helper = this.helper.addTemplate(tpl,context);

    // helper.destory() 删除template
}

```

# functions

```ts
export declare function isMeepoTrue(val: any): boolean;
export declare function isTrueProperty(val: any): boolean;
export declare function isCheckedProperty(a: any, b: any): boolean;
/** @hidden */
export declare function isBoolean(val: any): val is boolean;
/** @hidden */
export declare function isString(val: any): val is string;
/** @hidden */
export declare function isNumber(val: any): val is number;
/** @hidden */
export declare function isFunction(val: any): val is Function;
/** @hidden */
export declare function isDefined(val: any): boolean;
/** @hidden */
export declare function isUndefined(val: any): val is undefined;
/** @hidden */
export declare function isPresent(val: any): val is any;
/** @hidden */
export declare function isBlank(val: any): val is null;
/** @hidden */
export declare function isObject(val: any): val is Object;
/** @hidden */
export declare const isArray: (arg: any) => arg is any[];
export declare const isFinite: (number: number) => boolean;
export declare function isNaN(value: any): boolean;
export declare function isWindow(el: any): boolean;
export declare function isDocument(el: any): boolean;
export { isDevMode } from '@angular/core';
export declare function isPromise(obj: any): obj is Promise<any>;
export declare function isObservable(obj: any | Observable<any>): obj is Observable<any>;
export declare function isType(v: any): v is Type<any>;
export declare function isComponentView(view: any): boolean;
export declare function isEmbeddedView(view: any): boolean;
export declare function stringify(token: any): string;
export declare function looseIdentical(a: any, b: any): boolean;
export declare function getSymbolIterator(): string | symbol;
export declare function isListLikeIterable(obj: any): boolean;
export declare function areIterablesEqual(a: any, b: any, comparator: (a: any, b: any) => boolean): boolean;
export declare function iterateListLike(obj: any, fn: (p: any) => any): void;
export declare function isJsObject(o: any): boolean;
```

# global

```ts
import {global} from 'meepo-common';
```

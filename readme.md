### common

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
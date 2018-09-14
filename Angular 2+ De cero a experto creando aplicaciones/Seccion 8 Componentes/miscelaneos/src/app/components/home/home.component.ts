import { Component, OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <app-ng-style></app-ng-style>

    <app-css></app-css>

    <app-ng-class></app-ng-class>

    <p>Hola Mundo desde app.component</p>

    <p [appResaltado]="'green'" [size]="'30px'" [border]="'solid 3px yellow'">Hola Mundo</p>
    <p [appResaltado]="'green'" [size]="'30px'" >Hola Mundo</p>

    <p appResaltado2 [newColor]="'red'" [size]="'40px'" [border]="'solid 3px blue'">Hola Mundo 2</p>

    <app-ng-switch></app-ng-switch>
  `,
  styles: []
})
export class HomeComponent implements OnInit, OnChanges, DoCheck, AfterContentInit,
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log("constructor");
  }

  ngOnInit() {
    console.log("ngOnInit");
  }

  ngOnChanges() {
    console.log("OnChanges");
  }

  ngDoCheck() {
    console.log("DoCheck");
  }

  ngAfterContentInit() {
    console.log("AfterContentInit");
  }

  ngAfterContentChecked() {
    console.log("AfterContentChecked");
  }

  ngAfterViewInit() {
    console.log("AfterViewInit");
  }

  ngAfterViewChecked() {
    console.log("AfterViewChecked");
  }

  ngOnDestroy() {
    console.log("OnDestroy");
  }
}

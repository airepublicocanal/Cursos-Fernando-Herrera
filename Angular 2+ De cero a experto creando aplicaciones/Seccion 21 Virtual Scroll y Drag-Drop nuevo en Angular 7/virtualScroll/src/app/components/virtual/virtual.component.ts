import { Component, OnInit, ViewChild } from '@angular/core';
import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-virtual',
  templateUrl: './virtual.component.html',
  styleUrls: ['./virtual.component.css']
})
export class VirtualComponent implements OnInit {
  @ViewChild(CdkVirtualScrollViewport) viewPort: CdkVirtualScrollViewport;

  personas = Array(1000).fill(0);

  constructor() {}

  ngOnInit() {
    console.log(this.personas);
  }

  irInicio() {
    this.viewPort.scrollToIndex(0);
  }

  irMitad() {
    this.viewPort.scrollToIndex(this.personas.length / 2);
  }

  irFinal() {
    console.log(this.personas.length);
    this.viewPort.scrollToIndex(this.personas.length);
  }
}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//import { Header33Component } from './components/header/header33.component';
import { Header34Component } from './components/header/header34.component';
import { BodyComponent } from './components/body/body.component';
import { Footer35Component } from './components/footer/footer35.component';

@NgModule({
  declarations: [
    AppComponent,
    Header34Component,
    BodyComponent,
    Footer35Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

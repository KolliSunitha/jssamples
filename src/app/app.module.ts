import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SliderModule } from 'angular-image-slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { ArraysamplesComponent } from './arraysamples/arraysamples.component';
import { SliderimagesComponent } from './sliderimages/sliderimages.component';


@NgModule({
  declarations: [
    AppComponent,
    ArraysamplesComponent,
    SliderimagesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

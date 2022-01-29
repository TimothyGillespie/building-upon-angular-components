import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CssOverwriteComponent } from './css-overwrite/css-overwrite.component';
import {InputTextModule} from "primeng/inputtext";
import { CssOverwriteCustomizedComponent } from './css-overwrite/css-overwrite-customized/css-overwrite-customized.component';
import { CssOverwriteInitialComponent } from './css-overwrite/css-overwrite-initial/css-overwrite-initial.component';
import { CopyEntireComponentSourceComponent } from './copy-entire-component-source/copy-entire-component-source.component';
import { CalendarCopyComponent } from './copy-entire-component-source/calendar-copy/calendar-copy.component';
import {CalendarModule} from "primeng/calendar";
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [
    AppComponent,
    CssOverwriteComponent,
    CssOverwriteCustomizedComponent,
    CssOverwriteInitialComponent,
    CopyEntireComponentSourceComponent,
    CalendarCopyComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    InputTextModule,
    CalendarModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

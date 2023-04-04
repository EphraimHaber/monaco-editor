import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonacoAngularComponent } from './monaco-angular/monaco-angular.component';
// import {MonacoEditorModule} from 'ngx-monaco-editor';
// import { FormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { MonacoEditorModule, MONACO_PATH } from '@materia-ui/ngx-monaco-editor';

@NgModule({
  declarations: [
    AppComponent,
    MonacoAngularComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MonacoEditorModule,
  ],
  providers: [
    {
      provide: MONACO_PATH,
      useValue: 'https://unpkg.com/monaco-editor@0.31.1/min/vs',
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

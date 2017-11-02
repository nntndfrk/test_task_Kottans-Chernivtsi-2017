import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {SharedModule} from './shared/shared.module';

import {AppComponent} from './app.component';
import { DialogComponent } from './dialog-wrapper/dialog-wrapper.component';
import { DialogWrapperComponent } from './dialog-wrapper/dialog-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    DialogWrapperComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    SharedModule
  ],
  entryComponents: [
    DialogComponent
  ]
})
export class AppModule {
}

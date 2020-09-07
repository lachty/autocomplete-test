import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AutoCompleteModule} from 'primeng/autocomplete';
import { AutocompleteDirective } from './autocomplete.directive';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    AutocompleteDirective
  ],
  imports: [
    BrowserModule,
    AutoCompleteModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

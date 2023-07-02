import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ShowCaseComponent } from './components/show-case/show-case.component';
import { ListPokemonComponent } from './components/list-pokemon/list-pokemon.component';

@NgModule({
  declarations: [
    AppComponent,
    ShowCaseComponent,
    ListPokemonComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}

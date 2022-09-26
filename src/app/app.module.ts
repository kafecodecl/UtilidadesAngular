import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './router/router.module';
import { ValidaRutComponent } from './pages/validarut/validarut.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  declarations: [AppComponent, ValidaRutComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}

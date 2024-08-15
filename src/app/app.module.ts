import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AppComponent],
  imports: [
		BrowserModule,
    CommonModule,
    RouterOutlet,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from '../app/modules/auth/auth.module';
import { SharedModule } from '../app/shared/shared.module'


@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,  
    AppRoutingModule,SharedModule,AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
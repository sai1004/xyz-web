// components
import { AppComponent } from "./app.component";

// modules

import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from "@angular/core";
import { MatSnackBar } from "@angular/material";
import { AppRoutingModule } from "./app-routing.module";
import { AuthModule } from "../app/modules/auth/auth.module";
import { SharedModule } from "../app/shared/shared.module";

// services 
import { HttpService } from "./shared/service/http.service";
import { AuthService } from "./shared/service/auth.service";
import { ErrorsService } from "./shared/service/error.service";
import { ValidationService } from "./shared/service/validation.service";
import { AppService } from "./shared/service/app.service";
import { ApexService } from "./shared/service/apex.service";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,BrowserAnimationsModule, AppRoutingModule, SharedModule, AuthModule],
  providers: [
    HttpService,
    AuthService,
    ErrorsService,
    ValidationService,
    AppService,
    ApexService,
    MatSnackBar
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}

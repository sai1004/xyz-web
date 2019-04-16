//<------------------modules-------------------->

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";

//<------------------components-------------------->

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";
import { AuthService } from "./auth.service";

@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [CommonModule, SharedModule],
  providers: [AuthService]
})
export class AuthModule {}

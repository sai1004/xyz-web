import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { AuthService } from './auth.service';
import { SharedModule } from '../../shared/shared.module'


@NgModule({
  declarations: [SignInComponent, SignUpComponent],
  imports: [
    CommonModule,SharedModule
  ],
  providers:[AuthService]
})
export class AuthModule { }

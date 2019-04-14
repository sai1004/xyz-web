import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';

const routes: Routes = [
 
  // { path: "", pathMatch: "full", redirectTo: "auth/signin" },
  // {
  //   path: "signin",
  //   loadChildren: "./modules/auth/auth.module#AuthModule",
  // },
  // {
  //   path: "welcome",
  //   loadChildren: "./modules/welcome/welcome.module#WelcomeModule"
  // },

  {
    path: "auth",
    loadChildren: "./modules/auth/auth.module#AuthModule"
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes),AuthModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
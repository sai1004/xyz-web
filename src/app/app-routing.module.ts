import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthModule } from './modules/auth/auth.module';
import { AuthRoutingModule } from './modules/auth/auth-routing.module';
import { AuthService } from "./shared/service/auth.service";

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
  {
    path: "dashboard",
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule",
    // canActivate: [AuthService],
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes),AuthModule, AuthRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
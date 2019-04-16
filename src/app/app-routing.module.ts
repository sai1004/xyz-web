import { NgModule } from "@angular/core";
import { Routes, RouterModule, PreloadAllModules } from "@angular/router";
// import { AuthModule } from "./modules/auth/auth.module";
// import { DashboardModule } from "./modules/dashboard/dashboard.module";
import { AuthRoutingModule } from "./modules/auth/auth-routing.module";

//<-----------------------services-------------------->
import { AuthService } from "./shared/service/auth.service";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "auth/signin" },

  {
    path: "auth",
    loadChildren: "./modules/auth/auth.module#AuthModule"
  },
  {
    path: "dashboard",
    loadChildren: "./modules/dashboard/dashboard.module#DashboardModule"
 
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadAllModules,
    }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

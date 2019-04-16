import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//<------------------components-------------------->

import { SignInComponent } from "./sign-in/sign-in.component";
import { SignUpComponent } from "./sign-up/sign-up.component";

const routes: Routes = [
  { path: "signin", component: SignInComponent },
  { path: "signup", component: SignUpComponent }

   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}

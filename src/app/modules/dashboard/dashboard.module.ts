//<------------------modules-------------------->
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SharedModule } from "../../shared/shared.module";
import { Routes, RouterModule } from "@angular/router";
import { ComponentsModule } from "../../components/components.module";

//<------------------components-------------------->
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardPageComponent }
];

@NgModule({
  declarations: [DashboardPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ]
})
export class DashboardModule {}

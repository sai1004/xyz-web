import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { NavComponent } from "./common/nav/nav.component";

@NgModule({
  declarations: [NavComponent],
  imports: [CommonModule, SharedModule],
  exports: [NavComponent]
})
export class ComponentsModule {}

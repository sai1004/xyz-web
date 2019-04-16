//<----------------------modules--------------->

import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
//<----------------------components--------------->
import { SharedModule } from "../shared/shared.module";
 

@NgModule({
  declarations: [ ],
  imports: [CommonModule, SharedModule],
  exports: [ ]
})
export class ComponentsModule {}

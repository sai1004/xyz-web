import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "./material.module";

import { MatBadgeModule } from "@angular/material/badge";
import { FlexLayoutModule } from "@angular/flex-layout";

// setTimeout(() => {
//   const config1: SocketIoConfig = {
//     url: Props.PY_END_POINT,
//     options: {}
//   };
// }, 100);


@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    MatBadgeModule
  ],
  exports: [
    CommonModule,
    FormsModule,
    FlexLayoutModule,
    MaterialModule,
    MatBadgeModule
  ]
})
export class SharedModule {
}
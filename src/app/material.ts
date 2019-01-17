import { MatButtonModule, MatCheckboxModule } from "@angular/material";
import { MatTableModule } from "@angular/material/table";

import { NgModule } from "@angular/core";

@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatTableModule],
  exports: [MatButtonModule, MatCheckboxModule, MatTableModule]
})
export class MaterialModule {}

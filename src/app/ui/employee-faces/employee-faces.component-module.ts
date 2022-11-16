import { NgModule } from '@angular/core';
import { EmployeeFacesComponent } from './employee-faces.component';
import {CommonModule} from "@angular/common";

@NgModule({
    imports: [
        CommonModule
    ],
  declarations: [EmployeeFacesComponent],
  providers: [],
  exports: [EmployeeFacesComponent]
})
export class EmployeeFacesComponentModule {
}

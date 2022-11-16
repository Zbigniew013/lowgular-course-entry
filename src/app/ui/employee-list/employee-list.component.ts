import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { EmployeeService } from '../../services/employee.service';
import { EmployeeModel } from '../../model/employee.model';

@Component({
  selector: 'employee-list',
  templateUrl: './employee-list.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeListComponent {
  constructor(private _employeeService: EmployeeService) {
  }
  // data$: Observable<EmployeeModel[] | null> = this._httpClient.get<EmployeeModel[]>('assets/data/employees.json');
  data$: Observable<EmployeeModel[] | null> = this._employeeService.getAll();
  // paragraph: string = 'Tekst który pojawi się w HTML';
  // data = [{name: 'Jacek'}, {name: 'Wojtek'}];
}

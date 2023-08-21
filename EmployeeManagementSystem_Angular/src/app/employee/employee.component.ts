import { Component,EventEmitter,Input,OnInit, Output } from '@angular/core';
import { Employee } from 'src/models/employee.model';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  @Input() employee : Employee;
  @Output() onRemoveEmployee = new EventEmitter<number>();
  @Output() onEditEmployee = new EventEmitter<number>();

  constructor(){
    this.employee ={
      firstname :'',
      lastname :'',
      birthdate : '',
      gender : '',
      education : '',
      company : '',
      jobExperience : '',
      salary   : 0,
      profile : '',
    };
  }
  ngOnInit(): void {
    console.log(this.employee);
  }
  deleteEmployeeClicked(){
    this.onRemoveEmployee.emit(this.employee.id);
  }

  editEmployeeClicked(){
    this.onEditEmployee.emit(this.employee.id);
  }
}

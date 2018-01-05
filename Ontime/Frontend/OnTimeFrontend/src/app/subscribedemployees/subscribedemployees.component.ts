import {Component, OnInit, Inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {GetemployeesService} from '../services/getemployees.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { routerTransition } from '../router.transitions';
import { Constants } from '../Constants'
import {Http, HttpModule} from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-subscribedemployees',
  templateUrl: './subscribedemployees.component.html',
  styleUrls: ['./subscribedemployees.component.css']
})
export class SubscribedemployeesComponent implements OnInit {
  myEmployees;
  dataSource;

  constructor(public getservice : GetemployeesService, public dialog: MatDialog) {
    getservice.getSubscribedEmployees().subscribe(data => {
      this.myEmployees = data;
      this.dataSource = new MatTableDataSource(this.myEmployees);
      //console.log(this.myEmployees);
    });
  }
  
  displayedColumns = ['employeeID','name','Lastname', 'Issues'];
  
  showIssues(id : number){

  }

  openDialog(id : number){
    let dialogRef = this.dialog.open(SubscribedemployeesComponent,{
      width : "1800px",
    });
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  ngOnInit() {
  }

}


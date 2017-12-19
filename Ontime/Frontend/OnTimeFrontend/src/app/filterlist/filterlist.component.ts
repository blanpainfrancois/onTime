import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {GetemployeesService} from '../services/getemployees.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { routerTransition } from '../router.transitions';
import { Constants } from '../Constants'
import {Http, HttpModule} from '@angular/http';

/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-filterlist',
  styleUrls: ['filterlist.component.css'],
  templateUrl: 'filterlist.component.html',
  animations: [routerTransition()]
})

export class TableFilter implements OnInit {
  error;
  employees;
  names;
  dataSource;
  logdata;



  constructor(public getservice : GetemployeesService ) {
    getservice.getAllEmployees().subscribe(data => {
      this.employees = data;
      this.dataSource = new MatTableDataSource(this.employees);
    });
    
    getservice.employeeToEmployer(5).subscribe(data =>{
      this.logdata = data;
      console.log(this.logdata);
    })
  }


  linkEmployees(naam){
    //alert("Pas op, " + firstName +  lastName +"!"); 
    console.log(naam);
  }

  displayedColumns = ['name','Lastname', 'isChecked'];

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
  }

}

export interface Employee {
  givenname: string;
  familyname : string;
  employeeID: number;
  username: string;

}





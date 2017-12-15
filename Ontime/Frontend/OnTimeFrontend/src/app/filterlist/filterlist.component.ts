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

  constructor(public getservice : GetemployeesService ) {
    getservice.getAllEmployees().subscribe(data => {

      this.employees = data;
      console.log(data);
      console.log(this.employees.givenName);
      console.log(this.employees.Lastname);
    });
  }

  displayedColumns = ['name','Lastname', 'isChecked'];
  //dataSource = new MatTableDataSource(employeesdata);
  dataSource = new MatTableDataSource(this.employees);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

  ngOnInit() {
  }

}

export interface employees {
  givenName: string;
  Lastname : string;
  isChecked: boolean;

}




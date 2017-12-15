import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {GetemployeesService} from '../services/getemployees.service';
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
  data : any;
  constructor() {

  }

  getemployeesService: GetemployeesService

  public getallemployees() {
    this.getemployeesService.getAllEmployees().subscribe((res: Response) => {
        this.data = res.json
    }, error => {
      this.error = JSON.parse(error)
    })
    console.log("success")
  }
  displayedColumns = ['name', 'isChecked'];
  dataSource = new MatTableDataSource(employeesdata);

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  ngOnInit() {
  }

}

export interface Employees {
  name: string;
  isChecked: boolean;

}
export const employeesdata: Employees[] = [
  {name: 'jan',isChecked: false}
];



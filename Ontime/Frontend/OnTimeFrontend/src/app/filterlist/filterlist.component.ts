import {Component, OnInit} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {GetemployeesService} from '../services/getemployees.service';
import { Router } from '@angular/router'
import { routerTransition } from '../router.transitions';
import { Constants } from '../Constants'

/**
 * @title Table with filtering
 */

@Component({
  selector: 'app-filterlist',
  styleUrls: ['filterlist.component.css'],
  templateUrl: 'filterlist.component.html',
  animations: [routerTransition()]
})

export class TableFilter implements OnInit{
  error;
  constructor(getemployeesService : GetemployeesService) {

    getemployeesService.getAllEmployees().subscribe(data => {

    }, error => {
      this.error = JSON.parse(error)
    })
  }

  ngOnInit()
    {

    }

  displayedColumns = ['name', 'isChecked'];
  dataSource;

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }

}


export interface Employees {
  name: string;
  isChecked: boolean;

}
export const employeesdata: Employees[] = [
  {name: 'jan',isChecked: false}
];



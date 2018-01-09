import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {GetemployeesService} from "../services/getemployees.service";
import {Router} from "@angular/router";
import {MatDialog} from "@angular/material";

@Component({
  selector: 'app-openissues',
  templateUrl: './openissues.component.html',
  styleUrls: ['./openissues.component.css']
})
export class OpenissuesComponent implements OnInit {

  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true}

  myEmployees;
  issue :any;
  dataSource;
  issueClosed;
  username;
  employee : any;
  issues : any;
  issueID : number;
  issueopen : boolean = false;
  index : number = 0;

  constructor(public getservice : GetemployeesService, public dialog: MatDialog, public router : Router ) {
    this.issue = [this.index];
    getservice.getissuesfromboss().subscribe(data => {
      this.issue = data;
      this.issue.forEach((issueArray ,index)=>{
        console.log(issueArray);
        if(issueArray.issueClosed == false){
          this.index++;
          this.dataSource = new MatTableDataSource(this.issue);
          console.log(issueArray.employee.username);
          console.log('dit issue is open');
        }
        else{
          console.log('dit issue is gesloten');
        }

      });

    });

  }


  displayedColumns = ['employeeID','name','Lastname'];
  goToIssues(id:number)
  {
    console.log(id);
    this.router.navigate(["/dashboard/issues", id])
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  ngOnInit() {
  }
}

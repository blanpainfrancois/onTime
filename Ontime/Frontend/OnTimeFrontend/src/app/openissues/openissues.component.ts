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
  aantalissueclosed : any = 0;
  myEmployees;
  issue :any;
  dataSource;
  issueClosed;
  username;
  reason : any ;
  employee : any;
  issues : any;
  issueID : number;
  issuetrue:any;
  issueopen : boolean = false;
  index : number = 0;
  Reason;

  constructor(public getservice : GetemployeesService, public dialog: MatDialog, public router : Router ) {
    this.issue = [];
    getservice.getissuesopenfromboss().subscribe(data => {
      this.issue = data;
      this.issue.forEach((issueArray,index)=>{
        console.log(issueArray);
            this.dataSource = new MatTableDataSource(this.issue);
          });
        });
  }


  displayedColumns = ['name','Lastname','Reden'];
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

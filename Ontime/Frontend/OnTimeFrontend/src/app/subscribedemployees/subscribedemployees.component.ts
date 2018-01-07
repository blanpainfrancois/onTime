import {Component, OnInit, Inject} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {GetemployeesService} from '../services/getemployees.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router'
import { routerTransition } from '../router.transitions';
import { Constants } from '../Constants'
import {Http, HttpModule} from '@angular/http';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import 'rxjs/add/operator/map';
import {NotificationService} from '../services/notification.service';

@Component({
  selector: 'app-subscribedemployees',
  templateUrl: './subscribedemployees.component.html',
  styleUrls: ['./subscribedemployees.component.css'],
 // template: '<simple-notifications [options]="options"></simple-notifications>'
})

export class SubscribedemployeesComponent implements OnInit {

  public options = {
    position: ["bottom", "right"],
    timeOut: 5000,
    lastOnBottom: true}

  myEmployees;
  issue :any;
  dataSource;
  employee : any;
  issueClosed;
  username;


  constructor(public getservice : GetemployeesService, public dialog: MatDialog, public router : Router ) {
    this.issue = [];
    this.employee = [];
    getservice.getSubscribedEmployees().subscribe(data => {
      this.myEmployees = data;
      this.dataSource = new MatTableDataSource(this.myEmployees);
    });
    getservice.getissuesfromboss().subscribe(data => {
      this.issue = data;
      this.issue.forEach((issueArray,index)=>{
          console.log(issueArray);
         if(issueArray.issueClosed == false){
           console.log(issueArray.employee.username);
           console.log('dit issue is open');
         }
         else{
           console.log('dit issue is gesloten');
         }
      });

    });

  }


  displayedColumns = ['employeeID','name','Lastname', 'Issues'];
  goToIssues(id:number)
    {
      console.log(id);
      this.router.navigate(["/dashboard/issues", id])
    }

  showIssues(id : number) {


    

/*
    openDialog(id:number)
    {
      let dialogRef = this.dialog.open(SubscribedemployeesComponent, {
        width: "1800px",
      });
    }*/
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // MatTableDataSource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }


  ngOnInit() {
  }

}



import {Component, OnInit, OnDestroy} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {GetemployeesService} from '../services/getemployees.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router'
import { routerTransition } from '../router.transitions';
import { Constants } from '../Constants'
import {Http, HttpModule} from '@angular/http';


@Component({
  selector: 'app-issues',
  templateUrl: './issues.component.html',
  styleUrls: ['./issues.component.css']
})
export class IssuesComponent implements OnInit, OnDestroy {
  myId : number;
  myName : string;
  myIssueTemp;
  myIssue;
  private sub : any;
  private subissue : any;
  dataSource;
  

  constructor(private route : ActivatedRoute, public client : GetemployeesService) {
   
     }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params =>
      this.myId = +params["id"]);
      //console.log("Dit zijn de issues");
      //console.log("werknemer met id: " + this.myId);
    this.client.getIssuesFromEmployee(this.myId).subscribe(data => {
        this.myIssueTemp = data['issues'];

        for (let i in this.myIssueTemp){
          //this.myIssue[i].timespan = data["createdAt"];
          if(this.myIssueTemp[i].issueClosed){
            this.myIssueTemp[i].issueClosed = "Arrived";
          }else{
            this.myIssueTemp[i].issueClosed = "Underway";
          }
        }
        console.log(this.myIssueTemp);

        this.myIssue = this.myIssueTemp;
        this.myName = data['givenname'] + " " + data['familyname'];
        this.dataSource = new MatTableDataSource(this.myIssue);
      })
  }
  displayedColumns = ["Status", "Reason", "Time"];
  
  ngOnDestroy(){
    this.sub.unsubscribe();
    //this.subissue.unsubscribe();
  }
}

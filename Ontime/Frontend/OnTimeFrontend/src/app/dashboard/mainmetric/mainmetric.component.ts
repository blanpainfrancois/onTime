import { Component, OnInit, ViewChild } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { MetricsService } from '../../services/metrics.service';
import { NotificationsService } from 'angular2-notifications';
import {MatDatepickerInputEvent} from '@angular/material/datepicker';



@Component({
  selector: 'app-mainmetric',
  templateUrl: './mainmetric.component.html',
  styleUrls: ['./mainmetric.component.css']
})
export class MainmetricComponent implements OnInit {
  lat: number;
  lng: number;
  zoom = 12;
  allOptions = false;

  user: User;
  startdate: Date;
  enddate: Date;

  losthours;
  countemployees;
  topreason;
  weekday;

  openissues;
  openissuescounter;
  noopenissues = true;

  public data: Array<any> = [];
  public labels: Array<any> = [];

  public barChartData: Array<any> = [{ data: this.data, label: 'Series A' }];


  private barChartOptions = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true,
          stepSize: 1
        }
      }]
    }
  };

  public barChartLegend = false;
  public barChartType = 'bar';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }

  constructor(
    private userService: UserService,
    private metricsService: MetricsService,
    private notificationService: NotificationsService
  ) {


    this.userService.getuser().subscribe(user => {
      this.user = new User();
      this.user.employerID = user['employerID'];
      this.user.username = user['username'];
      this.user.createdAt = user['createdAt'];
      this.user.identityID = user['identityID'];
      this.user.username = user['userName'];
    });

    this.getmetrics();
  }
  ngOnInit() {
    navigator.geolocation.getCurrentPosition(function(location) {
      this.lat = location.coords.latitude;
      this.lng = location.coords.longitude;
    });
  }

  getmetrics() {
    this.gethours();
    this.getcountemployees();
    this.gettopreason();
    this.gettopweekday();

    setInterval(() => {
      this.getopenissues();
    }, 5000);
  }

  gethours() {
    this.metricsService.getlosthoursofemployer().subscribe(data => {
      this.losthours = data + '';
    });
  }
  getcountemployees() {
    this.metricsService.getcountofemployees().subscribe(data => {
      this.countemployees = data + '';
    });
  }

  gettopreason() {
    this.metricsService.gettopreason().subscribe(data => {
      this.topreason = data;
    });
  }

  gettopweekday() {
    this.metricsService.gettopweekday().subscribe(data => {
      this.weekday = data;
    });
  }

  getopenissues() {
    this.metricsService.getopenissues().subscribe(
      data => {
        if (data === undefined) {
          this.noopenissues = true;
        } else {
          this.noopenissues = false;
        }

        this.openissues = data;

        if (this.openissuescounter < data.length) {
          this.notificationService.alert('you have an new absences.');
        }

        this.openissuescounter = data.length;
      },
      error => {
        this.noopenissues = true;
      }
    );
  }

  events: string[] = [];

  addstart(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);

    this.startdate = new Date(this.events[0]);

    this.updateGraph(this.startdate, this.enddate);
  }

  addend(type: string, event: MatDatepickerInputEvent<Date>) {
    this.events.push(`${type}: ${event.value}`);
    this.enddate = new Date(`${type}: ${event.value}`);
    this.updateGraph(this.startdate, this.enddate);
  }



  updateGraph(startDate: Date, endDate: Date) {
    if (startDate !== null && endDate !== null) {
      this.metricsService
        .getDataperiod(
          startDate.toLocaleDateString(),
          endDate.toLocaleDateString()
        )
        .subscribe(data => {
          data.forEach(element => {
            this.data.push(element.value);
            this.labels.push(element.key);
          });


    }
  }
  }
}

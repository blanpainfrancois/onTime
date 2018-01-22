import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from '../../models/user';
import { MetricsService } from '../../services/metrics.service';
import { NotificationsService } from 'angular2-notifications';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';



@Component({
  selector: 'app-mainmetric',
  templateUrl: './mainmetric.component.html',
  styleUrls: ['./mainmetric.component.css']
})
export class MainmetricComponent implements OnInit, OnDestroy {
  lat: number;
  lng: number;
  zoom = 13;
  allOptions = false;
  myPosition;

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
  datareceived;
  doughnutloaded;
  doughnutloaded2;
  interval;

  public doughnutChartLabels: string[] = [];
  public doughnutChartData: number[] = [];
  public doughnutChartLabels2: string[] = [];
  public doughnutChartData2: number[] = [];
  public doughnutChartType: string = 'doughnut';

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
    this.metricsinterval();
  }
  ngOnInit() {
    if (window.navigator && window.navigator.geolocation) {
      window.navigator.geolocation.getCurrentPosition(
        position => {
          this.myPosition = position,
            this.lat = position.coords.latitude,
            this.lng = position.coords.longitude
        }
      )
    }
    else {
      console.log("Locatie niet beschikbaar");
    }

    navigator.geolocation.getCurrentPosition(function (location) {
      this.lat = location.coords.latitude;
      this.lng = location.coords.longitude;

    });



  }

  getmetrics() {
    this.gethours();
    this.getcountemployees();
    this.gettopreason();
    this.gettopweekday();
    this.updateGraph();
    this.getsharesofemployees();
    this.countissues();


    setInterval(() => {
      this.getopenissues();

    }, 5000);
  }

  metricsinterval() {

    this.interval = setInterval(() => {
      this.gethours();
      this.getcountemployees();
      this.gettopreason();
      this.gettopweekday();

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





  updateGraph() {

    this.datareceived = false;


    this.metricsService
      .getDataperiod()
      .subscribe(data => {
        data.forEach(element => {
          this.data.push(element.value);
          this.labels.push(element.key);
        }
        );

        this.datareceived = true;

      })
  }

  getsharesofemployees() {

    this.doughnutloaded = false;
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];

    this.metricsService.getShareEmployee().subscribe(data => {

      data.forEach(element => {
        this.doughnutChartLabels.push(element.key);
        this.doughnutChartData.push(element.value);
      });

      this.doughnutloaded = true;

    })
  }

  countissues() {

    this.doughnutloaded2 = false;
    this.doughnutChartLabels2 = [];
    this.doughnutChartData2 = [];

    this.metricsService.getCountIssues().subscribe(data => {
      data.forEach(element => {
        this.doughnutChartLabels2.push(element.key);
        this.doughnutChartData2.push(element.value);
      });

      this.doughnutloaded2 = true;

    })
  }

  ngOnDestroy() { 
  if(this.interval) {
    clearInterval(this.interval);
  }
}
}

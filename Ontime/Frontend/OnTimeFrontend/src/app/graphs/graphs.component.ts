import { Component, OnInit, NgModule } from '@angular/core';
import {ChartsModule} from "ng2-charts/ng2-charts"
import {GetemployeesService} from "../services/getemployees.service"

@Component({
  selector: 'app-graphs',
  templateUrl: './graphs.component.html',
  styleUrls: ['./graphs.component.css']
})
export class GraphsComponent implements OnInit {
  topReasons;
  chartOption = {
    responsive: true
  };

  chartData = [
    { data: [330, 600, 260, 700], label: 'Account A' },
    { data: [120, 455, 100, 340], label: 'Account B' },
    { data: [45, 67, 800, 500], label: 'Account C' }
  ];

  chartLabels = ['January', 'February', 'Mars', 'April'];

  constructor(public getservice : GetemployeesService ) { 
    getservice.getTopReason().subscribe(data =>{
      this.topReasons = data;
    })
  }

  ngOnInit() {
  }

}

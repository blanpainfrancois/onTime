import { Component, OnInit } from '@angular/core';

import { fadeIn } from '../router.transitions';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations:[fadeIn()]
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

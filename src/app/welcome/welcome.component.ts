import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  
  Event='Angular Conference 2022'
  Date='12-jan-2022'
  Time='6 PM'
  Address='Electronincs City, Banglore,KA,India'
  constructor() { }

  ngOnInit() {
  }

}
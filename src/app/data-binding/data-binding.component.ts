import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  strDisp= "String Display";
  numDisp= 0;
  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-other',
  templateUrl: './other.component.html',
  styles:[`
    div{
        background-color: brown;
    }
`]
})
export class OtherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

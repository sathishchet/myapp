import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-another',
  template: `
   <h1><ng-content></ng-content></h1>
`,
  styles: [`
    h1 {
        border: solid 1px darkblue;
        
    }
    div {
        background: aqua;
    }
`]
})
export class AnotherComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}

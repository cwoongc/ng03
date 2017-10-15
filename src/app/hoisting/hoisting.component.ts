import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hoisting',
  templateUrl: './hoisting.component.html',
  styleUrls: ['./hoisting.component.css']
})
export class HoistingComponent implements OnInit {

  inBlock:string 
  outBlock:string

  constructor() { }

  ngOnInit() {

    var emotion = "sad";
    {
      let emotion:string = "happy";
      this.inBlock = emotion;
      console.log(emotion);
    }
    this.outBlock = emotion;
    console.log(emotion);
  }

}

import { Component, OnInit } from '@angular/core';
import { interval, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent{
  data = [
    {name: "1", color: "se"},
    {name: "2", color: "g"},
    {name: "3", color: "sfef"}
  ]

}

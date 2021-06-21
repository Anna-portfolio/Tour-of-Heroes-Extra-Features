import { Component } from '@angular/core';
declare const currentDate:any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  date = currentDate();

  title = 'Tour of Heroes - Extra Features';
}

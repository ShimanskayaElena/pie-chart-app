import { Component } from '@angular/core';
import { NgForm} from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  fruit = 'apples';

  // determine the data that we will send to the child component
  selectFruit (event: any) {
    this.fruit = (<HTMLInputElement>event.target).value;
  }
}

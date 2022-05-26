import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'typing-challenge';
  randomText = lorem.sentence();
  enteredText = '';

  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    console.log(target.value);
    this.enteredText = target.value;
  }
  

}

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
  
  // Returns a String value which is then assigned to the class 
  // There are three outcomes in total pending, correct and incorrect
  // pending : user has not yet typed the string
  // correct : user has typed the letter correctly
  // incorrect : user has not typed the letter correctly

  compare(randomLetter: string, enteredLetter: string) {
    if(!enteredLetter) {
      return 'pending';
    }
    return enteredLetter === randomLetter ? 'correct' :  'incorrect';
  }
  

}

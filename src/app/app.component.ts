import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { lorem } from 'faker';
import { NgIf } from '@angular/common';
import { CommonModule } from "@angular/common";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgIf, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  randomText = lorem.sentence();
  enteredText = '';
  onInput(event: Event) {
    const target = event.target as HTMLInputElement;
    const parsedValue = String(target.value);
  
    this.enteredText = parsedValue;

  }
  compare(randomLetter: string, enteredLetter: string){
    if(!enteredLetter) {
      return 'pending';
    }
    return randomLetter === enteredLetter ? 'correct' : 'incorrect';
  }
}

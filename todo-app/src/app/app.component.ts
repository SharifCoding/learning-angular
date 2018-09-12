import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Create an empty array to store the value captured from the input.
export class AppComponent {
  todoArray = [];

  // Add a click event to our button that pushes the value captured into “todoArray”.
  addTodo(value) {
    this.todoArray.push(value);
    // Use console.log(this.todoArray) to see Array value.
    console.log(this.todoArray);
  }
}

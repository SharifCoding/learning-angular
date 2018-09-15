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
    console.log('added:', this.todoArray);
  }

  // To add the delete functionality, we will use the “splice” array method and a for loop.
  // We will loop through “todoArray” and extract the item we want to delete.
  deleteItem(todo) {
    for(let i=0; i <= this.todoArray.length; i++){
      if(todo === this.todoArray[i]){
        this.todoArray.splice(i, 1);
        // Use console.log(this.todoArray) to see Array value.
        console.log('removed:', this.todoArray);
      }
    }
  }
}

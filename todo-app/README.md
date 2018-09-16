# Yet another Todo app
Building Todo app using Angular CLI. Credit to [SaidHayani@](https://medium.freecodecamp.org/@saidhayani).

![Todo-App](./img/TodoApp.png)

This project was generated with:
- [Node.js](https://nodejs.org/en/download/package-manager/) - Designed to build scalable network applications.
- [Angular CLI](https://github.com/angular/angular-cli) - A command line interface for Angular.
- [Bootstrap 4](http://getbootstrap.com/) - Build responsive, mobile-first projects on the web with the world's most popular front-end component library.
- [Google-fonts](https://fonts.google.com/) - Making the web more beautiful, fast, and open through great typography.
- [Material-icons](https://material.io/icons/) - Delightful, beautifully crafted symbols for common actions and items.

### Table of contents
- [Installation](#installation) - installing all dependencies
- [Initial setup](#initial-setup) - initial setup of the app
- [Adding an item](#adding-an-item) - submit a form in Angular
- [Removing an item](#removing-an-item) - add an event in Angular

#### Installation
To run this project you will need to download it onto your local machine, navigate inside the folder and install all dependencies by entering the following command on your terminal window:
```
npm install
```
Finally to run the server enter the following command in your terminal window:
```
ng serve
```
Open [http://localhost:4200](http://localhost:4200) to view it in the browser. If you make any changes and save the changes process will automatically refresh and you will be able to see the results in the browser.

If you want to end the process hold `control` and press `c` in mac, if you are not using mac hold `ctrl` and press `c`.

#### Initial setup
To capture the input value in Angular, use the `ngModel` directive. A variable (`#`) is inserted as an attribute inside the input element.
```html  
<input type="text" #todo class="form-control" placeholder="Add Todo" name="todo" ngModel>
```
Add a click event to our button that pushes the value captured into “todoArray”.
```html
<span class="input-group-text"
(click)="addTodo(todo.value)">Add</span>
```

#### Adding an item
To fetch data stored in `todosArray`, use the `*ngFor` directive to loop through the array and extract the data:
```html
<div class="data">
  <ul class="list-instyled">
    <li *ngFor="let todo of todoArray">{{todo}}</li>
  </ul>
</div>
```
The data will now be fetched automatically when clicking the add button.
![Todo-Add](./img/TodoStep1.png)

#### Removing an item
Add delete functionality using the `splice` array method and a for loop, this will loop through `todoArray` and extract the item we want to delete.
```js
for(let i=0; i <= this.todoArray.length; i++){
  if(todo === this.todoArray[i]){
    this.todoArray.splice(i, 1);
  }
}
```
Add a `(click)` event to delete icon and give it `todo` as parameter:
```html
<li *ngFor="let todo of todoArray">{{todo}} <i
(click)="deleteItem(todo)" class="material-icons">delete</i>
</li>
```
![Todo-Delete](./img/TodoStep2.png)

#### Further Reading
- [*ngFor](https://angular.io/guide/structural-directives) - How Angular manipulates the DOM with structural directives.
- [NgModel](https://angular.io/api/forms/NgModel) - Creates a FormControl instance from a domain model and binds it to a form control element.
- [Array.prototype.splice( )](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) - Method changes the contents of an array by removing existing elements and/or adding new elements.
- [Angular Forms Fundamental](https://angular.io/guide/forms) - Build an Angular form with a component and template.
- [ng-book](https://blog.ng-book.com/the-ultimate-guide-to-forms-in-angular-2/) - The Ultimate Guide to Forms in Angular.

[Return to create your first Angular app](../README.md)

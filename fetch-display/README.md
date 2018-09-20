# FetchDisplay
Our app will fetch data from a mock API service and display it in a beautiful UI. Credit to [Gary Simon](https://www.youtube.com/watch?v=z4JUm0Bq9AM).

![fetch-posts](./img/fetchPosts.png)

This project was generated with:
- [Node.js](https://nodejs.org/en/download/package-manager/) - Designed to build scalable network applications.
- [Angular CLI](https://github.com/angular/angular-cli) - A command line interface for Angular.

### Table of contents
- [Installation](#installation) - installing all dependencies
- [The Angular 6 Module File](#the-angular-6-module-file) - generating components taken care by CLI
- [Components Tutorial](#components-tutorial) - basic building blocks of your Angular app
- [Templating](#templating) - wrapping everything in a container & Material Icons setup
- [Routing Tutorial](#routing-tutorial) - import components into the Routes array
- [Services](#services)
- [HTTP Client](#http-client)
- [Fetching More Data from the API](#fetching-more-data-from-the-api)
- [Class Binding](#class-binding)
- [Animation Tutorial](#animation-tutorial)

#### Installation
To run this project you will need to download it onto your local machine, navigate inside the folder and install all dependencies by entering the following command on your terminal window:
```
npm install
```
Finally to run the server enter the following command in your terminal window:
```
ng serve -o
```
Open [http://localhost:4200](http://localhost:4200) to view it in the browser. If you make any changes and save the changes process will automatically refresh and you will be able to see the results in the browser.

If you want to end the process hold `control` and press `c` in mac, if you are not using mac hold `ctrl` and press `c`.

#### The Angular 6 Module File
The [app.module.ts](./src/app/app.module.ts) file looks like this:
```ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({ 
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
```
Whenever CLI is used to generate components and services, it will automatically update this file to import and add them to the `@NgModule` decorator. Components are added to the declarations array, and services are added as providers. Various imports is added to the imports array (i.e. animations). This is an important file which will need to visit routinely. The CLI will take care of things for the most part, especially when generating components, but when generating services and performing some other tasks, manual input is required.

#### Components Tutorial
A component in Angular provides you with the basic building blocks of your Angular app. When we used the Angular CLI to generate our project, it created a single component. When you use the CLI to generate components, it creates 4 files:
```bash
> src
  > app
    app.component.html
    app.component.scss (or .css)
    app.component.spec.ts
    app.component.ts
```
- The HTML file is the HTML template associated with that component.
- The SCSS or CSS is the associated CSS rulesets for that component.
- The .spec.ts file is for testing purposes.
- The .ts file is the actual component file. It defines a number of things.

Heres an app.component.ts file:
```ts
// import components and service files
import { Component } from '@angular/core';

// `@Component` decorator is an object with associated property/value pairs that defines important stuff associated with this component
@Component({
  // provides component with a unique identifier used in other areas of the app
  selector: 'app-root',
  // where this component's HTML and CSS files are located
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  // animation properties also added here
})

// logic section of the component file, where properties, dependency injection and methods are defined
export class AppComponent {
  title = 'app';
}
```
Now the basics of a component covered, let's create a few of our own! In the console, run:
```bash
> ng generate component sidebar
CREATE src/app/sidebar/sidebar.component.html (26 bytes)
CREATE src/app/sidebar/sidebar.component.spec.ts (635 bytes)
CREATE src/app/sidebar/sidebar.component.ts (274 bytes)
CREATE src/app/sidebar/sidebar.component.scss (0 bytes)
UPDATE src/app/app.module.ts (479 bytes)
```
Here, we've told the CLI to generate a component with the name of sidebar. It outputs the 4 files it created, along with the app module file it updated! Let's generate a few more components. Run the following commands to generate 3 more components:
```bash
> ng g c posts
> ng g c users
> ng g c details
```
Now, you should have a total of 5 components, 4 of which we just created ourselves.

#### Templating
We want our app to have a sidebar with some icons, where it will always be present in the app. The <b>sidebar</b> component is already generated with the CLI. In the <b>src/app/app.component.html</b> file. You will see all of the boilerplate HTML the CLI generated, and what you see in the browser. Remove all of that and type this:
```html
<div id="container">
  <app-sidebar></app-sidebar>

  <div id="content">
    <router-outlet></router-outlet>
  </div>
</div>
```
We've wrapped everything in a <b>container</b> id. Then, you will notice a custom HTML element called <b>app-sidebar</b>, when the CLI generated the sidebar component, it made the component's selector value <i>app-sidebar</i>. Now, anything defined in that component's HTML, will be displayed where <i>app-sidebar</i> is defined.
Another very important element is the <b>router-outlet</b>, added by the CLI with the <i>--routing</i> flag. This element defines where any components defined by their routes will be displayed. Defining the sidebar templating in the <b>/src/app/sidebar/sidebar.component.html</b> file:
```html
<nav>
  <ul>
    <li>
      <a routerLink="">
        <i class="material-icons">supervised_user_circle</i>
      </a>
    </li>
    <li>
      <a routerLink="posts">
        <i class="material-icons">message</i>
      </a>
    </li>
  </ul>
</nav>
```
Instead of <i>href</i>, we use <i>routerLink</i> to direct the user to different routes. Will be using <b>Material Icons</b> by adding the following lines in <b>/src/index.html</b> between the `<head>` tags:
```html
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link href="https://fonts.googleapis.com/css?family=Montserrat:300,700" rel="stylesheet">
```
Importing material icons first, and then a Google web font called Montserrat.

#### Routing Tutorial
Visiting the <b>/src/app/app-routing.module.ts</b> file to make the 2 icons work when they're clicked:
```ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
```
We need to import our components and add them to the Routes array:
```ts
...
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {
    path: '',
    component: UsersComponent
  },
  {
    path: 'details/:id',
    component: DetailsComponent
  },
  {
    component: PostsComponent
  },
];
...
```
We've imported our 3 components (users, details, posts), and then defined three objects in the Routes array.
- The first object specifies that the `UsersComponent` will be the default component that loads on the root path. We leave the path value `empty` for this.
- The next route is for a user details section. We've specified a wildcard named `id`. We'll use this to fetch that value from the router in order to retrieve the correct user details.
- Then another route for a component and path called `posts`.

![fetch-users](./img/fetchUsers.png)

#### Services

#### HTTP Client

#### Fetching More Data from the API

#### Class Binding

#### Animation Tutorial

#### Further Reading
- [Angular Components](https://angularfirebase.com/lessons/angular-components-basics-top-ten/) - Angular Components - Ten Basic Concepts.

[Return to create your first Angular app](../README.md)

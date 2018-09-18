# FetchDisplay
Our app will fetch data from a mock API service and display it in a beautiful UI. Credit to [Gary Simon](https://www.youtube.com/watch?v=z4JUm0Bq9AM).

![contact-list](./contact-list.png)

This project was generated with:
- [Node.js](https://nodejs.org/en/download/package-manager/) - Designed to build scalable network applications.
- [Angular CLI](https://github.com/angular/angular-cli) - A command line interface for Angular.

### Table of contents
- [Installation](#installation) - installing all dependencies
- [The Angular 6 Module File](#the-angular-6-module-file)
- [Components Tutorial](#components-tutorial)
- [Templating](#templating)
- [CSS](#css)
- [Routing Tutorial](#routing-tutorial)
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
Whenever you use the CLI to generate components and services, it will automatically update this file to import and add them to the @NgModule decorator. Components are added to the declarations array, and services are added as providers. You will also find yourself adding various imports to the
imports array. For instance, when we want to add animations, we will add them here.
If you're a little confused at this point, don't worry. Just understand that this is an important file that you will need to visit routinely. The CLI will take care of things for the most part, especially when generating components, but when generating services and performing some other tasks, you will need to visit this file. You'll see as a proceed.

#### Components Tutorial

#### Templating

#### CSS

#### Routing Tutorial

#### Services

#### HTTP Client

#### Fetching More Data from the API

#### Class Binding

#### Animation Tutorial

#### Further Reading
- [Angular Components](https://angularfirebase.com/lessons/angular-components-basics-top-ten/) - Angular Components - Ten Basic Concepts.

[Return to create your first Angular app](../README.md)

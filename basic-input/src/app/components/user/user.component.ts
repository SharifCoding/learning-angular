import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name: string;
  age: number;
  email: string;
  address: Address;
  hobbies: string[];

  constructor() {
    console.log('constructor ran...');
  }
  ngOnInit() {
    console.log('ngOnInit ran...');

    this.name = 'Homer Simpson';
    this.age = 39;
    this.email = 'homerjsimpson@springfield.com';
    this.address = {
      street: '742 Evergreen Terrace',
      city: 'Springfield',
      country: 'USA',
    }
    this.hobbies = ['Eat Donuts', 'Eat Donuts', 'Eat Everything'];
  }
}

interface Address {
  street: string,
  city: string,
  country: string,
}

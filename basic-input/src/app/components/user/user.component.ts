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
    this.hobbies = ['Eat Donuts', 'Eat More Donuts', 'Eat Everything'];
  }

  onClick(){
    this.name = 'Merge Simpson';
    this.hobbies.push('New Hobby');
    console.log('onClick()');
  }

  addHoddy(hobby){
    this.hobbies.unshift(hobby);
    console.log('addHoddy(', hobby, ')');
    return false;
  }

  removeHobby(hobby){
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i, 1);
        console.log('removeHobby(', hobby, ')');
      }
    }
  }
}

interface Address {
  street: string,
  city: string,
  country: string,
}

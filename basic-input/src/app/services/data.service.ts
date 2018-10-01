import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';
// https://stackoverflow.com/questions/50949781/observable-map-is-not-a-function
// import 'rxjs/add/operator/map';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http:Http) {
    console.log('Data service connected');
  }

  getPosts(){
    // return this.http.get('https://jsonplaceholder.typicode.com/posts')
    return this.http.get('../../assets/getposts.json')
      .pipe(map(response => response.json()));
  }
}

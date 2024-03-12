import { Component } from '@angular/core';
import {
  AngularFireDatabase,
  AngularFireList,
} from '@angular/fire/compat/database';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'pepper';
  cuisines: Observable<any[]>;
  restaurant: Observable<any>; // Adjust the type according to your data structure

  constructor(private af: AngularFireDatabase) {
    // Use private access modifier
    this.cuisines = this.af.list<any>('/cuisines').valueChanges();
    this.restaurant = this.af.object<any>('/restaurant').valueChanges();
  }

  add() {
    this.af.list<any>('/cuisines').push({
      name: 'Asian',
      details: 'Lots of noodles!',
      discription: 'This is a description for Asian',
    });
  }
  update() {
    this.af.object('/favorites/1/11').set(true);
  }
  //   this.af.object('/favorites/1/11').set(null);
  // this.af.object('/favorites/1/11').set(true);
  // this.af.object('/restaurant').update({
  //   name: 'New Name',
  //   rating: 5,
  // });
  remove() {
    this.af
      .object('/restaurant/')
      .remove()
      .then((x) => console.log('Success'))
      .catch((error) => console.log('error', error));
  }
}

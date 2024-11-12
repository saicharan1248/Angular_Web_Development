import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent implements OnInit {
  users: any[] = [];

  constructor(private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this.http.get<any>('https://reqres.in/api/users').subscribe((response) => {
      this.users = response.data;
    });
  }

  viewUserDetails(id: number): void {
    this.router.navigate(['/users', id]);
  }
}

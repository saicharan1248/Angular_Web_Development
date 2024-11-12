import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('id');
    this.http
      .get<any>(`https://reqres.in/api/users/${userId}`)
      .subscribe((response) => {
        this.user = response.data;
      });
  }
}

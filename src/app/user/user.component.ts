import {Component, Input, OnInit} from '@angular/core';
import {UserModel} from '../../Models/userModel';
import {ActivatedRoute, Route, Router} from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})

export class UserComponent implements OnInit {
  @Input()
  users: UserModel[];
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
    this.users = this.activatedRoute.snapshot.data.allUsers;
  }

  ngOnInit() {
  }

  navigate(user: UserModel) {
    this.router.navigate([user.id, 'posts'],
      {
        queryParams: {idOfUser: user.id},
        relativeTo: this.activatedRoute
      });
  }
}

import { Injectable } from '@angular/core';
import {Resolve} from '@angular/router';
import {UserModel} from '../../Models/userModel';
import {UserService} from '../services/user.service';

@Injectable({
  providedIn: 'root'
})
export class UsersResolverService implements Resolve<UserModel> {

  constructor(private userService: UserService) { }
  resolve() {
    return this.userService.getAllUsers();
  }
}

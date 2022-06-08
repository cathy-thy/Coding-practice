import { Injectable } from '@angular/core';
import { User } from './user.module';

@Injectable(
  // {
  // providedIn: 'root'
  // }
)
export class UserregisterService {

  users: User[]=[
    new User("User1", "96541234", "user1@gmail.com", "Sha Tin", "A123456(7)", "A1234567", "Hong Kong"),
    new User("User2", "97845612", "user2@gmail.com", "Tsim Sha Tsui", " B123456(7)", "B1234567", "Hong Kong"),
    new User("User3", "647851247", "user3@gmail.com", "Tai Koo", "C123456(7)", "C1234567", "Hong Kong")
  ]

  constructor() { }

  getUsers()
  {
    return this.users;
  }

  addUser(name:string, mobileno:string, email:string, 
    address:string, id:string, taxno:string, 
    location:string)
  {
    const newuser = new User (name, mobileno, email, address, id, taxno, location);
    this.users.push(newuser);
    console.log(this.users);
  }
}

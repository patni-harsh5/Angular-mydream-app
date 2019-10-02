import { Component, OnInit, Input } from '@angular/core';
import {UserData} from './shared/userdata.service';
import {DepartmentData} from './shared/departmentdata.services';

@Component({
  selector: 'app-mycomp',
  templateUrl: './mycomp.component.html',
  styleUrls: ['./mycomp.component.css']
})
export class MycompComponent implements OnInit {
   
    isFavorite = true;
    totallikes = 200;
    
  constructor(user:UserData,dept:DepartmentData) {
      this.users=user.loadUsers();
      this.depts = dept.loaddepartment();
  }
  
  @Input()
  mycity = "pune"
  propic = "https://images.unsplash.com/photo-1497316730643-415fac54a2af?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"
  pastePic = ""

  ngOnInit() {
  }
users;
depts;

callme(){
    console.log("i am called");
}

shoppingList = []

// projects=['proj1','proj2','proj3']
}

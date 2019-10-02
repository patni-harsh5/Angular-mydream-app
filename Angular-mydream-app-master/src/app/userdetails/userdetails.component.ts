import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userdetails',
  templateUrl: './userdetails.component.html',
  styleUrls: ['./userdetails.component.css']
})
export class UserdetailsComponent implements OnInit {
myid;
  constructor(private ac:ActivatedRoute) { }

  ngOnInit() {
    this.myid=this.ac.snapshot.params['id'];
  }

}

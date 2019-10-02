import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-likes',
  templateUrl: './likes.component.html',
  styleUrls: ['./likes.component.css']
})
export class LikesComponent implements OnInit {
    @Input() totallikes = 0;
    @Input() iLike = false;
    
    onClick(){
        this.iLike = !this.iLike;
        this.totallikes += this.iLike ? 1 : -1;
    }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-component',
  templateUrl: './favorite-component.component.html',
  styleUrls: ['./favorite-component.component.css']
})
export class FavoriteComponentComponent implements OnInit {
    @Input()
    isFavorite = false;
    
    onClick(){
        this.isFavorite = !this.isFavorite;
    }
    
    
  constructor() { }

  ngOnInit() {
  }

}

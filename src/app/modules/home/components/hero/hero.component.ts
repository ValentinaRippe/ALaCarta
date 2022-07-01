import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeRes } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  searchEmit!: RecipeRes[]
  @Output() search = new EventEmitter<RecipeRes[]>();

  constructor() { }

  ngOnInit(): void {

  }

  onSearch(search: RecipeRes[]) {
    this.search.emit(search);
  }


}

import { Component, Input, OnInit } from '@angular/core';
import { RecipeRes } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-list-recipes',
  template: `
  <div class="contCards">
    <div *ngFor="let recipeRes of recipes">
    <app-card-recipe [recipeRes]='recipeRes'></app-card-recipe>
  </div>
  </div>

  `,
  styleUrls: ['./list-recipes.component.scss']
})
export class ListRecipesComponent implements OnInit {
   @Input()  recipes: RecipeRes[] = []

  constructor() { }

  ngOnInit(): void {

  }

}

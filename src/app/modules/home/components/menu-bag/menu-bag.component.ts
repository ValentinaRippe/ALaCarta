import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/service/recipes/recipes.service';
import { RecipeRes } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-menu-bag',
  template: `
  <div class="contCards">
    <div *ngFor="let recipeRes of recipes">
      <app-card-recipe [recipeRes]='recipeRes'></app-card-recipe>
    </div>
  </div>
  `,
  styleUrls: ['./menu-bag.component.scss'],
})
export class MenuBagComponent implements OnInit {

  @Input() recipes!: RecipeRes[]
  bag = true
  constructor() { }

  ngOnInit(): void {
  }


}

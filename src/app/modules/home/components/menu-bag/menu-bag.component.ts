import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/service/recipes/recipes.service';
import { RecipeRes } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-menu-bag',
  templateUrl: './menu-bag.component.html',
  styleUrls: ['./menu-bag.component.scss']
})
export class MenuBagComponent implements OnInit {
  recipes: RecipeRes[] = []
  constructor(private recipeSvc: RecipesService) { }

  ngOnInit(): void {
    this.recipeSvc.getRecipe('All-Butter Pie Crust').subscribe(
      res=> console.log(res)
    )
  }

}

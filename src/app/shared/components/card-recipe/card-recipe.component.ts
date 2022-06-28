import { Component, Input, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/service/recipes/recipes.service';
import { RecipeCrdProv, RecipeRes } from '../../models/recipe.model';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss']
})
export class CardRecipeComponent implements OnInit {
  storedRecipe: string[] = JSON.parse(localStorage.getItem('storedRecipe')!)
  recipe: RecipeCrdProv = {
    uri: '',
    label: '',
    image: '',
    mealType: []
  }

  @Input() recipeRes: RecipeRes = {
    recipe: this.recipe
  }
  constructor(private recipeSrv: RecipesService) { }

  ngOnInit(): void {
    localStorage.setItem('storedRecipe', JSON.stringify(this.storedRecipe))
  }

  recipeSaved(id: string) {
    if(this.storedRecipe.includes(id)) {
      this.storedRecipe.splice(this.storedRecipe.indexOf(id), 1)
    } else {
      this.recipeSrv.savedRecipe.subscribe(res=> console.log(res))
      this.storedRecipe.push(id)
    }
    localStorage.setItem('storedRecipe', JSON.stringify(this.storedRecipe))

    console.log(JSON.parse(localStorage.getItem('storedRecipe')!))
  }

}

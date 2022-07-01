import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { RecipeCrdProv, RecipeRes } from '../../models/recipe.model';

@Component({
  selector: 'app-card-recipe',
  templateUrl: './card-recipe.component.html',
  styleUrls: ['./card-recipe.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardRecipeComponent implements OnInit{
  storedRecipe: string[] = JSON.parse(localStorage.getItem('storedRecipe')!) || []
  recipe: RecipeCrdProv = {
    uri: '',
    label: '',
    image: '',
    mealType: []
  }

  @Input() recipeRes: RecipeRes = {
    recipe: this.recipe
  }
  @Output() savedRecipe = new EventEmitter<string[]>()
  constructor() {}

  ngOnInit(): void {
    if(localStorage.getItem('storedRecipe') === undefined){
      localStorage.setItem('storedRecipe', '[]')
    }else{
      localStorage.setItem('storedRecipe', JSON.stringify(this.storedRecipe))
    }
  }

  recipeSaved(id: string) {
      this.storedRecipe = JSON.parse(localStorage.getItem('storedRecipe')!)
      if(this.storedRecipe.includes(id)) {
        this.storedRecipe.splice(this.storedRecipe.indexOf(id), 1)
      } else {
        this.storedRecipe.push(id)
      }
      localStorage.setItem('storedRecipe', JSON.stringify(this.storedRecipe))
      this.savedRecipe.emit(JSON.parse(localStorage.getItem('storedRecipe')!))
    }

}

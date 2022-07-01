import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/service/recipes/recipes.service';
import { RecipeRes } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storedInit: string[] = JSON.parse(localStorage.getItem('storedRecipe')!) || []
  recipes: RecipeRes[] = []
  recipesSaved!: RecipeRes[]
  links!: {
    next: {
      href: string
    },
    prev: {
      href: string
    }
  }
  load: boolean = true
  constructor(private recipeSvc: RecipesService) { }

  ngOnInit(): void {
    this.recipeSvc.getRecipes()
      .subscribe(((res: any) => {
        console.log(res)
        this.recipes = res.hits
        this.links = res._links
        this.load = false
      }))
    this.storedRecipe(this.storedInit)
  }

  getRecipes(api: string) {
    this.recipeSvc.getRecipesPage(api)
      .subscribe((res: any) => {
        console.log(res)
        this.recipes = res.hits
      })
  }

  next() {
    this.getRecipes(this.links.next.href)
  }
  prev(){
    this.getRecipes(this.links.prev.href)
  }

  onSearch(search: RecipeRes[]) {
    console.log(search, 'homeSearch')
    this.recipes = search
  }

  storedRecipe(idsSaved: any) {
    this.recipesSaved = []
    idsSaved.map((id: any) =>
      this.recipeSvc.getRecipe(id).subscribe((res: any) => {
        return this.recipesSaved.push(res)
      })
    );
  }

}

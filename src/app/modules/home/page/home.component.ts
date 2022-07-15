import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/service/recipes/recipes.service';
import { RecipeRes, RecipePages } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  storedInit: string[] = JSON.parse(localStorage.getItem('storedRecipe')!) || []
  recipes: RecipeRes[] = []
  recipesData: RecipePages = {
    hits: this.recipes,
    _links: {
      next: {
        href: ''
      },
      self: {
        href: ''
      }
    }
  }
  currentPage: number = 0

  recipesSaved!: RecipeRes[]
  load: boolean = true


  constructor(private recipeSvc: RecipesService) { }

  ngOnInit(): void {
    this.recipeSvc.getRecipes()
      .subscribe(((res: any) => {
        this.recipesData = res
        this.recipes = this.recipesData.hits
        this.recipesData._links = res._links
        this.load = false
      }))
    this.storedRecipe(this.storedInit)
  }

  getRecipesNext(api: string, cur: number) {
    this.load = true
    this.recipeSvc.getRecipesPage(api)
      .subscribe((res: any) => {
          this.recipesData = {
            hits: [...this.recipesData.hits, ...res.hits],
            _links: res._links
          }
          this.recipes = this.recipesData.hits.slice(cur, cur + 20)
          this.load = false
      })
  }

  getRecipesPrev(cur: number) {
    this.recipes = this.recipesData.hits.slice(cur, cur + 20)
  }


  next() {
    this.getRecipesNext(this.recipesData._links.next.href, this.currentPage += 20)
  }

  prev() {
    this.load = true
    this.getRecipesPrev(this.currentPage -= 20)
    this.load = false
  }

  onSearch(search: string) {
    this.recipes = []
    this.recipesData.hits = []
    this.recipeSvc.getRecipes(search)
      .subscribe(((res: any) => {
        this.recipesData.hits = res.hits
        this.recipes = this.recipesData.hits
        this.recipesData._links = res._links
        this.load = false
      }))
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

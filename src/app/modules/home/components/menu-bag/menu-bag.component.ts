import { Component, OnInit } from '@angular/core';
import { RecipesService } from 'src/app/core/service/recipes/recipes.service';
import { RecipeRes } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-menu-bag',
  templateUrl: './menu-bag.component.html',
  styleUrls: ['./menu-bag.component.scss'],
})
export class MenuBagComponent implements OnInit{
  recipes: RecipeRes[] = [];
  idRecipe = localStorage.getItem('storedRecipe')!;
  constructor(private recipeSvc: RecipesService) {}

  ngOnInit(): void {
    this.storedRecipe(this.idRecipe)
  }


  storedRecipe(id:string){
    JSON.parse(id).map( (id: any) =>
      this.recipeSvc.getRecipe(id).subscribe((res:any) =>{
       if(res){
      return  this.recipes.push(res)
       }
       return console.log('Error')
      })
    );
  }

}

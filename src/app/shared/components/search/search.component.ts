import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounce, debounceTime, Subject } from 'rxjs';
import { RecipesService } from 'src/app/core/service/recipes/recipes.service';
import { RecipeRes } from '../../models/recipe.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchKeyup = new Subject<any>();
  @Output() search = new EventEmitter<RecipeRes[]>();

  constructor( private recipeSvc: RecipesService) { }

  ngOnInit(): void {
    this.searchKeyup.pipe(debounce(i=>i.length>2?i:'')).subscribe((search: string) => {
      this.getRecipes(search)
    }), (err: any) => {
      console.log(err)
    }
  }


  OnSearch(search: any) {
    this.searchKeyup.next(search.target.value)
  }

  getRecipes(search: string) {
    this.recipeSvc.getRecipes(search)
      .subscribe((res: any) => {
        console.log(res, 'search')
        this.search.emit(res.hits)
      }), (err: any) => {
        console.log(err)
      }
  }
}

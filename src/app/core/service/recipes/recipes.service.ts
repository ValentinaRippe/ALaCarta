import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  private api = environment.apiProv
  private apiKey = environment.apiKey
  private appId = environment.app_id
  private appKey = environment.app_key


  constructor(private http: HttpClient) { }

  getRecipes(){
    return this.http.get(this.api + 'type=public' + '&q=all' + this.appId + this.appKey )
  }
  getRecipe(query:string){
    return this.http.get(this.api + 'type=public' + `&q=${query}` + this.appId + this.appKey)
  }

  savedRecipe(){
    let svd = localStorage.getItem('storedRecipe')
    return console.log(svd)
  }

  searchRecipe(){

  }
}

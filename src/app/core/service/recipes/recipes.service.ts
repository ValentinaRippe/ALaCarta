import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  //Api temporary
  private api = environment.apiProv
  private appId = environment.app_id
  private appKey = environment.app_key
  private recipeSaved = new BehaviorSubject<boolean>(false);

  constructor(private http: HttpClient) { }


  getRecipes(){
    return this.http.get(this.api + '?type=public&q=ab' + this.appId + this.appKey )
  }
  getRecipe(id:string){
    return this.http.get(this.api + `/${id}?type=public` + this.appId + this.appKey)
  }

  get savedRecipe(){
    return this.recipeSaved.asObservable()
  }

  searchRecipe(){

  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError } from 'rxjs';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class RecipesService {
  //Api temporary
  private api = environment.apiProv
  private appId = environment.app_id
  private appKey = environment.app_key
  private recipeSaved = new BehaviorSubject<boolean>(false);

  toast = Swal.mixin({
    toast: true,
    showConfirmButton: false,
    timer: 1000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  constructor(private http: HttpClient) { }


  getRecipes(query: string = 'ab') {
    return this.http
      .get(this.api + `?type=public&q=${query}` + this.appId + this.appKey)
      .pipe(
        catchError(() => {
          return this.toast.fire({
            icon: 'error',
            title: 'Api error',
          })
        })
      )
  }
  getRecipesPage(url:string){
    return this.http.get(url)
    .pipe(
      catchError(() => {
        return this.toast.fire({
          icon: 'error',
          title: 'Api error',
        })
      })
    )
  }
  getRecipe(id: string) {
    return this.http
      .get(this.api + `/${id}?type=public` + this.appId + this.appKey)
      .pipe(
        catchError(() => {
          return Swal.fire({
            icon: 'error',
            title: 'Api error',
            text: 'You may not make more than 10 requests per minute',
            timer: 3000,
            timerProgressBar: true,
          })
        })
      )
  }

  get savedRecipe() {
    return this.recipeSaved.asObservable()
  }

  searchRecipe() {

  }
}

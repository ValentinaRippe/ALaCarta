import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import {MatIconModule} from '@angular/material/icon';
import { SearchComponent } from './components/search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CardRecipeComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    CardRecipeComponent,
    SearchComponent
  ]
})
export class SharedModule { }

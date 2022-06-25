import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CardRecipeComponent } from './components/card-recipe/card-recipe.component';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [
    NavbarComponent,
    CardRecipeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatIconModule
  ],
  exports:[
    NavbarComponent,
    CardRecipeComponent
  ]
})
export class SharedModule { }

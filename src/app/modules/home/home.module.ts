import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './page/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { ListRecipesComponent } from './components/list-recipes/list-recipes.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MenuBagComponent } from './components/menu-bag/menu-bag.component';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    HomeComponent,
    HeroComponent,
    ListRecipesComponent,
    MenuBagComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatIconModule
  ]
})
export class HomeModule { }

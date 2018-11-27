import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ArtistmusicComponent} from './artistmusic/artistmusic.component';
import {ProductlistComponent} from './productlist/productlist.component';
import { provideRoutes } from "@angular/router";

const routes: Routes = [
  { path: 'music', component: ArtistmusicComponent },
  { path: '', component: ProductlistComponent}
];

export const Routes_Provider = [
  provideRoutes(routes),
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
  
export class AppRoutingModule {

  

 }

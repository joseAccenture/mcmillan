// import { NgModule }             from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import { AppForm }      from './scripts/app.form';
// const routes: Routes = [
//   { path: './scripts/app.form',  component: AppForm },
//
// ];
// @NgModule({
//   exports: [ RouterModule, routes],
//   imports: [ RouterModule.forRoot(routes) ]
// })
// export class AppRoutingModule {}

import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppForm }   from './scripts/app.form';
import { AppHome }   from './scripts/app.home';


const routes: Routes = [
  { path: 'form', component: AppForm },
  { path: 'home', component: AppHome },
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

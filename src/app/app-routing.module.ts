import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { FootComponent } from './foot/foot.component';

const routes: Routes = [
  {path: 'navbar-component', component: NavbarComponentComponent},
  {path: 'foot-component', component: FootComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }

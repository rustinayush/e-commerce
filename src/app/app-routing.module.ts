import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/products/products.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { CateooryComponent } from './components/cateoory/cateoory.component';
import { DetailComponent } from './components/detail/detail.component';

const routes: Routes = [
  // {path:'', redirectTo:'produ', pathMatch:"full"},
  // {path:'', component:CateooryComponent},
  {path: '', redirectTo:"cart", pathMatch: "full" },
  {path:'products', component:ProductComponent},
  {path:'cart', component:CartpageComponent},
  {path:'category', component:CateooryComponent},
  { path: 'jewellery/:id', component: DetailComponent },
  { path: 'mens-clothing/:id', component: DetailComponent },
  { path: 'electronics/:id', component: DetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

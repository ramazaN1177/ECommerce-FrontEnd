import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryListComponent } from './category/category-list/category-list.component';
import { CategoryEditComponent } from './category/category-edit/category-edit.component';
import { ProductListComponent } from './product/product-list/product-list.component';
import { ProductEditComponent } from './product/product-edit/product-edit.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { CampaignEditComponent } from './campaign/campaign-edit/campaign-edit/campaign-edit.component';
import { CampaignListComponent } from './campaign/campaign-list/campaign-list/campaign-list.component';
import { CartEditComponent } from './shopping/cart-edit/cart-edit/cart-edit.component';
import { CartListComponent } from './shopping/cart-list/cart-list/cart-list.component';

const routes: Routes = [
  {path:'categories',component:CategoryListComponent},
  {path:'categories/:id',component:CategoryEditComponent},
  {path:'products', component:ProductListComponent},
  {path:'products/:id', component:ProductEditComponent},
  {path:'login', component:LoginComponent},
  {path:'register', component:RegisterComponent},
  {path:'campaigns',component:CampaignListComponent},
  {path:'campaigns/:id',component:CampaignEditComponent},
  {path:'shopping',component:CartEditComponent},
  {path:'shopping',component:CartListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

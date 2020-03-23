import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductmanagerComponent } from './productmanager/productmanager.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ManagerComponent } from './manager/manager.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'manager', component:ManagerComponent},
  {path: '404', component: NotfoundComponent},
  {path:'**', redirectTo: '/404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

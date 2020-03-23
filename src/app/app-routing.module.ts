import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductmanagerComponent } from './productmanager/productmanager.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ManagerComponent } from './manager/manager.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';


const routes: Routes = [
  {path:'home', component: HomeComponent},
  {path:'manager', component:ManagerComponent},
  {path: '404', component: NotfoundComponent},
  {path: '', redirectTo:'home', pathMatch:'full'},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'productdetail/:id', component: ProductdetailComponent},
  {path:'**', redirectTo: '/404', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

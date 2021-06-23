import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ClientsComponent } from './views/clients/clients.component';
import { AddressesComponent } from './views/addresses/addresses.component';
import { CreateComponent } from './components/create/create.component';
import { EditComponent } from './components/edit/edit.component';


const routes: Routes = [
  { path:'', redirectTo:'dashboard', pathMatch:'full'},
  { path:'dashboard', component:DashboardComponent},
  { path:'clients', component:ClientsComponent},
  { path:'addresses', component:AddressesComponent},
  { path: 'create', component:CreateComponent},
  { path: 'edit/:id', component:EditComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

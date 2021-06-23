import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { ClientsComponent } from './views/clients/clients.component';
import { AddressesComponent } from './views/addresses/addresses.component';

import { HttpClientModule } from '@angular/common/http';
import { CreateComponent } from './components/create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './components/edit/edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    ClientsComponent,
    AddressesComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

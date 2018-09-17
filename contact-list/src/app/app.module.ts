import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { CustomerdetailsComponent } from './customerdetails/customerdetails.component';
import { CustomersComponent } from './customers/customers.component';
import { DisplayComponent } from './display/display.component';
import { AppRoutingService } from './/app-routing.service';

@NgModule({
  declarations: [
    AppComponent,
    CustomerdetailsComponent,
    CustomersComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingService,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

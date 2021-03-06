import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AppRoutingModule } from './/app-routing.module';
import { ViewComponent } from './view/view.component';
import { LoginComponent } from './login/login.component';
import { BuildingViewComponent } from './building-view/building-view.component';
import { ManagerDashBoardComponent } from './manager-dash-board/manager-dash-board.component';
import { CreatebuildingComponent } from './createbuilding/createbuilding.component';
import {CreatebuildingService} from './createbuilding.service';
import { BuildingEditComponent } from './building-edit/building-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ViewComponent,
    LoginComponent,
    BuildingViewComponent,
    ManagerDashBoardComponent,
    CreatebuildingComponent,
    BuildingEditComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [ CreatebuildingComponent,CreatebuildingService],
  bootstrap: [AppComponent],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }

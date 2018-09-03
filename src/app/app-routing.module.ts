import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewComponent } from './view/view.component';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BuildingViewComponent } from './building-view/building-view.component';
import { ManagerDashBoardComponent } from './manager-dash-board/manager-dash-board.component';
import { CreatebuildingComponent } from './createbuilding/createbuilding.component';
import { BuildingEditComponent } from './building-edit/building-edit.component';

const routes: Routes = [
  { path: '',
    component: LoginComponent 
    },
     {
        path: 'view',
    component: ViewComponent
  },
  {
    path: 'Buildview',
    component: BuildingViewComponent
  },
  {
    path: 'ManagerDashBoard',
    component: ManagerDashBoardComponent
  },
  {
    path: 'Createbuilding',
    component: CreatebuildingComponent
  },
  {
    path: 'Buildedit/:Facility_Key',
    component: BuildingEditComponent
  }
];


@NgModule({
  imports: [
    CommonModule,RouterModule,
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }

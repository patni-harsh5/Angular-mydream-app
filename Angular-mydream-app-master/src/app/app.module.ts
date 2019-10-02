import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {UserData} from './mycomp/shared/userdata.service';
import {DepartmentData} from './mycomp/shared/departmentdata.services';
import {FormsModule} from '@angular/forms';
import {Summary} from './mycomp/shared/summary.pipe';
import { AppRouting } from './app.routing';

import { AppComponent } from './app.component';
import { MycompComponent } from './mycomp/mycomp.component';
import { HeadercompComponent } from './mycomp/headercomp/headercomp.component';
import { FootercompComponent } from './mycomp/footercomp/footercomp.component';
import {FavoriteComponentComponent } from './mycomp/favorite-component/favorite-component.component';
import { LikesComponent } from './mycomp/likes/likes.component';
import { PipedemoComponent } from './mycomp/pipedemo/pipedemo.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { UserdetailsComponent } from './userdetails/userdetails.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { LandingpageComponent } from './landingpage/landingpage.component'
import { ChildRouting } from './child.routing';


@NgModule({
  declarations: [
    AppComponent,
    MycompComponent,
    HeadercompComponent,
    FootercompComponent,
    FavoriteComponentComponent,
    LikesComponent,
    PipedemoComponent, 
    Summary, 
    LoginComponent, 
    RegistrationComponent, 
    UserdetailsComponent, 
    PortfolioComponent, 
    LandingpageComponent
  ],
  imports: [
    BrowserModule,FormsModule,AppRouting, ChildRouting
  ],
  providers: [UserData, DepartmentData],
  bootstrap: [LandingpageComponent]
})
export class AppModule { }

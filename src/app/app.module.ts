import { datastorageService } from './auth/datastorage.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomepageComponent } from './homepage/homepage/homepage.component';
import { BlogsComponent } from './blogs/blogs.component';
import { RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { HomecontentComponent } from './homecontent/homecontent.component';
import { EditpageComponent } from './editpage/editpage.component';
import { PrevmemoComponent } from './memory/prevmemo/prevmemo.component';
import { UpcomingComponent } from './memory/upcoming/upcoming.component';
import { authService } from './auth/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

const appRoutes:Routes = [
  {path: '', component:HomecontentComponent },
{path: 'signup' ,component:SignupComponent },
{path: 'blogs' ,component:BlogsComponent },
{path: 'login' ,component:LoginComponent },
{path: 'edit' ,component:EditpageComponent },
{path: 'prevmemo' ,component:PrevmemoComponent },
{path: 'upcoming' ,component:UpcomingComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomepageComponent,
    BlogsComponent,
    SignupComponent,
    HomecontentComponent,
    EditpageComponent,
    PrevmemoComponent,
    UpcomingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [authService,datastorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }

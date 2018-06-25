import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FlashMessagesModule } from 'angular2-flash-messages';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';

import { ValidateService} from './services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages/module/flash-messages.service';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';
import { UserSearchComponent } from './user-search/user-search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    IndexComponent,
    ExerciseComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    UserSearchComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    HttpModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "exercise", component: ExerciseComponent,canActivate:[AuthGuard] },
      { path: "profile", component: ProfileComponent, canActivate:[AuthGuard] },
      { path: "userSearch", component: UserSearchComponent, canActivate: [AuthGuard] },
      { path: "calendar", component: UserSearchComponent, canActivate: [AuthGuard] },
      { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [ValidateService,FlashMessagesService,AuthService,AuthGuard],
=======
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
>>>>>>> f9c56d5d0cb491f3cffebc7ed54ac24e2a060b4e
  bootstrap: [AppComponent]
})
export class AppModule { }

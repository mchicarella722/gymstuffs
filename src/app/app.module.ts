import { BrowserModule } from '@angular/platform-browser';
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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    FlashMessagesModule,
    RouterModule.forRoot([
      { path: "home", component: IndexComponent },
      { path: "login", component: LoginComponent },
      { path: "register", component: RegisterComponent },
      { path: "exercise", component: ExerciseComponent },
      { path: "profile", component: ProfileComponent },
      { path: "", pathMatch: "full", redirectTo: "/home" }
    ])
  ],
  providers: [ValidateService,FlashMessagesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

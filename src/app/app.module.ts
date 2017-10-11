import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { RouterModule, Routes } from '@angular/router';

// own stuff
import { HttpService } from "./services/shared/httpService/httpService.service";
import { AuthGuard } from './services/authentication/auth.guard';
import { AuthenticationService } from './services/authentication/authentication.service';

import { routes } from "./app.routes";
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { HeaderComponent } from './components/header/header.component';
import { RestaurantComponent } from './pages/restaurant/restaurant.component';
import { FooterComponent } from './components/footer/footer.component';
import { BlogComponent } from './pages/blog/blog.component';
import { i18nService, I18nPipe } from './services/i18n';
import { AjaxButtonComponent } from './components/ajax-button/ajax-button.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { OrderComponent } from './pages/order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    RestaurantComponent,
    FooterComponent,
    BlogComponent,
    I18nPipe,
    AjaxButtonComponent,
    RegistrationComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot()
  ],
  providers: [
    AuthGuard,
    AuthenticationService,
    HttpService,
    i18nService,
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


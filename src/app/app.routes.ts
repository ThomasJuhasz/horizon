import { HomeComponent } from "./pages/home/home.component";
import { LoginComponent } from "./pages/login/login.component";
import { RestaurantComponent } from "./pages/restaurant/restaurant.component";
import { BlogComponent } from "./pages/blog/blog.component";
import { RegistrationComponent } from "./pages/registration/registration.component";
import { OrderComponent } from "./pages/order/order.component";

export const routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, pathMatch: 'full', data: { title: 'routing.home' } },
    { path: 'login', component: LoginComponent, data: { title: 'routing.login' } },
    { path: 'registration', component: RegistrationComponent, data: { title: 'routing.registration' } },
    { path: 'order', component: OrderComponent, data: { title: 'routing.order' } },
    { path: 'restaurant', component: RestaurantComponent, data: { title: 'routing.restaurant' } },
    { path: 'blog', component: BlogComponent, data: { title: 'routing.blog' } }, // , canActivate: [AuthGuard]
];
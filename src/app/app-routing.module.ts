import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard';
import { AboutComponent } from './about';
import { AuthGuard } from './_guard';
import { NotFoundPageComponent } from './notfoundpage';
import { LoginComponent } from './login';
import { LoadingComponent } from './loading';
import { HomepageComponent } from './homepage/homepage.component';
import { VisionComponent } from './vision/vision.component';


// const routes: Routes = [];

const routes: Routes = [
  {
    path: "homepage",
    component: HomepageComponent,
  },
  {
    path: "vision",
    component: VisionComponent,
  },
  {
    path: "values",
    component: VisionComponent,
  },
  {
    path: "educationalproject",
    component: VisionComponent,
  },
  {
    path: "equipement",
    component: VisionComponent,
  },
  {
    path: "staff",
    component: VisionComponent,
  },
  {
    path: "school",
    component: VisionComponent,
  },
  {
    path: "schoollife",
    component: VisionComponent,
  },
  {
    path: "entrepreneurship",
    component: VisionComponent,
  },
  {
    path: "contactus",
    component: VisionComponent,
  },
  {
    path: "admission",
    component: VisionComponent,
  },
  {
    path: "stages",
    component: VisionComponent,
  },
  {
    path: "inscription",
    component: VisionComponent,
  },
  {
    path: "login",
    component: LoginComponent,
  },
  {
    path: "loading",
    component: LoadingComponent,
  },
  {
    path: "dashboard",
    component: DashboardComponent
    , canActivate: [AuthGuard],

  },
  {
    path: "about",
    component: AboutComponent
    , canActivate: [AuthGuard]
  },
  {
    path: "customers",
    loadChildren: () =>
    import('./customer/customer.module').then(m => m.CustomerModule)
    , canActivate: [AuthGuard]
  },
  {
    path: "orders",
    loadChildren: () =>
    import('./order/order.module').then(m => m.OrderModule)
    , canActivate: [AuthGuard]
  },
  {
    path: "products",
    loadChildren: () =>
    import('./product/product.module').then(m => m.ProductModule)
    , canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: "**",
    component: NotFoundPageComponent
  },
  // ]
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

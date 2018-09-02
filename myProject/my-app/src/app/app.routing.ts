import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AccountComponent } from './components/account/account.component';
import { ProductsComponent } from './components/products/products.component';
import { CartComponent } from './components/cart/cart.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { LoginComponent } from './components/account/components/login/login.component';
import { RegisterComponent } from './components/account/components/register/register.component';
import { ProductPreviewComponent } from './components/product-preview/product-preview.component';
import { CartProductComponent } from './components/cart-product/cart-product.component';
import { Component } from '@angular/core';
const appRoutes: Routes = [

    { path: 'header', component: HeaderComponent },
    { path: 'main', component: MainComponent },
    {
        path: 'account', component: AccountComponent, children: [
            {path:'login',component:LoginComponent},
            {path:'register',component:RegisterComponent}
        ]
    },
    { path: 'products', component:ProductsComponent, children:[
        {path:'productPreview', component:ProductPreviewComponent}
    ] },
    { path: 'cart', component: CartComponent ,children:[
        {path:'cartProduct' ,component:CartProductComponent}
    ]},
    { path: 'productDetails', component: ProductDetailsComponent },
    { path: 'home', component: HomeComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: HomeComponent },
    { path: 'footer', component: FooterComponent }

    // { path: 'AuthRout/home', component: HomeComponent, canActivate: [AuthGuard] },

];

export const routing = RouterModule.forRoot(appRoutes);
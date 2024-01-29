import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { CartpageComponent } from './components/cartpage/cartpage.component';
import { ProductComponent } from './components/products/products.component';
import { HeaderComponent } from './components/header/header.component';
import { CartpageComponent } from './components/cartpage/cartpage.component';
import { CateooryComponent } from './components/cateoory/cateoory.component';
import { DetailComponent } from './components/detail/detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    HeaderComponent,
    CartpageComponent,
    CateooryComponent,
    DetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';


import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { StoresComponent } from './stores/stores.component';
import { FooterComponent } from './footer/footer.component';
import { StoreFilterPipe } from './store-filter.pipe';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    StoresComponent,
    FooterComponent,
    StoreFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { StoresComponent } from './stores/stores.component';
import { FooterComponent } from './footer/footer.component';
import { StoreFilterPipe } from './store-filter.pipe';
import { NavbarComponent } from './navbar/navbar.component';
import { FormComponent } from './form/form.component';
import { SortByPipe } from './sort-by.pipe';
import { PhotosComponent } from './photos/photos.component';
import { InstructionsComponent } from './instructions/instructions.component';


@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    StoresComponent,
    FooterComponent,
    StoreFilterPipe,
    NavbarComponent,
    FormComponent,
    SortByPipe,
    PhotosComponent,
    InstructionsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    NgbModule.forRoot()
  ],
  entryComponents: [InstructionsComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

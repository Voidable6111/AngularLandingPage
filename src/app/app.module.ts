import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponentComponent } from './navbar-component/navbar-component.component';
import { FootComponent } from './foot/foot.component';

@NgModule({
  declarations: [			
    AppComponent,
      NavbarComponentComponent,
      FootComponent,
      FootComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

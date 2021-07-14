import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { Insomnia } from '@ionic-native/insomnia/ngx'; 

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    Insomnia,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

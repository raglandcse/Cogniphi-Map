import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule} from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon'; 
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MapComponent } from './map/map.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { WikimapComponent } from './wikimap/wikimap.component';
import { HeremapComponent } from './heremap/heremap.component';
import { GooglemapComponent } from './googlemap/googlemap.component';
const routes: Routes = [
  {path:'openstreetmap', component:MapComponent},
  {path:'wikimap', component:WikimapComponent},
  {path:'heremap', component:HeremapComponent},
  {path:'googlemap', component:GooglemapComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    MapComponent,
    WikimapComponent,
    HeremapComponent,
    GooglemapComponent
  ],
  imports: [
    BrowserModule,
    LeafletModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,MatIconModule,
    MatSidenavModule,MatListModule,RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

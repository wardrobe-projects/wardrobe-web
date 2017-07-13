import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routing } from './components/dashboard/dashboard.routing';

import { AppComponent } from './app.component';
import { WardrobeComponent } from './pages/wardrobe/wardrobe.component';
import { DashboardComponent } from './components/dashboard/dashboard.component'
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MenuComponent } from './components/sidebar/menu/menu.component';


@NgModule({
  declarations: [
    AppComponent,
    WardrobeComponent,
    DashboardComponent,
    SidebarComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ComponentList } from './components/componentlist';
import { StarComponent } from './star/star.componet';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './navbar/nav-bar.component';
import { RouterModule } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    ComponentList,
    StarComponent, 
    ReplacePipe,
    NavBarComponent

  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
          path: 'courses', component: ComponentList 
      }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ComponentList } from './components/componentlist';
import { StarComponent } from './star/star.componet';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './navbar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { Error404Component } from './404/error-404.component';
import { CourseInfoComponent } from './components/course-info.component';
@NgModule({
  declarations: [
    AppComponent,
    ComponentList,
    StarComponent, 
    ReplacePipe,
    NavBarComponent,
    Error404Component, 
    CourseInfoComponent

  ],
  imports: [
    BrowserModule,
    FormsModule, 
    RouterModule.forRoot([
      {
          path: 'courses', component: ComponentList 
      },
      {
          path: 'courses/info/:id', component: CourseInfoComponent
      },
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      }
    ])
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

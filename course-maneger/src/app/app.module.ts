import { NgModule, Pipe } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CouseListComponent } from './courses/course.list.component';
import { StarComponent } from 'src/star/star.component';
import { CourseService } from './courses/course.service';
import { ReplacePipe } from './pipe/replace.pipe';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { Error404Component } from './404/error-404-component';
import { CourseInfoComponent } from './courses/course.info.component';


@NgModule({
  declarations: [
    AppComponent,
    CouseListComponent,
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
        path: 'courses', component: CouseListComponent
      },
      { path: 'courses/info/:id', component: CourseInfoComponent

      },      
      {
        path: '', redirectTo: 'courses', pathMatch: 'full'
      },
      {
        path: '**', component: Error404Component
      },

    ])
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

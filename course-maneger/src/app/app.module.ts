import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { courseListComponent } from './courses/course-list.component';

@NgModule({
  declarations: [
    AppComponent,
    courseListComponent //sempre que criar um componente é neceessario declarar para que nao de erro.//
  ],
  imports: [
    BrowserModule,
    FormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

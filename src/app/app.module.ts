import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { ObservableComponent }  from './observable.component';
import { PromiseComponent }  from './promise.component';
import { TimeComponent }  from './time.component';
import { DataComponent }  from './data.component';
import { BookService } from './book.service';

@NgModule({
  imports: [     
        BrowserModule,
		HttpModule
  ],
  declarations: [
        AppComponent,
		ObservableComponent,
		PromiseComponent,
		TimeComponent,
		DataComponent
  ],
  providers: [
        BookService
  ],
  bootstrap: [
        AppComponent
  ]
})
export class AppModule { }

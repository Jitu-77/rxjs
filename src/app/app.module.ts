import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import { PromisesComponent } from './home/promises/promises.component';
import { ObservableComponent } from './home/observables/observable/observable.component';
import { FromEventComponent } from './home/observables/from-event/from-event.component';
import { ListsComponent } from './home/observables/lists/lists.component';
import { IntervalTimerComponent } from './home/observables/interval-timer/interval-timer.component';
import { OfFromComponent } from './home/observables/of-from/of-from.component';
import { ToArrayComponent } from './home/observables/to-array/to-array.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PromisesComponent,
    ObservableComponent,
    FromEventComponent,
    ListsComponent,
    IntervalTimerComponent,
    OfFromComponent,
    ToArrayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

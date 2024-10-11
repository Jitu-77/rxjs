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
import { CustomObservablesComponent } from './home/observables/custom-observables/custom-observables.component';
import { MapComponent } from './home/observables/map/map.component';
import { PluckComponent } from './home/observables/pluck/pluck.component';
import { FilterComponent } from './home/observables/filter/filter.component';
import { TapComponent } from './home/observables/tap/tap.component';
import { TakeComponent } from './home/observables/take/take.component';
import { RetryComponent } from './home/observables/retry/retry.component';
import { HttpClientModule } from '@angular/common/http';
import { DebounceTimeDistinctUntilChangeComponent } from './home/observables/debounce-time-distinct-until-change/debounce-time-distinct-until-change.component';
import { SubjectComponent } from './home/observables/subject/subject.component';
import { ReplaySubjectComponent } from './home/observables/replay-subject/replay-subject.component';
import { AsyncComponent } from './home/observables/async/async.component';
import { ConcatMergeComponent } from './home/observables/concat-merge/concat-merge.component';
import { MergeMapComponent } from './home/observables/merge-map/merge-map.component';
import { ConcatMapComponent } from './home/observables/concat-map/concat-map.component';

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
    ToArrayComponent,
    CustomObservablesComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetryComponent,
    DebounceTimeDistinctUntilChangeComponent,
    SubjectComponent,
    ReplaySubjectComponent,
    AsyncComponent,
    ConcatMergeComponent,
    MergeMapComponent,
    ConcatMapComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

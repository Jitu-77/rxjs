import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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
import { DebounceTimeDistinctUntilChangeComponent } from './home/observables/debounce-time-distinct-until-change/debounce-time-distinct-until-change.component';
import { SubjectComponent } from './home/observables/subject/subject.component';
import { ReplaySubjectComponent } from './home/observables/replay-subject/replay-subject.component';
import { AsyncComponent } from './home/observables/async/async.component';
import { ConcatMergeComponent } from './home/observables/concat-merge/concat-merge.component';
import { MergeMapComponent } from './home/observables/merge-map/merge-map.component';
import { ConcatMapComponent } from './home/observables/concat-map/concat-map.component';
import { SwitchMapComponent } from './home/observables/switch-map/switch-map.component';
import { ExhaustMapComponent } from './home/observables/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './home/observables/share-replay/share-replay.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'promises',component:PromisesComponent},
  {path:'observables',component:ObservableComponent,
    children:[
    {path:'',component:ListsComponent},
    {path:'of-from',component:OfFromComponent},
    {path:'from-event',component:FromEventComponent},
    {path:'interval-timer',component:IntervalTimerComponent},
    {path:'to-array',component:ToArrayComponent},
    {path:'custom-observables',component:CustomObservablesComponent},
    {path:'map',component:MapComponent},
    {path:'pluck',component:PluckComponent},
    {path:'filter',component:FilterComponent},
    {path:'tap',component:TapComponent},
    {path:'take',component:TakeComponent},
    {path:'retry',component:RetryComponent},
    {path:'debounce-time-distinct-until-change',component:DebounceTimeDistinctUntilChangeComponent},
    {path:'subject',component:SubjectComponent},
    {path:'replay-subject',component:ReplaySubjectComponent},
    {path:'async',component:AsyncComponent},
    {path:'concat-merge',component:ConcatMergeComponent},
    {path:'merge-map',component:MergeMapComponent},
    {path:'concat-map',component:ConcatMapComponent},
    {path:'switch-map',component:SwitchMapComponent},
    {path:'exhaust-map',component:ExhaustMapComponent},
    {path:'share-replay',component:ShareReplayComponent},
  ]},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

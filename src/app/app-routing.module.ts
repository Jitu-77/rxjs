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
  ]},
  {path:'**',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

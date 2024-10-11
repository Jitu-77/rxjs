import { Injectable } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  subjectTest = new Subject<any>()
  behaviorSubjectTest = new BehaviorSubject<any>('Jitu')
  replaySubjectTest = new ReplaySubject(3, 2000) // number , delay
  asyncSubjectTest = new AsyncSubject()
  constructor() { }
}

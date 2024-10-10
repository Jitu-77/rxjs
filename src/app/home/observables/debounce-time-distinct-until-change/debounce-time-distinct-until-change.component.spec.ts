import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DebounceTimeDistinctUntilChangeComponent } from './debounce-time-distinct-until-change.component';

describe('DebounceTimeDistinctUntilChangeComponent', () => {
  let component: DebounceTimeDistinctUntilChangeComponent;
  let fixture: ComponentFixture<DebounceTimeDistinctUntilChangeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DebounceTimeDistinctUntilChangeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DebounceTimeDistinctUntilChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

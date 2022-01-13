import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragdropExComponent } from './dragdrop-ex.component';

describe('DragdropExComponent', () => {
  let component: DragdropExComponent;
  let fixture: ComponentFixture<DragdropExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragdropExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragdropExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

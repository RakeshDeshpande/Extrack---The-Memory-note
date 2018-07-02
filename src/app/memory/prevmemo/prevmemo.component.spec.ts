import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrevmemoComponent } from './prevmemo.component';

describe('PrevmemoComponent', () => {
  let component: PrevmemoComponent;
  let fixture: ComponentFixture<PrevmemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrevmemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrevmemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

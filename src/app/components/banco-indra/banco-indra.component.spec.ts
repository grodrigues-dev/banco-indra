import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BancoIndraComponent } from './banco-indra.component';

describe('BancoIndraComponent', () => {
  let component: BancoIndraComponent;
  let fixture: ComponentFixture<BancoIndraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BancoIndraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BancoIndraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

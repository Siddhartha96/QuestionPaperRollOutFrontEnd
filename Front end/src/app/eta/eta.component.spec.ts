import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EtaComponent } from './eta.component';

describe('EtaComponent', () => {
  let component: EtaComponent;
  let fixture: ComponentFixture<EtaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EtaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QpeditorComponent } from './qpeditor.component';

describe('QpeditorComponent', () => {
  let component: QpeditorComponent;
  let fixture: ComponentFixture<QpeditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QpeditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QpeditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

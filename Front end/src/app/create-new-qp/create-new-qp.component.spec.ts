import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateNewQpComponent } from './create-new-qp.component';

describe('CreateNewQpComponent', () => {
  let component: CreateNewQpComponent;
  let fixture: ComponentFixture<CreateNewQpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateNewQpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateNewQpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

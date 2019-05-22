import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QpEditorChoiceComponent } from './qp-editor-choice.component';

describe('QpEditorChoiceComponent', () => {
  let component: QpEditorChoiceComponent;
  let fixture: ComponentFixture<QpEditorChoiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QpEditorChoiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QpEditorChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});

import { Component, OnInit } from '@angular/core';
import { AllService } from '../all.service';

@Component({
  selector: 'app-qp-editor-choice',
  templateUrl: './qp-editor-choice.component.html',
  styleUrls: ['./qp-editor-choice.component.css']
})
export class QpEditorChoiceComponent implements OnInit {

  constructor(private servee:AllService) { }

  ngOnInit() {
  }

}

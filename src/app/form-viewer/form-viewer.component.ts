import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatCheckboxChange } from '@angular/material/checkbox';

@Component({
  selector: 'app-form-viewer',
  templateUrl: './form-viewer.component.html',
  styleUrls: ['./form-viewer.component.scss']
})
export class FormViewerComponent implements OnInit {
  @Input() data: any;
  formView: FormGroup;
  fields: any[] = [];
  showResponse = false;
  constructor() { }

  ngOnInit() {
    if (this.data) {
      console.log(this.data);
      this.fields = this.data.questions.filter(Boolean);
      console.log(this.fields);
      this.createForm(this.fields);
    }
  }


  createForm(fields) {
    const group = {};
    fields.forEach((field, i) => {
        if (field.type === 'text') {
          const valids = [];
          if (field.allowChar > 0) {
            valids.push(Validators.maxLength(field.allowChar));
          }
          if (field.required === true) {
            valids.push(Validators.required);
          }
          // field.validations.forEach(val => {
          //     if ( val.characterLength === true) {
          //         validators.push(Validators.maxLength(val.textLength));
          //     }
          // });
          group[i] = new FormControl('', [...valids]);
        } else {
          if (field.required === true) {
            group[i] = new FormControl('', Validators.required);
          } else {
            group[i] = new FormControl('');
          }
        }
      });
    this.formView = new FormGroup(group);
    console.log(this.formView);
  }

  getResponse(e: MatCheckboxChange) {
    this.showResponse = !this.showResponse;
  }

  get f() { return this.formView.controls; }

}

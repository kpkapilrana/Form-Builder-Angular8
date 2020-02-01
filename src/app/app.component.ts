import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { SnackbarService } from './shared/services/snackbar.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'retrospective-builder';
  data: any;
  fields: any = [];
  formGroup: FormGroup;
  types: any[] = [
    { id: 'label', value: 'Static'},
    { id: 'text', value: 'Text'},
    { id: 'radio', value: 'Radio'},
    { id: 'dropdown', value: 'Dropdown'},
  ];
  // type , label, value, validation
  constructor(
    private fb: FormBuilder,
    private snackBarService: SnackbarService
  ) {

  }

  ngOnInit() {
      this.createForm();
  }



  getQuestions(form) {
    // console.log(form.controls.questions.controls[0]);
    return form.controls.questions.controls;
  }

  getOptions(form) {
    return form.controls.values.controls;
  }

  getValidations(form) {
    return form.controls.validations.controls;
  }

  getType(i) {
    const form =  this.formGroup.get(['questions', i, 'type']) as FormControl;
    // console.log(form.value);
    return form.value;
  }


  initQuestion() {
    return new FormGroup({
        type: new FormControl('label'),
        label: new FormControl(),
        required: new FormControl(),
        values: new FormArray([
          this. initValues()
        ]),
        validations: new FormArray([
          this. initValues()
        ])
    });
  }
  initValidation() {
    return new FormGroup({
      validation: new FormControl()
    });
  }

  initValues() {
    return new FormGroup({
      option: new FormControl()
    });
  }

  addQuestion() {
    const control = this.formGroup.get('questions') as FormArray;
    control.push(this.initQuestion());
  }

  removeQuestion(index) {
    const row = this.formGroup.get('questions') as FormArray;
    row.removeAt(index);
  }

  removeValidation(i, index) {
    const row = this.formGroup.get(['validations', i, 'values']) as FormArray;
    row.removeAt(index);
  }

  addValues(i) {
      const row = this.formGroup.get(['questions', i, 'values']) as FormArray;
      row.push(this.initValues());
  }

  addValidation(i) {
    const row = this.formGroup.get(['questions', i, 'validations']) as FormArray;
    row.push(this.initValues());
  }

  removeValue(i, index) {
    const row = this.formGroup.get(['questions', i, 'values']) as FormArray;
    row.removeAt(index);
  }

  onButtonClicked(data) {

  }

  createForm() {
      this.formGroup = this.fb.group({
        questions: new FormArray([
          this.initQuestion()
        ])
      });
  }

  removeFormControl(name) {
    // this.formGroup.removeControl(name);
  }

  disableButton() {
  }

  submit() {
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(this.formGroup.value));
    const downloadLink = document.createElement('a');
    downloadLink.setAttribute('href', dataStr);
    downloadLink.target = '_blank';
    downloadLink.setAttribute('download', 'assign.json');
    downloadLink.click();
    this.snackBarService.open('Form Build Successfully');
  }

  reset() {
  }


}

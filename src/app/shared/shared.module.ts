import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTabsModule } from '@angular/material/tabs';
import { MatMenuModule } from '@angular/material/menu';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule, MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
// import {MatTabsModule} from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import {MatRadioModule} from '@angular/material/radio';
import {MatCheckboxModule} from '@angular/material/checkbox';

const AngularMatModules = [
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatFormFieldModule,
  MatInputModule,
  MatSidenavModule,
  MatCardModule,
  MatProgressSpinnerModule,
  MatDividerModule,
  MatListModule,
  MatBadgeModule,
  MatRippleModule,
  MatChipsModule,
  MatAutocompleteModule,
  MatExpansionModule,
  MatGridListModule,
  MatSlideToggleModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatMenuModule,
  MatSnackBarModule,
  MatSelectModule,
  MatTabsModule,
  MatRadioModule,
  MatCheckboxModule
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...AngularMatModules,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [
    ...AngularMatModules,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class SharedModule { }

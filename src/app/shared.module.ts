import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {
  MatChipsModule,
  MatDialogModule,
  MatExpansionModule,
  MatListModule,
  MatSlideToggleModule,
  MatTooltipModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatSnackBarModule,
  MatToolbarModule,
} from '@angular/material';

const MATERIAL_MODULES: any[] = [
  MatListModule,
  MatButtonModule,
  MatIconModule,
  MatToolbarModule,
  MatCardModule,
  MatMenuModule,
  MatSidenavModule,
  MatInputModule,
  MatTooltipModule,
  MatFormFieldModule,
  MatDialogModule,
  MatSnackBarModule,
  MatExpansionModule,
  MatSlideToggleModule,
  MatChipsModule,
];


@NgModule({
  imports: [
    CommonModule,
    MATERIAL_MODULES
  ],
  declarations: [],
  exports: [
    MATERIAL_MODULES
  ]
})

export class SharedModule {

}

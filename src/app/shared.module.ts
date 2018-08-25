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
  MatGridListModule,
} from '@angular/material';

// export const MATERIAL_MODULES: any[] = [
//   MatListModule,
//   MatButtonModule,
//   MatIconModule,
//   MatToolbarModule,
//   MatCardModule,
//   MatMenuModule,
//   MatSidenavModule,
//   MatInputModule,
//   MatTooltipModule,
//   MatFormFieldModule,
//   MatDialogModule,
//   MatSnackBarModule,
//   MatExpansionModule,
//   MatSlideToggleModule,
//   MatChipsModule,
//   MatGridListModule
// ];


@NgModule({
  declarations: [],
  exports: [
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
    MatGridListModule
  ]
})

export class SharedModule {

}

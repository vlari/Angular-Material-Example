import { 
  MatInputModule,
  MatToolbarModule,
  MatCardModule,
  MatButtonModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatRadioModule,
  MatDividerModule,
  MatSelectModule,
  MatChipsModule,
  MatExpansionModule,
} from '@angular/material';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDividerModule,
    MatSelectModule,
    MatChipsModule,
    MatExpansionModule
  ],
  exports: [
    MatInputModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatDividerModule,
    MatSelectModule,
    MatChipsModule,
    MatExpansionModule
  ]
})
export class CustomMaterialModule{}
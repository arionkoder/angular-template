import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [CommonModule],
  exports: [ReactiveFormsModule, FormsModule],
  declarations: [],
  providers: [],
})
export class SharedModule {}

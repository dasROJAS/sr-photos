import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostcardComponent } from './postcard/postcard.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      PostcardComponent
  ],
  exports: [
      PostcardComponent
  ]
})
export class UiModule { }

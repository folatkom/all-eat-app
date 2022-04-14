import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParticipantsComponent } from './participants.component';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [ParticipantsComponent],
  imports: [SharedModule, CommonModule],
  exports: [ParticipantsComponent],
})
export class ParticipantsModule {}

import { NgModule } from '@angular/core';
import { RoundProgressComponent } from './ngx-round-progress.component';
import {RoundProgressEase} from './ngx-round-progress.ease';
import {ROUND_PROGRESS_DEFAULTS_PROVIDER} from './ngx-round-progress.config';
import {RoundProgressService} from './ngx-round-progress.service';

@NgModule({
  declarations: [RoundProgressComponent],
  providers: [RoundProgressService, RoundProgressEase, ROUND_PROGRESS_DEFAULTS_PROVIDER],
  exports: [RoundProgressComponent]
})
export class RoundProgressModule { }

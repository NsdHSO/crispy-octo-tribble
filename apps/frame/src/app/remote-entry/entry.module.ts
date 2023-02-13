import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import {remoteRoutes} from './entry.routes';
import {FrameWholeModule} from 'ngx-liburg-frame-side';
import {CONFIG_MAIN} from '../@core/config';
import {RemoteEntryComponent} from './entry.component';
import {IconCoreModule} from "ngx-liburg-icon";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [RemoteEntryComponent],
  imports: [
    IconCoreModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forChild(remoteRoutes),
    FrameWholeModule.forRoot(CONFIG_MAIN),
  ],
  providers: [],
})
export class RemoteEntryModule {
}

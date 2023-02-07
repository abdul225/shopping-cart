import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DetailsRoutingModule } from './details-routing.module';
import { DetailsComponent } from './details.component';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';


@NgModule({
  declarations: [
    DetailsComponent,
    
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    SlickCarouselModule, 
    FlexLayoutModule,
  ],
})
export class DetailsModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorizatorComponent } from './priorizator/priorizator.component';
import { ComponentsModule } from '../components/components.module';



@NgModule({
  declarations: [
    PriorizatorComponent,
  ],
  imports: [
    CommonModule,
    ComponentsModule
  ],
  exports:[
    PriorizatorComponent
  ]
})
export class PriorizatorModule { }

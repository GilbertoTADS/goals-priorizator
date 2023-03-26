import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorizatorComponent } from './priorizator/priorizator.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    PriorizatorComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    PriorizatorComponent
  ]
})
export class PriorizatorModule { }

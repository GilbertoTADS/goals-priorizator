import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PriorizatorComponent } from './priorizator/priorizator.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MobileMenuComponent } from './mobile-menu/mobile-menu.component';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    PriorizatorComponent,
    HeaderComponent,
    FooterComponent,
    MobileMenuComponent
  ],
  imports: [
    CommonModule,
    NgbCollapseModule
  ],
  exports:[
    PriorizatorComponent
  ]
})
export class PriorizatorModule { }

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      MobileMenuComponent
    ],
    imports: [
      CommonModule,
      NgbCollapseModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        MobileMenuComponent
    ]
  })
  export class ComponentsModule { }
  
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";
import { TextBubbleComponent } from './text-bubble/text-bubble.component';

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      MobileMenuComponent,
      TextBubbleComponent
    ],
    imports: [
      CommonModule,
      NgbCollapseModule
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        MobileMenuComponent,
        TextBubbleComponent
    ]
  })
  export class ComponentsModule { }
  
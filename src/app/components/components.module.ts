import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { NgbCollapseModule, NgbTooltipModule } from "@ng-bootstrap/ng-bootstrap";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";
import { MobileMenuComponent } from "./mobile-menu/mobile-menu.component";
import { TextBubbleComponent } from './text-bubble/text-bubble.component';
import { ProductCardComponent } from './product-card/product-card.component';
import { IconsModule } from "../icons/icons.module";
import { SearchComponent } from './search/search.component';

@NgModule({
    declarations: [
      HeaderComponent,
      FooterComponent,
      MobileMenuComponent,
      TextBubbleComponent,
      ProductCardComponent,
      SearchComponent,
    ],
    imports: [
      CommonModule,
      NgbCollapseModule,
      NgbTooltipModule,
      IconsModule,
    ],
    exports:[
        HeaderComponent,
        FooterComponent,
        MobileMenuComponent,
        TextBubbleComponent,
        ProductCardComponent
    ]
  })
  export class ComponentsModule { }
  
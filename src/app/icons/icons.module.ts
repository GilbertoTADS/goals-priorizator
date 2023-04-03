import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BootstrapIconsModule } from 'ng-bootstrap-icons';
import { List, Search } from 'ng-bootstrap-icons/icons';

const icons = {
  List,
  Search
  
}

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BootstrapIconsModule.pick(icons)
  ],
  exports:[
    BootstrapIconsModule
  ]
})
export class IconsModule { }

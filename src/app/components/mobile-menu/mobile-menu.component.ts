import { Component } from '@angular/core';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.sass'],
})
export class MobileMenuComponent {
  isCollapsed = false;

  collapse():void{
    this.isCollapsed = !this.isCollapsed;
  }
  closeMenu(){
    this.isCollapsed = false;
  }
}

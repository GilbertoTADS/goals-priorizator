import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-text-bubble',
  templateUrl: './text-bubble.component.html',
  styleUrls: ['./text-bubble.component.sass']
})
export class TextBubbleComponent {
  @Input()message:string = '';
  @Input() messageEmphasis:string = '';

}

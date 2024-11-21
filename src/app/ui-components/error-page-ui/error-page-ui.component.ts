import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-error-page-ui',
  templateUrl: './error-page-ui.component.html',
  styleUrl: './error-page-ui.component.scss'
})
export class ErrorPageUiComponent {

  @Input() title: string='';
  @Input() errorImage: string='';

}

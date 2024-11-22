import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { DeleteBookmarker } from '../../../../store/bookmarker/bookmarker.actions';

@Component({
  selector: 'app-confirm-modal-ui',
  templateUrl: './confirm-modal-ui.component.html',
  styleUrl: './confirm-modal-ui.component.scss'
})
export class ConfirmModalUiComponent {

  constructor(private store: Store){}

  @Output() closeModal = new EventEmitter<boolean>();
  @Output() confirmModal = new EventEmitter<boolean>();
  @Input() product: any = [];

  close(){
    this.closeModal.emit();
  }

  confirm(){
    this.confirmModal.emit();
    this.store.dispatch(new DeleteBookmarker(this.product));
  }
}

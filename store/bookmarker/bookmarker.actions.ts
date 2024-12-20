import { FormGroup } from "@angular/forms";
import { Product } from "../../src/assets/product-interface";

export class GetBookmarkeList {
  static readonly type = '[Get bookmark list] action';
}

export class CreateBookmarker {
  static readonly type = '[Create bookmarker] action';
  constructor(public bookmarkDetails: FormGroup) {}
}

export class GetEditBookmarker {
  static readonly type = '[Get edit bookmarker] action';
  constructor(public bookmarkDetails: Product) {}
}

export class EditBookmarkerList {
  static readonly type = '[Edit bookmarker list] action';
  constructor(public bookmarkDetails: FormGroup) {}
}

export class FilterBookmarkerList {
  static readonly type = '[Filter bookmarker list] action';
  constructor(public filterValue: string) {}
}

export class DeleteBookmarker {
  static readonly type = 'Delete bookmarker] action';
  constructor(public bookmarkDetails: Product) {}
}


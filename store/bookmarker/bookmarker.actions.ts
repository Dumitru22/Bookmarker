import { FormGroup } from "@angular/forms";
import { Product } from "../../src/assets/product-interface";

export class GetBookmarker {
  static readonly type = '[Get bookmarker] action';
}

export class CreateBookmarker {
  static readonly type = '[Create bookmarker] action';
  constructor(public bookmarkDetails: FormGroup) {}
}

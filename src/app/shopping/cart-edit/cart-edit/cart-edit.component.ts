import { Component, OnInit } from '@angular/core';
import { BaseEditComponent } from 'src/app/base/base-edit/base-edit.component';

@Component({
  selector: 'app-cart-edit',
  templateUrl: './cart-edit.component.html',
  styleUrls: ['./cart-edit.component.css']
})
export class CartEditComponent extends BaseEditComponent implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { BaseListComponent } from 'src/app/base/base-list/base-list.component';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent extends BaseListComponent implements OnInit {

  constructor() {
    super();
  }

  override ngOnInit(): void {
  }

}

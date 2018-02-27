import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

import 'rxjs/add/operator/switchMap';

import { WearService } from './../wear.service';
import { Wear } from './../wear';
import { Cart } from './../cart';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  wear: Wear;
  carts: Cart[];

  constructor(
    private route: ActivatedRoute,
    private wearService: WearService
  ) { }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        return this.wearService.getWear(params.get('wear'), params.get('id'))
      })
      .subscribe(wear => {this.wear = wear});
  }

  addCart(id: string, size: string, quantity: number): void {
    const cart: Cart = {
      id: id,
      size: size,
      quantity: quantity
    }
  }
}

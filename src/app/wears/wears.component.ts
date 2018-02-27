import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { WearService } from './../wear.service';
import { Wear } from './../wear';

@Component({
  selector: 'app-wears',
  templateUrl: './wears.component.html',
  styleUrls: ['./wears.component.css']
})
export class WearsComponent implements OnInit {

  id: string;
  url: string;
  imgUrl: string;

  wears: Wear[]
  
  constructor(
    private router: Router,
    private wearService: WearService
  ) { }

  ngOnInit() {
    this.url = this.router.routerState.snapshot.url; // url
    this.id = this.url.split("/")[2];

    this.imgUrl = `./assets/images/${this.id}.jpg`;
    this.wearService.getWears(this.id).then(wears => this.wears = wears);
  }
}

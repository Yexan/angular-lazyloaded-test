import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { getConfigUrls } from './shared/utils/url-helpers';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'rm-card';
  mode: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const { mode } = getConfigUrls()
    this.mode = mode;
    if (this.mode) {
      this.router.navigate([`/${ this.mode }`, {}]);
    }
  }
}

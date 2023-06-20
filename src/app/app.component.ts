import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'rm-card';

  @Input() mode: string = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    if (this.mode) {
      this.router.navigate([`/${ this.mode }`, {}]);
    }
  }
}

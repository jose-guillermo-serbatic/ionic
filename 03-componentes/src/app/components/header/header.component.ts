import { Component, Input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent  implements OnInit {

  @Input({required: true}) title!: string;

  constructor() { }

  ngOnInit() {}

}

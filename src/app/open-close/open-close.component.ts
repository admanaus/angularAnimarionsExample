import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-open-close',
  templateUrl: './open-close.component.html',
  styleUrls: ['./open-close.component.css'],
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '200px',
        opacity: 1,
        backgroundColor: 'yellow'
      })),
      state('closed', style({
        height: '100px',
        opacity: 0.5,
        backgroundColor: 'green'
      })),
      transition('* => closed', [ // note the use of the wilcard *
        animate('1s 0s ease-out')
      ]),
      transition('* => open', [
        animate('0.5s 0s ease-in')
      ])
    ])
  ]
})
export class OpenCloseComponent implements OnInit {

  constructor() { }

  isOpen = true;

  ngOnInit(): void {}

  toggle() {
    this.isOpen = !this.isOpen;
  }







}

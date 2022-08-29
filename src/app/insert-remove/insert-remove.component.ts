import { Component, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition, 
  keyframes
} from '@angular/animations';

@Component({
  selector: 'app-insert-remove',
  templateUrl: './insert-remove.component.html',
  styleUrls: ['./insert-remove.component.css'],
  animations: [
    trigger('myFadeInsertRemoveTrigger', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1s', style({ opacity: 1 })),
      ]),
      transition(':leave', [
        animate('1s', style({ opacity: 0 }))
      ])
    ]),
    trigger('mySlideInsertRemoveTrigger', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)' }),
        animate('0.5s', style({ transform: 'translateX(0)' })),
      ]),
      transition(':leave', [
        animate('0.5s', style({ transform: 'translateX(100%)' }))
      ])
    ]),
    // state('blue', style({
    //   backgroundColor: 'blue'
    // })),
    // state('orange', style({
    //   backgroundColor: 'orange'
    // })),
    // trigger('myBlueKeyFrameTrigger', [
    //   transition('* => blue', [
    //     animate('2s', keyframes([
    //       style({ backgroundColor: 'orange' }),
    //       style({ backgroundColor: 'red' }),
    //       style({ backgroundColor: 'blue' })
    //     ])),
    //   ]),
    //   transition('* => orange', [
    //     animate('2s', keyframes([
    //       style({ backgroundColor: 'blue' }),
    //       style({ backgroundColor: 'red' }),
    //       style({ backgroundColor: 'orange' })
    //     ]))
    //   ])
    // ])
    
  ]
})
export class InsertRemoveComponent implements OnInit {

  constructor() { }

  isShownFade = false;
  isShownSlide = false;
  // isBlue = false;


  toggleFade() {
    this.isShownFade = !this.isShownFade;
  }

  toggleSlide() {
    this.isShownSlide = !this.isShownSlide;
  }

  // toggleBlue() {
  //   this.isBlue = !this.isBlue;
  // }

  ngOnInit(): void {
  }

}

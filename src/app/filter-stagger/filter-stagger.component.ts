import { Component, HostBinding, OnInit } from '@angular/core';
import { Character, SW_CHARS } from '../../mock-characters';
import {
  trigger,
  state,
  style,
  animate,
  transition, 
  keyframes,
  query,
  stagger
} from '@angular/animations';

@Component({
  selector: 'app-filter-stagger',
  templateUrl: './filter-stagger.component.html',
  styleUrls: ['./filter-stagger.component.css'],
  animations: [
    trigger('pageAnimations', [
      transition(':enter', [
        query('mat-list-item, form', [
          style({opacity: 0, transform: 'translateY(-100px)'}),
          stagger(-30, [
            animate('500ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
          ])
        ])
      ])
    ]),
    trigger('filterAnimation', [
      transition(':enter, * => 0, * => -1', []),
      transition(':increment', [
        query(':enter', [
          style({ opacity: 0, width: '0px' }),
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 1, width: '*' })),
          ]),
        ], { optional: true })
      ]),
      transition(':decrement', [
        query(':leave', [
          stagger(50, [
            animate('300ms ease-out', style({ opacity: 0, width: '0px' })),
          ]),
        ])
      ]),
    ])
  ]
})
export class FilterStaggerComponent implements OnInit {

  @HostBinding('@pageAnimations') // <-- attach trigger to host
  public animatePage = true; // <-- decorator can't go by itself 
  characters: Array<Character> | undefined;;

  constructor() { }

  ngOnInit() {
    this.characters = SW_CHARS;
  }

  updateCriteria(criteria: string) {
    criteria = criteria ? criteria.trim() : '';
    this.characters = SW_CHARS.filter(char => char.name.toLowerCase().includes(criteria.toLowerCase()));
  }

}
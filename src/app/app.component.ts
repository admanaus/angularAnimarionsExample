import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition, 
  keyframes,
  query,
  animateChild,
  group
} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('routeAnimations', [
      transition('* <=> *', [
        style({ position: 'relative' }),
        query(':enter, :leave', [
          style({
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%'
          })
        ], { optional: true }),
        query(':enter', [
          style({ left: '-100%' })
        ], { optional: true }),
        query(':leave', animateChild(), { optional: true }),
        group([
          query(':leave', [
            animate('300ms ease-out', style({ left: '100%' }))
          ], { optional: true }),
          query(':enter', [
            animate('300ms ease-out', style({ left: '0%' }))
          ], { optional: true })
        ]),
        query(':enter', animateChild(), { optional: true }),
      ])
    ])
  ]
})
export class AppComponent {
  title = 'angular-animations-example';

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
  }
}

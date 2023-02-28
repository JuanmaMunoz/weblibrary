import { animate, style, transition, trigger } from '@angular/animations';

const effectShow = [
  style({ opacity: 0, display: 'block' }),
  animate('150ms', style({ opacity: 1, display: 'block' })),
];

const effectHide = [
  style({ opacity: 1, display: 'block' }),
  animate('150ms', style({ opacity: 0, display: 'none' })),
]

const effectDown = [
  style({ top: -25, opacity: 0, display: 'block' }),
  animate('150ms', style({ top: 0, opacity: 1, display: 'block' })),
];

const effectUp = [
  style({ top: 0, opacity: 1, display: 'block' }),
  animate('150ms', style({ top: -25, opacity: 0, display: 'none' })),
];

export const moveDownUpStatus = trigger('moveDownUpStatus', [
  transition('false=>true', effectDown),
  transition('true=>false', effectUp),
]);

export const showHideStatus = trigger('showHideStatus', [
  transition('false=>true', effectShow),
  transition('true=>false', effectHide),
]);

export const showHideInOut = trigger('showHideInOut', [
  transition(':enter', effectShow),
  transition(':leave', effectHide),
]);



import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { MatMenuTrigger } from '@angular/material/menu';
import { TakeNotesBottomSheet } from './TakeNotesBottomSheet';
import { animate, query, stagger, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-note-pad',
  templateUrl: './note-pad.component.html',
  styleUrls: ['./note-pad.component.scss'],
  animations: [
    trigger('itemAnim', [
      // ENTRY ANIMATION
      transition('void => *', [
        // Initial state
        style({
          height: 0,
          opacity: 0,
          transform: 'scale(0.85)',
          'margin-bottom': 0,

          // we have to 'expand' out the padding properties
          paddingTop: 0,
          paddingBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
        }),
        // we first want to animate the spacing (which includes height and margin)
        animate('50ms', style({
          height: '*',
          'margin-bottom': '*',
          paddingTop: '*',
          paddingBottom: '*',
          paddingLeft: '*',
          paddingRight: '*',
        })),
        animate(68)
      ]),

      transition('* => void', [
        // first scale up
        animate(50, style({
          transform: 'scale(1.05)'
        })),
        // then scale down back to normal size while beginning to fade out
        animate(50, style({
          transform: 'scale(1)',
          opacity: 0.75
        })),
        // scale down and fade out completely
        animate('120ms ease-out', style({
          transform: 'scale(0.68)',
          opacity: 0,
        })),
        // then animate the spacing (which includes height, margin and padding)
        animate('150ms ease-out', style({
          height: 0,
          paddingTop: 0,
          paddingBottom: 0,
          paddingRight: 0,
          paddingLeft: 0,
          'margin-bottom': '0',
        }))
      ])
    ]),

    trigger('listAnim', [
      transition('* => *', [
        query(':enter', [
          style({
            opacity: 0,
            height: 0
          }),
          stagger(100, [
            animate('0.2s ease')
          ])
        ], {
          optional: true
        })
      ])
    ])
  ]
})
export class NotePadComponent {

  @Input() notes:any;
  @Output() newItemEvent = new EventEmitter<string>();

  
  bottomSheetRef = {} as MatBottomSheetRef<TakeNotesBottomSheet>

  constructor(private _bottomSheet: MatBottomSheet){
    
  }

  openBottomSheet() {
   
    //const config: MatBottomSheetConfig = { data: dataToBottomSheet };
    this.bottomSheetRef =  this._bottomSheet.open(TakeNotesBottomSheet);;
    this.bottomSheetRef.afterOpened().subscribe(() => {
      console.log('Bottom sheet is open.');
    });
    this.bottomSheetRef.afterDismissed().subscribe(data => {
      console.log('Return value: ', data);
    });
  }

  removeItem(note: any) {
    console.log(note);
    this.newItemEvent.emit(note);
  }
  
  


}

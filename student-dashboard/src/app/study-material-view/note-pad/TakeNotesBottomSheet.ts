import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'take_notes_bottom_sheet',
  template: ` <div class="note">
    <div>
      <h1 class="title"><label>Take your notes</label></h1>
      <div class="title"><label>Note title</label></div>
      <div class="title"><input name="noteTile" type="text" /></div>
    </div>
    <div>
      <div class="title"><label>Content</label></div>
      <div class="title"><textarea name="notes"></textarea></div>
    </div>
    <div class="saveNote">
      <button mat-raised-button (click)="closeBottomSheet()" class="save">
        Save
      </button>
    </div>
  </div>`,
  styles: [
    `
      textarea {
        background: #f1f1f1;
        border: none;
        width: 425px;
        height: 90px;
        border-radius: 4px;
      }

      .saveNote {
        text-align: right;
      }
      .title {
        padding: 8px;
        text-align: left;
      }
      .save {
        background-color: #3c3d3d;
        color: #f1f1f1;
      }

      input:focus {
        outline: none !important;
        outline-style: none !important;
        box-shadow: none !important;
        border-color: transparent !important;
      }

      input {
        background: #f1f1f1;
        border: none;
        width: 425px;
        height: 32px;
        border-radius: 4px;
      }

      textarea:focus {
        outline: none !important;
        outline-style: none !important;
        box-shadow: none !important;
        border-color: transparent !important;
      }

      .note {
        padding: 20px;
      }
    `,
  ],
})
export class TakeNotesBottomSheet {
  constructor(
    private _bottomSheetRef: MatBottomSheetRef<TakeNotesBottomSheet>
  ) {}

  openLink(event: MouseEvent): void {
    this._bottomSheetRef.dismiss();
    event.preventDefault();
  }

  closeBottomSheet() {
    const dataToReturn = { result: 'Success' };
    this._bottomSheetRef.dismiss(dataToReturn);
  }
}

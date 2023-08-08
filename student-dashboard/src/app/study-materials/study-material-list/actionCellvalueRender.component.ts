import { Component, Input, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { ICellRendererParams } from 'ag-grid-community';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'action-cell-value-render',
  template: `
    <div>
      <button
        mat-icon-button
        aria-label="Example icon button with a menu icon"
        matTooltip="Edit"
      >
        <mat-icon>edit</mat-icon>
      </button>
      <button
        mat-icon-button
        aria-label="Example icon button with a menu icon"
        matTooltip="Read"
        (click)="openPdf($event)"
      >
        <mat-icon>picture_as_pdf</mat-icon>
      </button>
      <button
        mat-icon-button
        aria-label="Example icon button with a menu icon"
        matTooltip="Delete"
      >
        <mat-icon>delete</mat-icon>
      </button>
    </div>
  `,
})
export class actionCellvalueRenderComponent
  implements ICellRendererAngularComp, OnInit
{
  constructor(private router: Router, private route: ActivatedRoute) {}
  params!: ICellRendererParams;
  refresh(): boolean {
    return false;
  }
  ngOnInit(): void {}

  openPdf($event: any) {
    console.log(this.params);
    console.log(this.router.url);
    this.router.navigate([this.router.url + `/${this.params.data.id}`]);
  }

  agInit(params: ICellRendererParams): void {
    this.params = params;
  }
}

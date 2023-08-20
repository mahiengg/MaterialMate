import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateMaterialDialogComponent } from '../create-material-dialog/create-material-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { actionCellvalueRenderComponent } from '../study-material-list/actionCellvalueRender.component';
import { map } from 'rxjs';
import materialData from '../../testDatas/userMaterials.json';
@Component({
  selector: 'app-study-material',
  templateUrl: './study-material.component.html',
  styleUrls: ['./study-material.component.scss'],
})
export class StudyMaterialComponent {
  constructor(
    public dialog: MatDialog,
    private activatedRoute: ActivatedRoute
  ) {}

  gridData: any;
 

  private gridApi!: GridApi<any>;

  public defaultColDef: ColDef = {
    // set the default column width
    width: 150,
    // make every column editable
    editable: true,
    // make columns resizable
    resizable: true,
    // disable cell data types
    cellDataType: false,
    filter: true,
  };

  ngOnInit(): void {
     this.activatedRoute.data.subscribe((data) => {
      //this.gridData = data['materialData'];
      this.gridData = materialData;
    });
  }

  onGridReady(params: GridReadyEvent) {
    var cols = params.columnApi.getColumns()!;
    cols.forEach(function (col) {
      var colDef = col.getColDef();
      // console.log(
      //   colDef.headerName + ', Column ID = ' + col.getId(),
      //   JSON.stringify(colDef)
      // );
    });
  }

  onFirstDataRendered(params: any): void {
    params.api.sizeColumnsToFit();
  }

  openDialog() {
    this.dialog.open(CreateMaterialDialogComponent, {
      height: '400px',
      width: '400px',
      data: {
        animal: 'panda',
      },
    });
  }
}

import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { actionCellvalueRenderComponent } from './actionCellvalueRender.component';
@Component({
  selector: 'app-study-material-list',
  templateUrl: './study-material-list.component.html',
  styleUrls: ['./study-material-list.component.scss'],
})
export class StudyMaterialListComponent implements OnInit, OnChanges {
  @Input() data: any;
  rowData: any;
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

  ngOnChanges() {
    console.log(this.data);
    this.rowData = this.data;
  }
  ngOnInit(): void {
    // console.log(this.data);
    // this.rowData = this.data;
  }
  columnDefs: any = [
    {
      headerName: 'Action',
      field: 'Action',
      cellRenderer: actionCellvalueRenderComponent,
    },
    { headerName: 'id', field: 'id' },
    { headerName: 'createdDate', field: 'createdDate' },
    { headerName: 'Name', field: 'Name' },
    { headerName: 'Subject', field: 'Subject' },
  ];

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
}

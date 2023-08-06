import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CreateMaterialDialogComponent } from '../create-material-dialog/create-material-dialog.component';
import { ActivatedRoute } from '@angular/router';
import { ColDef, GridApi, GridReadyEvent } from 'ag-grid-community';
import { actionCellvalueRenderComponent } from '../study-material-list/actionCellvalueRender.component';

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
  rowData:any;

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
    this.activatedRoute.data.subscribe(({ materialData }) => {
      console.log(!!this.gridData);
      this.gridData = materialData;
      console.log(this.gridData);
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

columnDefs:any = [
  {headerName: 'Action', field: 'Action',   cellRenderer: actionCellvalueRenderComponent,
},
  {headerName: 'id', field: 'id'},
  {headerName: 'createdDate', field: 'createdDate'},
  {headerName: 'Name', field: 'Name'},
  {headerName: 'Subject', field: 'Subject'}
];

onFirstDataRendered(params:any): void {
  params.api.sizeColumnsToFit();
}

  data = [
    {
      id: 1,
      createdDate: '1/8/2024',
      materialsrc:
        'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
      Name: 'material1',
      Subject: 'ECE',
    },
    {
      id: 2,
      createdDate: '1/8/2023',
      materialsrc:
        'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf',
      Name: 'material1',
      Subject: 'ECE',
    },
    {
      id: 3,
      createdDate: '1/8/2023',
      materialsrc: 'http://localhost:4200/assets/mmmm.pdf',
      Name: 'material1',
      Subject: 'ECE',
    },
    {
      id: 4,
      createdDate: '1/8/2023',
      materialsrc: 'http://localhost:4200/assets/mmmm.pdf',
      Name: 'material1',
      Subject: 'ECE',
    },
    {
      id: 5,
      createdDate: '1/8/2023',
      materialsrc: 'http://localhost:4200/assets/mmmm.pdf',
      Name: 'material1',
      Subject: 'ECE',
    },
  ];

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

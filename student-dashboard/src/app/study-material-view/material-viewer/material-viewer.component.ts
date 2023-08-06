import { Component, OnInit, ViewChild } from '@angular/core';
import { PdfViewerComponent } from 'ng2-pdf-viewer';

@Component({
  selector: 'app-material-viewer',
  templateUrl: './material-viewer.component.html',
  styleUrls: ['./material-viewer.component.scss'],
})
export class MaterialViewerComponent implements OnInit {
  @ViewChild(PdfViewerComponent) private pdfComponent:
    | PdfViewerComponent
    | undefined;
  stringToSearch = 'download';
  query: string = '';

  constructor() {}
  ngOnInit(): void {}
  src = 'https://vadimdez.github.io/ng2-pdf-viewer/assets/pdf-test.pdf';
  src2 = 'http://localhost:4200/assets/mmmm.pdf';

  callBackFn($event: any) {
    console.log($event);
  }

  pageRendered(e: CustomEvent) {
    console.log('(page-rendered)', e);
  }

  searchQueryChanged(newQuery: string) {
    if (newQuery !== this.query) {
      this.query = newQuery;
      this.pdfComponent?.pdfFindController._eventBus.dispatch('find', {
        query: this.query,
        highlightAll: true,
      });
    } else {
      this.pdfComponent?.pdfFindController._eventBus.dispatch('findagain', {
        query: this.query,
        highlightAll: true,
      });
    }
  }

}

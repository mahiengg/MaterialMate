import { Component, OnInit, ViewChild } from '@angular/core';
import { MatMenuTrigger } from '@angular/material/menu';
import { ActivatedRoute, Router } from '@angular/router';
import { PdfViewerComponent } from 'ng2-pdf-viewer';
import pdfMaterials from '../../testDatas/userMaterials.json';

@Component({
  selector: 'app-material-viewer',
  templateUrl: './material-viewer.component.html',
  styleUrls: ['./material-viewer.component.scss'],
})
export class MaterialViewerComponent implements OnInit {
  @ViewChild(PdfViewerComponent) private pdfComponent:
    | PdfViewerComponent
    | undefined;

  query: string = '';
  pdfSrc: any = '';
  @ViewChild('menuTrigger')
  menuTrigger!: MatMenuTrigger;

  notes: any;
  //https://www.gnits.ac.in/wp-content/uploads/2021/11/ECE-BOOK-1.pdf ==ece
  //https://sd.blackball.lv/library/Beginning_Software_Engineering_(2015).pdf
  //https://computingbook.org/FullText.pdf ==csc
  //https://people.smp.uq.edu.au/DirkKroese/DSML/DSML.pdf ==dsml
  //https://askmm.net/wp-content/uploads/2021/04/The-Science-of-Effective-Communication-by-Ian-Tuhovsky.pdf ==commu

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    console.log(this.activatedRoute.snapshot.paramMap.get('id'));
    console.log(pdfMaterials);

    this.activatedRoute.data.subscribe(({ userNotes }) => {
      console.log(userNotes);
      this.notes = userNotes;
    });

    this.pdfSrc = pdfMaterials.filter((x) => x.id.toString() === this.activatedRoute.snapshot.paramMap.get('id'))[0].materialsrc;
  }

  callBackFn($event: any) {
    //console.log($event);
  }

  pageRendered(e: CustomEvent) {
    //  console.log('(page-rendered)', e);
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

  addNote() {}

  goBack(){
    this.router.navigate(['/studymaterials']);
  }
}

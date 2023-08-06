import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyMaterialListComponent } from './study-material-list.component';

describe('StudyMaterialListComponent', () => {
  let component: StudyMaterialListComponent;
  let fixture: ComponentFixture<StudyMaterialListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StudyMaterialListComponent]
    });
    fixture = TestBed.createComponent(StudyMaterialListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyTaksListComponent } from './my-taks-list.component';

describe('MyTaksListComponent', () => {
  let component: MyTaksListComponent;
  let fixture: ComponentFixture<MyTaksListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyTaksListComponent]
    });
    fixture = TestBed.createComponent(MyTaksListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

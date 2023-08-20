import { CdkDrag, CdkDragDrop, CdkDropList, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import tasks from '../../testDatas/myWeeklytask.json'
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import  moment from 'moment';

@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss'],

})
export class MyTaskComponent {

  constructor(private apiservice:ApiService) {}

  tasks :any;
  selectedDate = new Date();
 

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = ['with support for free dragging, sorting within a list, transferring items between lists, animations, touch', 'Brush teeth', 'Take a shower', 'Check e-mail', 'Walk dog'];


  ngOnInit(): void {
    this.tasks = tasks;
 }


  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
     
    }
  }

  addEvent(input: any){
   const date = moment(input).format("YYYY-MM-DD");
    console.log(date);
    this.apiservice.getTaskByDate(date).subscribe(res=>{
      console.log(res);
    });
  }

  addSevenDays() {
    const newDate = new Date(this.selectedDate);
    newDate.setDate(newDate.getDate() + 7);
    this.selectedDate = newDate;
   
  }

  reduceSevenDays(){
    const newDate = new Date(this.selectedDate);
    newDate.setDate(newDate.getDate() - 7);
    this.selectedDate = newDate;
  }

  deleteTask($event:any){
    console.log($event);

    this.apiservice.deleteUserTask($event).subscribe(res=>{
      console.log(res);
    });
  }

}

import {
  CdkDrag,
  CdkDragDrop,
  CdkDropList,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import tasks from '../../testDatas/myWeeklytask.json';
import { FormControl } from '@angular/forms';
import { ApiService } from 'src/app/shared/api.service';
import moment from 'moment';
import { MatDialog } from '@angular/material/dialog';
import { AddingNewTaskDialog } from './AddingNewTaskDialog';



@Component({
  selector: 'app-my-task',
  templateUrl: './my-task.component.html',
  styleUrls: ['./my-task.component.scss'],
})

export class MyTaskComponent {
  constructor(private dialog: MatDialog, private apiservice: ApiService) {}

  tasks: any;
  selectedDate = new Date();

  todo = ['Get to work', 'Pick up groceries', 'Go home', 'Fall asleep'];

  done = [
    'with support for free dragging, sorting within a list, transferring items between lists, animations, touch',
    'Brush teeth',
    'Take a shower',
    'Check e-mail',
    'Walk dog',
  ];

  ngOnInit(): void {
    this.tasks = tasks;
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  addEvent(input: any) {
    const date = moment(input).format('YYYY-MM-DD');
    console.log(date);
    this.apiservice.getTaskByDate(date).subscribe((res) => {
      console.log(res);
      this.tasks = res;
    });
  }

  addSevenDays() {
    const newDate = new Date(this.selectedDate);
    newDate.setDate(newDate.getDate() + 7);
    this.selectedDate = newDate;
    const date = moment(this.selectedDate).format('YYYY-MM-DD');
    console.log(date);
    this.apiservice.getTaskByDate(date).subscribe((res) => {
      console.log(res);
      this.tasks = res;
    });
  }

  reduceSevenDays() {
    const newDate = new Date(this.selectedDate);
    newDate.setDate(newDate.getDate() - 7);
    this.selectedDate = newDate;
    const date = moment(this.selectedDate).format('YYYY-MM-DD');
    console.log(date);
    this.apiservice.getTaskByDate(date).subscribe((res) => {
      console.log(res);
      this.tasks = res;
    });
  }

  deleteTask($event: any) {
    console.log($event);

    this.apiservice.deleteUserTask($event).subscribe((res) => {
      console.log(res);
    });
  }

  addTask($event: any) {
    const dialogRef = this.dialog.open(AddingNewTaskDialog, {
      data: { item: $event },
    });

    dialogRef.afterClosed().subscribe((result) => {
      const newTask: any = {};
      console.log(result);
      newTask.task = result;
      newTask.task_date = moment($event.taskDate).format('yyyy-MM-DD');
      if (result) {
        this.apiservice.addUserTask(newTask).subscribe((res: any) => {
          this.tasks.map((x: any) => {
            if (
              moment(x.taskDate).format('yyyy-MM-DD') ===
              moment($event.taskDate).format('yyyy-MM-DD')
            ) {
              let response: any = {};
              response.id = res.id;
              response.taskDate = res.task_date;
              response.task_content = res.task;
              x.tasks.push(response);
            }
            return x;
          });
          console.log(this.tasks);
          this.tasks = [...this.tasks];
        });
      }
    });
  }
}

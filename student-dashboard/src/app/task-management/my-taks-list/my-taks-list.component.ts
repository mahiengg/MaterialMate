import {
  CdkDrag,
  CdkDragDrop,
  moveItemInArray,
  transferArrayItem,
} from '@angular/cdk/drag-drop';
import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
  Renderer2,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AnyCatcher } from 'rxjs/internal/AnyCatcher';
import { AddingNewTaskDialog } from '../my-task/AddingNewTaskDialog';
import { ApiService } from 'src/app/shared/api.service';
import moment from 'moment';

@Component({
  selector: 'app-my-taks-list',
  templateUrl: './my-taks-list.component.html',
  styleUrls: ['./my-taks-list.component.scss'],
})
export class MyTaksListComponent implements OnChanges {
  @Input() todo: any;
  @Input() done: any;
  @Input() tasks: any;
  @Output() addTaskEvent = new EventEmitter<string>();
  @Output() deleteTaskEvent = new EventEmitter<string>();

  changedTaskArray: any = [];
  hoveredIndex: number | null = null;

  constructor(private dialog: MatDialog, private apiService: ApiService) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(this.tasks);
    // this.rowData = this.data1;
  }

 
  drop(event: CdkDragDrop<string[]>, dropedDate: any) {
  
    if (event.previousContainer === event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      //moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {

      console.log(dropedDate);

      this.apiService.updateTaskDate(event.item.data , dropedDate).subscribe((res) => {
        console.log(res);
      });
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
      console.log(event.item.data);
      this.changedTaskArray.push(event.container.data);
      console.log(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
  }

  evenPredicate(item: CdkDrag<any>) {
    console.log(item);
    return true;
  }

  setHoveredIndex(index: number | null) {
    console.log(index);
    this.hoveredIndex = index;
  }
  changeIcon() {
    console.log('ffffff');
  }

  addTask(item: any) {
    console.log(item);
    this.addTaskEvent.emit(item);
    // const dialogRef = this.dialog.open(AddingNewTaskDialog, {
    //   data: { item: item },
    // });

    // dialogRef.afterClosed().subscribe((result) => {
    //   console.log(result);

    //   const newTask: any = {};

    //   newTask.task = result;
    //   newTask.task_date = moment(item.taskDate).format('yyyy-MM-DD');

    //   this.apiService.addUserTask(newTask).subscribe((res:any) => {
    //     console.log(res);
    //   this.tasks.map((x :any) =>{ 
        
    //     if(moment(x.taskDate).
    //     format('yyyy-MM-DD') === moment(item.taskDate).format('yyyy-MM-DD'))
    //     {
    //         x.tasks.id = res.id;
    //         x.tasks.taskDate = res.task_date;
    //         x.tasks.task_content = res.task;
    //     }
    //     return x;
    //   });
    // });
  //});
  console.log(this.tasks)
}
  

  deleteTask(task: any) {
    console.log(task);

    this.deleteTaskEvent.emit(task);
  }
}

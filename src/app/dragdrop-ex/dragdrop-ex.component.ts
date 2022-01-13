import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem, copyArrayItem} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-dragdrop-ex',
  templateUrl: './dragdrop-ex.component.html',
  styleUrls: ['./dragdrop-ex.component.css']
})
export class DragdropExComponent implements OnInit {

  todo: Array<{id: number, text: string}> = [{id: 1, text: 'Get to work'}, {id: 2, text: 'Pick up groceries'}, {id: 3, text: 'Go home'},
    {id: 7, text:  'Fall asleep'},
    {id: 8, text:  'Get up'}];

  done = [{id: 11, text: 'Brush teeth'}, {id: 13, text: 'Take a shower'}, {id: 43, text:  'Check e-mail'}];

  drop(event: CdkDragDrop<{id: number, text: string}[]>) {    
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      copyArrayItem(
          event.previousContainer.data,
          event.container.data,
          event.previousIndex,
          event.currentIndex,
      );
    }
    console.log(event.container.data);
  }

  constructor() { }

  ngOnInit() {
  }

}

import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Course } from '../../model/course';

@Component({
  selector: 'app-courses-list',
  templateUrl: './courses-list.component.html',
  styleUrls: ['./courses-list.component.css']
})
export class CoursesListComponent {

@Input() courses: Course[] = [];

@Output() add = new EventEmitter(false);
@Output() edit = new EventEmitter(false);
@Output() remove = new EventEmitter(false);

readonly displayedColumns = ['name', 'category', 'actions'];

constructor(){ }

onAdd() {
  this.add.emit(true);
}

onEdit(courses: Course){
  this.edit.emit(courses)
}

onDelete(courses: Course){
  this.remove.emit(courses);
}
}

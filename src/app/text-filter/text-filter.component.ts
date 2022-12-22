import { Component, OnInit } from '@angular/core';
import {ClrDatagridFilter, ClrDatagridFilterInterface} from "@clr/angular";
import {Todo} from "../home/home.component";
import {Observable, Subject} from "rxjs";

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.css']
})
export class TextFilterComponent implements ClrDatagridFilterInterface<Todo> {

  constructor(private filterContainer: ClrDatagridFilter) {
    filterContainer.setFilter(this);
  }

  ngOnInit(): void {
  }
  state = {
    title: ''
  }
  changes: Observable<any> = new Subject();

  accepts(item: Todo): boolean {
    return item.title.includes(this.state.title);
  }

  isActive(): boolean {
    return this.state.title.length > 0;
  }

}

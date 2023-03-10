import { Component, OnInit } from '@angular/core';
import {ClrDatagridFilterInterface} from "@clr/angular";
import {DateFilter} from "../home.component";
import {DatePipe} from "@angular/common";
import {Subject} from "rxjs";

@Component({
  selector: 'app-date-filter',
  templateUrl: './date-filter.component.html',
  styleUrls: ['./date-filter.component.css']
})
export class DateFilterComponent implements OnInit {
  date = '';
  minDate = '';
  maxDate = '';
  filter!: ClrDatagridFilterInterface<DateFilter>;
  constructor() { }



  handleMinChange(e: Date) {
    this.filter.state.minDate = new DatePipe('en-US').transform(e, 'YYYY-MM-dd');
    const change: Subject<any> = this.filter.changes as Subject<any>;
    change.next(true);
  }

  handleMaxChange(e: Date) {
    this.filter.state.maxDate = new DatePipe('en-US').transform(e, 'YYYY-MM-dd');
    const change: Subject<any> = this.filter.changes as Subject<any>;
    change.next(true);
  }

  ngOnInit(): void {
  }

}

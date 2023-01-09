import { Component, OnInit } from '@angular/core';
import {ClrDatagridFilterInterface} from "@clr/angular";
import {TitleFilter} from "../home.component";
import {Subject} from "rxjs";

@Component({
  selector: 'app-title-filter',
  templateUrl: './title-filter.component.html',
  styleUrls: ['./title-filter.component.css']
})
export class TitleFilterComponent implements OnInit {
  filter!: ClrDatagridFilterInterface<TitleFilter>;
  title = '';
  constructor() { }

  ngOnInit(): void {
  }

  handleInput(e: any) {
    this.filter.state.title = e.target.value;
    const change: Subject<any> = this.filter.changes as Subject<any>;
    change.next(true);
  }

  handleFocus() {
    console.log('focus')
  }

  handleBlur() {
    console.log('blur')
  }
}

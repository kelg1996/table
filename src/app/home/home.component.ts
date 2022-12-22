import {Component, OnInit} from '@angular/core';
import {TableColumns, TableData} from "../table/table.types";
import {faker} from '@faker-js/faker';
import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ClrDatagridFilterInterface} from "@clr/angular";
import {AgefilterComponent} from "../agefilter/agefilter.component";
import {DatefilterComponent} from "../datefilter/datefilter.component";
import {TitleFilterComponent} from "./title-filter/title-filter.component";


export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}


export class AgeFilter implements ClrDatagridFilterInterface<Todo> {
  changes = new Subject<any>();
  public minAge!: number;
  public maxAge!: number;

  accepts(person: Todo): boolean {
    return true
  }

  isActive(): boolean {
    return false
  }

}

export class BirthdayFilter implements ClrDatagridFilterInterface<Todo> {
  changes = new Subject<any>;
  value = '';

  accepts(item: Todo): boolean {
    return true
  }

  isActive(): boolean {
    return false
  }
}

export class TitleFilter implements ClrDatagridFilterInterface<Todo> {
  changes = new Subject<any>();
  state = {
    title: ''
  }

  public accepts(item: Todo): boolean {
    return item.title.includes(this.state.title);
  }

  public isActive(): boolean {

    return this.state.title.length > 0;
  }

}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  columns: TableColumns<Todo> = [
    {
      title: 'User ID',
      key: 'userId'
    },
    {
      title: 'ID',
      key: 'id',
    },
    {
      title: 'Title',
      key: 'title',
      filter: {
        filter: new TitleFilter(),
        component: TitleFilterComponent
      }
    },
    {
      title: 'Status',
      key: 'completed',
      render: (todo: Todo) => {
        return todo.completed ? 'Finished' : 'Not Yet'
      }
    },

  ];
  tableData: TableData<Todo> | Observable<TableData<Todo>> = [];
  page = 1;
  pageSize = 10;
  total = 1000;

  constructor(private httpClient: HttpClient) {
  }


  renderExpand(p: Todo) {
    return `
      <pre class="bg-red">${p.title}</pre>
    `
  }

  handlePageChange(page: number) {
    this.page = page;
    this.requestApi();
  }

  requestApi() {
    this.httpClient.get<Todo[]>(`https://jsonplaceholder.typicode.com/todos/`)
      .subscribe(data => {
        this.tableData = data
      })
  }

  ngOnInit(): void {
    this.requestApi();
  }

}

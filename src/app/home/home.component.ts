import {Component, OnInit} from '@angular/core';
import {TableColumns, TableData} from "../table/table.types";

import {Observable, Subject} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {ClrDatagridFilterInterface} from "@clr/angular";
import {DateFilterComponent} from "./date-filter/date-filter.component";


export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export interface User {
  username: string;
  email: string;
  age: number;
  weight: number;
  birthDate: string;
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

export class DateFilter implements ClrDatagridFilterInterface<User> {
  changes = new Subject<any>();
  state = {
    date: ''
  }
  public accepts(item: User): boolean {
    if (!this.state.date) {
      return true;
    }
    return item.birthDate === this.state.date;
  }
  public isActive(): boolean {
    return this.state?.date?.length > 0;
  }
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  columns: TableColumns<User> = [
    {
      title: 'Username',
      key: 'username'
    },
    {
      title: 'Age',
      key: 'age'
    },
    {
      title: 'Weight',
      key: 'weight'
    },
    {
      title: 'Birthday',
      key: "birthDate",
      filter: {
        component: DateFilterComponent,
        filter: new DateFilter()
      }
    }

  ];
  tableData: TableData<User> | Observable<TableData<User>> = [];
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
    this.httpClient.get<{users: User[]}>(`https://dummyjson.com/users`)
      .subscribe(data => {
        this.tableData = data.users
      })
  }

  ngOnInit(): void {
    this.requestApi();
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit {
  data = {
    hello: ''
  }
  name = ''
  constructor() { }

  ngOnInit(): void {
  }

}

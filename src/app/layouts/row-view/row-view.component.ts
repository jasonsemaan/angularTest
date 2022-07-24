import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-row-view',
  templateUrl: './row-view.component.html',
  styleUrls: ['./row-view.component.css']
})
export class RowViewComponent implements OnInit {
  @Input()
  title: any;
  @Input()
  value: any;

  constructor() { }

  ngOnInit(): void {
  }

}

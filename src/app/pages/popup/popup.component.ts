import { Component, OnInit, Inject, Pipe } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-popup',
  templateUrl: './popup.component.html',
  styleUrls: ['./popup.component.css']
})
export class PopupComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA)public data: any, public matDialog: MatDialog,public sanitizer: DomSanitizer) { }
  post : any = this.data.item;


  ngOnInit(): void {

  }

}

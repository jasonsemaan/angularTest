import { Component, OnInit,Inject } from '@angular/core';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-logout-alert',
  templateUrl: './logout-alert.component.html',
  styleUrls: ['./logout-alert.component.css']
})
export class LogoutAlertComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,  public matDialog: MatDialog, private router :Router) { }

  logout(){
    localStorage.setItem("isLoggedin", "false")
    this.router.navigateByUrl('')
    this.matDialog.closeAll();
  }

  closeAlert(){
    this.matDialog.closeAll();
  }
  

  ngOnInit(): void {
  }

}

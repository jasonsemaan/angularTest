import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material/dialog';
import { PopupComponent } from '../popup/popup.component';
import { Router } from '@angular/router';
import { LogoutAlertComponent } from '../logout-alert/logout-alert.component';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor(private appService: AppService, public dialog: MatDialog, private router :Router) { }
  listPostsArticle: any = [];
  listPostsMultimedia: any = [];
  listAllPostsArticle: any = [];
  listAllPostsMultimedia: any = [];
  breakpoint: any = 2;
  rowHeight: any = "250px";
  searchText: any = "";
  copyright: any="";
  randomImg: any="";

  showPopup(post: any) {
    let dialogRef = this.dialog.open(PopupComponent, { data: { item: post } });
    dialogRef.afterClosed().subscribe(result => {
      console.log("after close")
    });
  }

  showLogoutAlert() {
    let dialogRef = this.dialog.open(LogoutAlertComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log("after close")
    });
  }

  onResize(event: any) {
    this.breakpoint = (event.target.innerWidth <= 1000) ? 1 : 2;
    this.rowHeight = (event.target.innerWidth <= 600) ? "450px" : "250px";
  }

  filter(value: string): void {
    this.listPostsArticle = this.listAllPostsArticle.filter((val:any) =>
      val.section_name.toLowerCase().includes(value)
    );
    this.listPostsMultimedia = this.listAllPostsMultimedia.filter((val:any) =>
    val.section_name.toLowerCase().includes(value)
  );
  }

  logout(){
    localStorage.setItem("isLoggedin", "false")
    this.router.navigateByUrl('')
  }

  ngOnInit(): void {
    this.randomImg = this.appService.imagesArray[Math.floor(Math.random() * this.appService.imagesArray.length)];
    console.log(this.appService.copyRight)
    this.copyright=this.appService.copyRight;
    this.appService.listPosts.forEach((post: any) => {
      if (post.document_type == "article") {
        this.listPostsArticle.push(post)
        this.listAllPostsArticle.push(post)
      } else {
        this.listPostsMultimedia.push(post)
        this.listAllPostsMultimedia.push(post)
      }
    });    
  }

  
}

import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private appService: AppService, private router: Router) { }

  apiKey = "";
  errorMsg = "";
  isVisible = false;
  isLoggedIn = localStorage.getItem("isLoggedin");

  storeInputValue(event: any) {
    this.apiKey = event.target.value;
  }

  skipFunction() {
    this.appService.checkApi(localStorage.getItem("apikey")).subscribe((res: any) => {
      this.appService.listPosts = res.response.docs;
      this.appService.copyRight = res.copyright;
      this.router.navigateByUrl('/posts');
    }, (error) => {
    }
    )
  }

  callCheckApi() {
    if (this.apiKey === "") {
      this.errorMsg = "Please fill the required field"
      this.isVisible = true;
    } else {
      this.appService.checkApi(this.apiKey).subscribe((res: any) => {
        localStorage.setItem("isLoggedin", "true")
        localStorage.setItem("apikey", this.apiKey)
        this.isVisible = false;
        this.appService.listPosts = res.response.docs;
        this.appService.copyRight = res.copyright;
        this.router.navigateByUrl('/posts');
      }, (error) => {
        this.errorMsg = "Invalid Api key"
        this.isVisible = true;
      }
      )
    }
  }

  ngOnInit(): void {
  }

}

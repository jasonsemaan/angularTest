import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  rootURL = environment.baseUrl;
  listPosts =[];
  copyRight ="";
  imagesArray = ["https://static.flickr.com/65/174906419_8ba76d8eba.jpg","http://i.cdn.turner.com/cnn/2010/SPORT/football/06/02/football.jabulani.ball.world.cup/t1larg.jpg","https://static01.nyt.com/images/2008/11/05/world/25701801.JPG?quality=75&auto=webp&disable=upscale","https://static01.nyt.com/packages/images/photo/2009/01/20/20090121ABROAD/26565532.JPG?quality=75&auto=webp&disable=upscale"];

  checkApi(apiKey: any):Observable<any> {
    return this.http.get<any>(this.rootURL + '&api-key=' + apiKey)
    .pipe(catchError(this.handleError))
  }

  handleError(error:any){
    return throwError(error.message || "Server Error")
  }

}

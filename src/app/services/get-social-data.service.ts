import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { SocialPost } from '../modules/social';

@Injectable({
  providedIn: 'root'
})
export class GetSocialDataService {
  // private apiUrl =  process.env['API_URL'];
  constructor(private http: HttpClient) { }

  getUserPosts() {
    return this.http
      .get<{ [key: number]: SocialPost}>(
        'https://localhost:8000/SocialMediaController.php'
      )
      .pipe(
        map(data =>{
          const postsArray: SocialPost[] = [];
          for (const key in data) {
            if (data.hasOwnProperty(key)) {
              postsArray.push({ ...data[key], id: key });
            }
          }
          return postsArray;
        })
      );
    }
}


// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class GetSocialDataService {
//   // private apiUrl =  process.env['API_URL'];
//   constructor(private http: HttpClient) { }
//   private apiUrl = 'https://localhost:8000/SocialMediaController.php';

//   getUserPosts() {
//     return this.http.get(this.apiUrl);
//   }
// }

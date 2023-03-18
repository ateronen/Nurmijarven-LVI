import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { SocialPost } from '../components/social-media/social';

@Injectable({
  providedIn: 'root'
})
export class GetSocialDataService {
  // private apiUrl =  process.env['API_URL'];
  constructor(private http: HttpClient) { }

  getUserPosts() {
    return this.http
      .get<{ [key: number]: SocialPost}>(
        'http://localhost:8000/index.php/posts/list?limit=6'
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
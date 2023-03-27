import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { SocialPost } from '../components/social-media/social';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetSocialDataService {
  constructor(private http: HttpClient) { }
  
  private API_URL = environment.apiUrl;

  getUserPosts() {
    return this.http
      .get<{ [key: number]: SocialPost}>(
        this.API_URL
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
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetSocialDataService {
  private apiUrl =  process.env['API_URL'];

  constructor(private http: HttpClient) { }

  getUserPosts() {
    return this.http.get(this.apiUrl);
  }
}

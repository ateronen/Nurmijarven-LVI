import { Component, OnInit } from '@angular/core';
import { GetSocialDataService } from 'src/app/services/get-social-data.service';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  posts!: any[];

  constructor(private socialDataService: GetSocialDataService) {}
  
  ngOnInit(): void {
    this.socialDataService.getUserPosts().subscribe((data: any[]) => {
      this.posts = data;
    });    
  }
}

import { Component, OnInit } from '@angular/core';
import { GetSocialDataService } from 'src/app/services/get-social-data.service';
import { SocialPost } from 'src/app/components/social-media/social';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  postsResponse: SocialPost[] = [];
  isFetching = false;

  constructor(private socialDataService: GetSocialDataService) {}
  
  ngOnInit() {
    this.isFetching = true;
    this.socialDataService.getUserPosts().subscribe(posts => {
      this.isFetching = false;
      this.postsResponse = posts;
    });
  }
}
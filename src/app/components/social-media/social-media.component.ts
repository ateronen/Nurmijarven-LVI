import { Component, OnInit } from '@angular/core';
import { GetSocialDataService } from 'src/app/services/get-social-data.service';
import { SocialPost } from 'src/app/modules/social';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {

  postsResponse: SocialPost[] = [];
  isLoading = false;

  constructor(private socialDataService: GetSocialDataService) {}
  
  ngOnInit() {
    this.isLoading = true;
    this.socialDataService.getUserPosts().subscribe(posts => {
      this.isLoading = false;
      this.postsResponse = posts;
    });
  }
}

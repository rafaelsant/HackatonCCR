import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/services/post';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(private service:UserServiceService) { }
  post:Post;
  ngOnInit(): void {
  }
}

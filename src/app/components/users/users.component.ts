import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { SearchService } from "../../search.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user!: User;
  repoDetails = []
  searchService: SearchService

  constructor(searchService: SearchService) {
    this.searchService = searchService
   }

  ngOnInit(): void {
    this.user = this.searchService.user;
    this.repoDetails = this.searchService.repoData;
  }

}

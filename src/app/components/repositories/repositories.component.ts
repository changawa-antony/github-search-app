import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Repository } from "../../repository";
import { SearchService } from "../../search.service";


@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  user!: User;
  repoDetails = []
  searchService: SearchService
  repository!: Repository;


  constructor(searchService: SearchService) { 
    this.searchService = searchService

    console.log(this.repository)
  }

  ngOnInit(): void {
    this.user = this.searchService.user;
    this.repoDetails = this.searchService.repoData;
  }

}

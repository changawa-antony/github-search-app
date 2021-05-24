import { Component, OnInit } from '@angular/core';
import { SearchService } from 'src/app/search.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username!: string;
  searchService: SearchService;

  submitUsername(){
    this.searchService.getUserData(this.username);
  }

  constructor(searchService: SearchService) {
    this.searchService = searchService
   }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { MyClass } from 'src/app/my-class';
import { Repository } from "../../repository";
import { MyService } from "../../my-service.service";

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  myClass!: MyClass;
  repoDetails = []
  myService: MyService
  repository!: Repository;


  constructor(myService: MyService) { 
    this.myService = myService

    console.log(this.repository)
  }

  ngOnInit(): void {
    this.myClass = this.myService.myClass;
    this.repoDetails = this.myService.repoData;
  }

}
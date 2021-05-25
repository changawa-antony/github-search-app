import { Injectable } from '@angular/core';
import { MyClass } from './my-class';
import { Repository } from "./repository";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class MyService {

  myClass: MyClass
  repository!: Repository;
  repoData = [];
  newUserData: any = [];
  username = "changawa-antony"

  constructor(private http:HttpClient) {
    this.myClass = new MyClass("",0,"","",new Date());
    this.repository = new Repository("","",new Date(),"","");
   }

   getUserData(username: string){
     interface ApiResponse{
       bio:string,
       public_repos: number,
       login: string,
       avatar_url:string,
       created_at: Date
     }

     let promise = new Promise<void>((resolve, reject) =>{
       this.http.get<ApiResponse>("http://api.github.com/users/"+username).toPromise().then(response =>{
         this.myClass.bio = response.bio;
         this.myClass.public_repos = response.public_repos;
         this.myClass.login = response.login;
         this.myClass.avatar_url = response.avatar_url;
         this.myClass.created_at = response.created_at;

         resolve()
       },error =>{
        reject(error)
      }
       
       )

       this.http.get<any>("https://api.github.com/users/"+username+"repos").toPromise().then(response =>{
         for(let i=0; i<response.length; i++){
           this.newUserData = new Repository(response[i].name,response[i].description,response[i].updated_at,response[i].clone_url,response[i].language);
           this.repoData.push(this.newUserData as never)
           
         }

         resolve()
       },error=>(
         reject(error)
       )
       )
       
     })
     return promise;
   }
}


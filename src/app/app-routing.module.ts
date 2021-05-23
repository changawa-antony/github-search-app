import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { RepositoriesComponent } from './components/repositories/repositories.component';
import { UsersComponent } from './components/users/users.component';

const routes: Routes = [
  {path:"home", component:LandingPageComponent},
  {path:"users", component:UsersComponent},
  {path:"repositories", component:RepositoriesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const
RoutingComponent = [LandingPageComponent,UsersComponent,RepositoriesComponent];

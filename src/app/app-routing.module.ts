import { ArchivesComponent } from './archives/archives.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PostsComponent } from './posts/posts.component';
import { GithubProfileComponent } from './github-profile/github-profile.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubFollowersComponent } from './github-followers/github-followers.component';


const routes: Routes = [
  { 
    path:'',
    component:HomeComponent
  },
  {
    path:'archives/:year/:month',
    component:ArchivesComponent
  },
  {
    path:'followers/:id/:capital',
    component:GithubProfileComponent
  },
  {
    path:'followers',
    component:GithubFollowersComponent
  },
  {
    path:'posts',
    component:PostsComponent
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-github-profile',
  templateUrl: './github-profile.component.html',
  styleUrls: ['./github-profile.component.css']
})
export class GithubProfileComponent implements OnInit {
  paramID: string;

  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.paramID = this.route.snapshot.paramMap.get('id');
    console.log(this.paramID);
    // this.route.paramMap.subscribe(res=>{
    //   this.paramID= res.get('id');
    //   console.log(this.paramID);
    // });
  }

}

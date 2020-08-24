import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-archives',
  templateUrl: './archives.component.html',
  styleUrls: ['./archives.component.css']
})
export class ArchivesComponent implements OnInit {
  year;
  month;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    const params = this.route.snapshot.paramMap;
    this.year = params.get('year');
    this.month = params.get('month');
  }
  viewAll(): void {
    this.router.navigate(['/']);
  }
}

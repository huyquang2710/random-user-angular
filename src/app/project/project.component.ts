import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  public people: any;

  constructor(private common: CommonService) { }

  ngOnInit(): void {
    console.log("init");
    this.common.getRandomPeople().subscribe(result => {
      if(result && result.results) {
          this.people = result.results;
          console.log("this people:", this.people )
      }
    });
  }

}

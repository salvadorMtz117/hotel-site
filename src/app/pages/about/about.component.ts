import { Component, OnInit } from '@angular/core';
import { about } from 'src/app/data/about';
import { AboutModel } from 'src/app/model/about.model';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: []
})
export class AboutComponent implements OnInit{
  aboutData!: AboutModel;

  ngOnInit(): void {
    this.aboutData = about;
  }

}

import { Component, OnInit } from '@angular/core';
import { about } from 'src/app/data/about';
import { AboutModel } from 'src/app/model/about.model';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: []
})
export class AboutusComponent implements OnInit {

  aboutData!: AboutModel;

  ngOnInit(): void {
    this.aboutData = about;
  }

}

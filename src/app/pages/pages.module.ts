import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Módulos principales
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './content/content.component';
import { AboutusComponent } from './content/aboutus/aboutus.component';
import { BlogComponent } from './content/blog/blog.component';
import { BookingComponent } from './content/booking/booking.component';
import { ContactusComponent } from './content/contactus/contactus.component';
import { GaleryComponent } from './content/galery/galery.component';
import { OurrommComponent } from './content/ourromm/ourromm.component';

// Módulos de contenido

@NgModule({
  declarations: [
    PagesComponent,
    ContentComponent,
    AboutusComponent,
    BlogComponent,
    BookingComponent,
    ContactusComponent,
    GaleryComponent,
    OurrommComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class PagesModule { }

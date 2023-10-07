import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { PagesComponent } from './pages.component'
import { AboutComponent } from './about/about.component'
import { BlogComponent } from './blog/blog.component'
import { ContactComponent } from './contact/contact.component'
import { GaleryComponent } from './galery/galery.component'
import { RoomComponent } from './room/room.component'
import { RestaurantComponent } from './restaurant/restaurant.component'

const routes: Routes = [
    { path: 'inicio',component: PagesComponent},
    { path: 'about', component: AboutComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'gallery', component: GaleryComponent },
    { path: 'room', component: RoomComponent },
    { path: 'restaurant', component: RestaurantComponent },
    { path: "**", redirectTo: "inicio" }
]

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }

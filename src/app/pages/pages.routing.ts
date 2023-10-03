import { Routes, RouterModule } from '@angular/router'
import { NgModule } from '@angular/core'
import { PagesComponent } from './pages.component'

const routes: Routes = [
    { path: 'inicio',component: PagesComponent},
    { path: "**", redirectTo: "inicio" }
]

@NgModule({
    imports: [
      RouterModule.forChild(routes)
    ],
    exports: [ RouterModule ]
  })
  export class PagesRoutingModule { }

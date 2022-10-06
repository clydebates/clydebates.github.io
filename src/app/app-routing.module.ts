import { Injectable, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ElectionsComponent } from './elections/elections.component';
import { HomeComponent } from './home/home.component';
import { SenatorsComponent } from './senators/senators.component';

@Injectable({providedIn: 'root'})
export class ResolvedSenatorsTitle implements Resolve<string> {
  resolve() {
    return Promise.resolve('Elections | US Senate');
  }
}

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'elections', component: ElectionsComponent, children: [
    {
      path: 'senators',  // child route path
      title: ResolvedSenatorsTitle,
      component: SenatorsComponent,  // child route component that the router renders
    },
  ]},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

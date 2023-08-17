import { Injectable, NgModule } from '@angular/core';
import { Resolve, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ElectionsComponent } from './elections/elections.component';
import { HomeComponent } from './home/home.component';
import { CandidatesComponent } from './candidates/candidates.component';

@Injectable({providedIn: 'root'})
export class ResolvedCandidatesTitle implements Resolve<string> {
  resolve() {
    return Promise.resolve('Elections');
  }
}

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'elections', component: ElectionsComponent, children: [
    {
      path: 'candidates',  // child route path
      title: ResolvedCandidatesTitle,
      component: CandidatesComponent,  // child route component that the router renders
    },
  ]},
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

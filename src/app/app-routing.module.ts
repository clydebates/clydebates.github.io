import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UltimateTeammatesComponent } from './ultimate-teammates/ultimate-teammates.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { PortfolioComponent } from './portfolio/portfolio.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'portfolio', component: PortfolioComponent, children: [{ path: 'ultimate-teammates', component: UltimateTeammatesComponent}] },
  { path: '**', component: HomeComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

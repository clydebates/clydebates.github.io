import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UltimateTeammatesComponent } from './ultimate-teammates/ultimate-teammates.component';

const routes: Routes = [
  { path: 'ultimate-teammates', component: UltimateTeammatesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrikazAkumulacijaComponent } from './prikaz-akumulacija/prikaz-akumulacija.component';

const routes: Routes = [
  { path: '', component: PrikazAkumulacijaComponent },
  { path: 'prikaz-akumulacija', component: PrikazAkumulacijaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

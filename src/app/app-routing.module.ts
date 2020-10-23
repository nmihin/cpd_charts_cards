import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilancaProizvodnjeComponent } from './bilanca-proizvodnje/bilanca-proizvodnje.component';
import { DogadjajiComponent } from './dogadjaji/dogadjaji.component';
import { HidrologijaComponent } from './hidrologija/hidrologija.component';
import { HidroloskePostajeComponent } from './hidroloske-postaje/hidroloske-postaje.component';
import { MeteoroloskePostajeComponent } from './meteoroloske-postaje/meteoroloske-postaje.component';
import { ObracunskaMjerenjaComponent } from './obracunska-mjerenja/obracunska-mjerenja.component';
import { PiezometarskePostajeComponent } from './piezometarske-postaje/piezometarske-postaje.component';

import { PrikazAkumulacijaComponent } from './prikaz-akumulacija/prikaz-akumulacija.component';
import { ProizvodnjaPogoniComponent } from './proizvodnja-pogoni/proizvodnja-pogoni.component';
import { RadnaJalovaSnagaComponent } from './radna-jalova-snaga/radna-jalova-snaga.component';
import { VozniRedoviComponent } from './vozni-redovi/vozni-redovi.component';

const routes: Routes = [
  { path: '', component: PrikazAkumulacijaComponent },
  { path: 'prikaz-akumulacija', component: PrikazAkumulacijaComponent },
  { path: 'meteoroloske-postaje', component: MeteoroloskePostajeComponent },
  { path: 'hidrologija', component: HidrologijaComponent },
  { path: 'dogadjaji', component:  DogadjajiComponent},
  { path: 'bilanca-proizvodnje', component:  BilancaProizvodnjeComponent},
  { path: 'hidroloske-postaje', component:  HidroloskePostajeComponent},
  { path: 'obracunska-mjerenja', component:  ObracunskaMjerenjaComponent},
  { path: 'piezometarske-postaje', component:  PiezometarskePostajeComponent},
  { path: 'proizvodnja-pogoni', component:  ProizvodnjaPogoniComponent},
  { path: 'radna-jalova-snaga', component:  RadnaJalovaSnagaComponent},
  { path: 'vozni-redovi', component:  VozniRedoviComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

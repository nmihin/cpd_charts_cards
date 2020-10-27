import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BilancaProizvodnjeComponent } from './stranice/bilanca-proizvodnje/bilanca-proizvodnje.component';
import { DogadjajiComponent } from './stranice/dogadjaji/dogadjaji.component';
import { HidrologijaComponent } from './stranice/hidrologija/hidrologija.component';
import { HidroloskePostajeComponent } from './stranice/hidroloske-postaje/hidroloske-postaje.component';
import { MeteoroloskePostajeComponent } from './stranice/meteoroloske-postaje/meteoroloske-postaje.component';
import { ObracunskaMjerenjaComponent } from './stranice/obracunska-mjerenja/obracunska-mjerenja.component';
import { PiezometarskePostajeComponent } from './stranice/piezometarske-postaje/piezometarske-postaje.component';

import { PrikazAkumulacijaComponent } from './stranice/prikaz-akumulacija/prikaz-akumulacija.component';
import { ProizvodnjaPogoniComponent } from './stranice/proizvodnja-pogoni/proizvodnja-pogoni.component';
import { RadnaJalovaSnagaComponent } from './stranice/radna-jalova-snaga/radna-jalova-snaga.component';
import { VozniRedoviComponent } from './stranice/vozni-redovi/vozni-redovi.component';

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

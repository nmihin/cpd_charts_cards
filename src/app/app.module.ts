import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { AgChartsAngularModule } from 'ag-charts-angular';


import { PrikazAkumulacijaComponent } from './prikaz-akumulacija/prikaz-akumulacija.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { RadnaJalovaSnagaComponent } from './radna-jalova-snaga/radna-jalova-snaga.component';
import { BilancaProizvodnjeComponent } from './bilanca-proizvodnje/bilanca-proizvodnje.component';
import { ProizvodnjaPogoniComponent } from './proizvodnja-pogoni/proizvodnja-pogoni.component';
import { HidroloskePostajeComponent } from './hidroloske-postaje/hidroloske-postaje.component';
import { PiezometarskePostajeComponent } from './piezometarske-postaje/piezometarske-postaje.component';
import { MeteoroloskePostajeComponent } from './meteoroloske-postaje/meteoroloske-postaje.component';
import { ObracunskaMjerenjaComponent } from './obracunska-mjerenja/obracunska-mjerenja.component';
import { VozniRedoviComponent } from './vozni-redovi/vozni-redovi.component';
import { DogadjajiComponent } from './dogadjaji/dogadjaji.component';
import { HidrologijaComponent } from './hidrologija/hidrologija.component';

@NgModule({
  declarations: [
    AppComponent,
    PrikazAkumulacijaComponent,
    HeaderComponent,
    FooterComponent,
    RadnaJalovaSnagaComponent,
    BilancaProizvodnjeComponent,
    ProizvodnjaPogoniComponent,
    HidroloskePostajeComponent,
    PiezometarskePostajeComponent,
    MeteoroloskePostajeComponent,
    ObracunskaMjerenjaComponent,
    VozniRedoviComponent,
    DogadjajiComponent,
    HidrologijaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgChartsAngularModule,
    AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

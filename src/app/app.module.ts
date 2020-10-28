import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { AgChartsAngularModule } from 'ag-charts-angular';

import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatNativeDateModule } from '@angular/material/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import {
  ChartModule,
  RangeNavigatorModule,
} from '@syncfusion/ej2-angular-charts';
import {
  AreaSeriesService,
  DateTimeService,
  StepLineSeriesService,
  RangeTooltipService,
} from '@syncfusion/ej2-angular-charts';

// STRUKTURA
import { ZaglavljeComponent } from './struktura/zaglavlje/zaglavlje.component';
import { PodnozjeComponent } from './struktura/podnozje/podnozje.component';

// STRANICE
import { PrikazAkumulacijaComponent } from './stranice/prikaz-akumulacija/prikaz-akumulacija.component';
import { RadnaJalovaSnagaComponent } from './stranice/radna-jalova-snaga/radna-jalova-snaga.component';
import { BilancaProizvodnjeComponent } from './stranice/bilanca-proizvodnje/bilanca-proizvodnje.component';
import { ProizvodnjaPogoniComponent } from './stranice/proizvodnja-pogoni/proizvodnja-pogoni.component';
import { HidroloskePostajeComponent } from './stranice/hidroloske-postaje/hidroloske-postaje.component';
import { PiezometarskePostajeComponent } from './stranice/piezometarske-postaje/piezometarske-postaje.component';
import { MeteoroloskePostajeComponent } from './stranice/meteoroloske-postaje/meteoroloske-postaje.component';
import { ObracunskaMjerenjaComponent } from './stranice/obracunska-mjerenja/obracunska-mjerenja.component';
import { VozniRedoviComponent } from './stranice/vozni-redovi/vozni-redovi.component';
import { DogadjajiComponent } from './stranice/dogadjaji/dogadjaji.component';
import { HidrologijaComponent } from './stranice/hidrologija/hidrologija.component';

// KOMPONENTE
import { PreuzimanjeComponent } from './komponente/preuzimanje/preuzimanje.component';
import { DatumvrijemerasponComponent } from './komponente/datumvrijemeraspon/datumvrijemeraspon.component';

@NgModule({
  declarations: [
    AppComponent,
    PrikazAkumulacijaComponent,
    ZaglavljeComponent,
    PodnozjeComponent,
    RadnaJalovaSnagaComponent,
    BilancaProizvodnjeComponent,
    ProizvodnjaPogoniComponent,
    HidroloskePostajeComponent,
    PiezometarskePostajeComponent,
    MeteoroloskePostajeComponent,
    ObracunskaMjerenjaComponent,
    VozniRedoviComponent,
    DogadjajiComponent,
    HidrologijaComponent,
    PreuzimanjeComponent,
    DatumvrijemerasponComponent,
  ],
  imports: [
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule,
    MatCheckboxModule,
    SliderModule,
    ChartModule,
    RangeNavigatorModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgChartsAngularModule,
    AgGridModule.withComponents([]),
    NoopAnimationsModule,
  ],
  providers: [
    AreaSeriesService,
    DateTimeService,
    StepLineSeriesService,
    RangeTooltipService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

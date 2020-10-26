import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AgGridModule } from 'ag-grid-angular';
import { AgChartsAngularModule } from 'ag-charts-angular';

import {MatTableModule} from '@angular/material/table';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';

import { SliderModule } from '@syncfusion/ej2-angular-inputs';
import { ChartModule, RangeNavigatorModule } from '@syncfusion/ej2-angular-charts';
import { AreaSeriesService, DateTimeService, StepLineSeriesService, RangeTooltipService} from '@syncfusion/ej2-angular-charts';

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
import { DownloadComponent } from './layout/download/download.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

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
    HidrologijaComponent,
    DownloadComponent
  ],
  imports: [
    MatTableModule,
    MatTabsModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    SliderModule,
    ChartModule,
    RangeNavigatorModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AgChartsAngularModule,
    AgGridModule.withComponents([]),
    NoopAnimationsModule
  ],
  providers: [AreaSeriesService, DateTimeService, StepLineSeriesService, RangeTooltipService],
  bootstrap: [AppComponent]
})
export class AppModule { }

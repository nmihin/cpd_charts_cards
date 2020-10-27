import { Component, OnInit } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

@Component({
  selector: 'app-hidrologija',
  templateUrl: './hidrologija.component.html',
  styleUrls: ['./hidrologija.component.css']
})
export class HidrologijaComponent implements OnInit {

  optionsBilanca: any;
  private defaultColDef;
  private gridApi;
  private gridColumnApi;

  public modules: any[] = [ClientSideRowModelModule];

  private currentRowHeight;
  private getRowHeight;

  lokacije = [
    { field: 'postaja', sortable: true, filter: true  },
    { field: 'vodotok', sortable: true, filter: true },
    { field: 'protok [m3/s]', sortable: true, filter: true },
    { field: 'relativna razina [cm]', sortable: true, filter: true },
    { field: 'apsolutna razina [m.n.m]', sortable: true, filter: true },
    { field: 'vrijeme dostave', sortable: true, filter: true }
  ];

  vrijednosti = [
    {
      'postaja': 'HP Golubić',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': '1,030',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    },
    {
      'postaja': 'HP Grabovica',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': 'NEMA IZMJENE',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    },
    {
      'postaja': 'HP Guber',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': '1,030',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    },
    {
      'postaja': 'HP Podgradina',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': '1,030',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    },
    {
      'postaja': 'HP Sinjski ponor',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': '1,030',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    },
    {
      'postaja': 'HP Blato na Cetini',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': '1,030',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    },
    {
      'postaja': 'HP Brana Đale',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': '1,030',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    },
    {
      'postaja': 'HP Čikotina lađa',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': '1,030',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    },
    {
      'postaja': 'HP Gala',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': '1,030',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    },
    {
      'postaja': 'HP Grab',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': '1,030',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    },
    {
      'postaja': 'HP Han',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': '1,030',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    },
    {
      'postaja': 'HP Pavića Most',
      'vodotok': 'Buško Blato',
      'protok [m3/s]': '1,030',
      'relativna razina [cm]': '77,00',
      'apsolutna razina [m.n.m]': '708,51',
      'vrijeme dostave': '4.2.2020. - 8:00:00'
    }
  ];

  constructor() {

    this.defaultColDef = { resizable: true };
    this.getRowHeight = function () {
      return this.currentRowHeight;
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });

    params.api.sizeColumnsToFit();
  }

  ngOnInit(): void {
  }

}

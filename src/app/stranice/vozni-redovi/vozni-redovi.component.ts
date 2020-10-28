import { Component, OnInit } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

@Component({
  selector: 'app-vozni-redovi',
  templateUrl: './vozni-redovi.component.html',
  styleUrls: ['./vozni-redovi.component.css']
})
export class VozniRedoviComponent implements OnInit {

  private defaultColDef;
  private gridApi;
  private gridColumnApi;

  public modules: any[] = [ClientSideRowModelModule];

  private currentRowHeight;
  private getRowHeight;

  polja = [
    { field: 'Vrijeme', sortable: true, filter: true  },
    { field: 'Podsliv Rječina: Dotok (m3/s)', sortable: true, filter: true },
    { field: 'Sliv Rječina: Snaga (MW)', sortable: true, filter: true },
    { field: 'HE Rijeka: Snaga (MW)', sortable: true, filter: true },
    { field: 'HE Rijeka Ag1: Snaga (MW)', sortable: true, filter: true },
    { field: 'HE Rijeka Ag2: Snaga (MW)', sortable: true, filter: true },
    { field: 'Akumulacija Valići: Preljev (m3/s)', sortable: true, filter: true },
    { field: 'Akumulacija Valići: Razina (m.n.m.)', sortable: true, filter: true },
    { field: 'HE Rijeka: Protok (m3/s)', sortable: true, filter: true },
    { field: 'HE Rijeka Ag1: Protok (m3/s)', sortable: true, filter: true },
    { field: 'HE Rijeka Ag2: Protok (m3/s)', sortable: true, filter: true }
  ];

  vrijednosti = [
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
    },
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
    },
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
    },
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
    },
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
    },
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
    },
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
    },
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
    },
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
    },
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
    },
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
    },
    {
      'Vrijeme': '01.05.2019. 12:00',
      'Podsliv Rječina: Dotok (m3/s)': 0,
      'Sliv Rječina: Snaga (MW)': 0,
      'HE Rijeka: Snaga (MW)': 0,
      'HE Rijeka Ag1: Snaga (MW)': 0,
      'HE Rijeka Ag2: Snaga (MW)': '10,05',
      'Akumulacija Valići: Preljev (m3/s)': 0,
      'Akumulacija Valići: Razina (m.n.m.)': 0,
      'HE Rijeka: Protok (m3/s)': 0,
      'HE Rijeka Ag1: Protok (m3/s)': 0,
      'HE Rijeka Ag2: Protok (m3/s)': 0
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

  selectMonth(e): void {

  }

  rangeUpdate(e): void {

  }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

@Component({
  selector: 'app-bilanca-proizvodnje',
  templateUrl: './bilanca-proizvodnje.component.html',
  styleUrls: ['./bilanca-proizvodnje.component.css'],
})
export class BilancaProizvodnjeComponent implements OnInit {
  optionsBilanca: any;
  private defaultColDef;
  private gridApi;
  private gridColumnApi;

  public modules: any[] = [ClientSideRowModelModule];

  bilanca = [
    {
      vrijeme: '00:00',
      ostvarena: 60,
      planirana: 62,
    },
    {
      vrijeme: '00:30',
      ostvarena: 65,
      planirana: 77,
    },
    {
      vrijeme: '01:00',
      ostvarena: 50,
      planirana: 55,
    },
    {
      vrijeme: '01:30',
      ostvarena: 15,
      planirana: 20,
    },
    {
      vrijeme: '02:00',
      ostvarena: 27,
      planirana: 30,
    },
    {
      vrijeme: '02:30',
      ostvarena: 30,
      planirana: 35,
    },
    {
      vrijeme: '03:00',
      ostvarena: 35,
      planirana: 37,
    },
    {
      vrijeme: '03:30',
      ostvarena: 40,
      planirana: 45,
    },
    {
      vrijeme: '04:00',
      ostvarena: 37,
      planirana: 40,
    },
    {
      vrijeme: '04:30',
      ostvarena: 39,
      planirana: 43,
    },
    {
      vrijeme: '05:00',
      ostvarena: 41,
      planirana: 44,
    },
    {
      vrijeme: '05:30',
      ostvarena: 43,
      planirana: 47,
    },
    {
      vrijeme: '06:00',
      ostvarena: 45,
      planirana: 50,
    },
    {
      vrijeme: '06:30',
      ostvarena: 47,
      planirana: 51,
    },
    {
      vrijeme: '07:00',
      ostvarena: 44,
      planirana: 48,
    },
    {
      vrijeme: '07:30',
      ostvarena: 42,
      planirana: 46,
    },
    {
      vrijeme: '08:00',
      ostvarena: 40,
      planirana: 44,
    },
    {
      vrijeme: '08:30',
      ostvarena: 39,
      planirana: 42,
    },
    {
      vrijeme: '09:00',
      ostvarena: 37,
      planirana: 40,
    },
    {
      vrijeme: '09:30',
      ostvarena: 30,
      planirana: 35,
    },
    {
      vrijeme: '10:00',
      ostvarena: 28,
      planirana: 33,
    },
    {
      vrijeme: '10:30',
      ostvarena: 25,
      planirana: 30,
    },
    {
      vrijeme: '11:00',
      ostvarena: 22,
      planirana: 26,
    },
    {
      vrijeme: '11:30',
      ostvarena: 20,
      planirana: 23,
    },
    {
      vrijeme: '12:00',
      ostvarena: 17,
      planirana: 20,
    },
  ];

  lokacije = [
    { field: '' },
    { field: 'HE Sklope', sortable: true, filter: true  },
    { field: 'HE Senj', sortable: true, filter: true },
    { field: 'HE Lešće', sortable: true, filter: true },
    { field: 'CHE Fužine', sortable: true, filter: true },
    { field: 'RHE Lepenica', sortable: true, filter: true },
    { field: 'HE Vinodol', sortable: true, filter: true },
    { field: 'HE Gojak', sortable: true, filter: true },
    { field: 'HE Ozalj 1', sortable: true, filter: true },
    { field: 'HE Ozalj 2', sortable: true, filter: true },
    { field: 'HE Zeleni Vir', sortable: true, filter: true },
    { field: 'HE Rijeka', sortable: true, filter: true },
    { field: 'Ukupno', sortable: true, filter: true },
  ];

  vrijednosti = [
    {
      'HE Sklope': 0,
      'HE Senj': 0,
      'HE Lešće': 0,
      'CHE Fužine': 0,
      'RHE Lepenica': 0,
      'HE Vinodol': 0,
      'HE Gojak': 0,
      'HE Ozalj 1': 0,
      'HE Ozalj 2': 0,
      'HE Zeleni Vir': 0,
      'HE Rijeka': 0,
      'Ukupno': 0
    },
    {
      'HE Sklope': 0,
      'HE Senj': 0,
      'HE Lešće': 0,
      'CHE Fužine': 0,
      'RHE Lepenica': 0,
      'HE Vinodol': 0,
      'HE Gojak': 0,
      'HE Ozalj 1': 0,
      'HE Ozalj 2': 0,
      'HE Zeleni Vir': 0,
      'HE Rijeka': 0,
      'Ukupno': 0
    },
    {
      'HE Sklope': 0,
      'HE Senj': 0,
      'HE Lešće': 0,
      'CHE Fužine': 0,
      'RHE Lepenica': 0,
      'HE Vinodol': 0,
      'HE Gojak': 0,
      'HE Ozalj 1': 0,
      'HE Ozalj 2': 0,
      'HE Zeleni Vir': 0,
      'HE Rijeka': 0,
      'Ukupno': 0
    },
    {
      'HE Sklope': 0,
      'HE Senj': 0,
      'HE Lešće': 0,
      'CHE Fužine': 0,
      'RHE Lepenica': 0,
      'HE Vinodol': 0,
      'HE Gojak': 0,
      'HE Ozalj 1': 0,
      'HE Ozalj 2': 0,
      'HE Zeleni Vir': 0,
      'HE Rijeka': 0,
      'Ukupno': 0
    }
  ];

  constructor() {
    // RAZINA
    this.optionsBilanca = {
      data: this.bilanca,
      series: [
        {
          xKey: 'vrijeme',
          yKey: 'ostvarena',
          stroke: '#41a9c9',
          marker: {
            fill: '#41a9c9',
            stroke: '#41a9c9',
          },
        },
        {
          xKey: 'vrijeme',
          yKey: 'planirana',
          stroke: '#f3622d',
          marker: {
            fill: '#f3622d',
            stroke: '#f3622d',
          },
        },
      ],
      legend: {
        position: 'bottom',
      },
    };

    this.defaultColDef = {
      width: 150,
      resizable: true,
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

  ngOnInit(): void {}
}

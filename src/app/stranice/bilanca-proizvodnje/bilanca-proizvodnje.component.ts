import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RangeNavigatorComponent } from '@syncfusion/ej2-angular-charts';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-bilanca-proizvodnje',
  templateUrl: './bilanca-proizvodnje.component.html',
  styleUrls: ['./bilanca-proizvodnje.component.css'],
})
export class BilancaProizvodnjeComponent implements OnInit {
  @ViewChild('range')
  public RangeObj: RangeNavigatorComponent;

  optionsBilanca: any;
  private defaultColDef;
  private gridApi;
  private gridColumnApi;

  public modules: any[] = [ClientSideRowModelModule];

  bilanca = [
    {
      vrijeme: '2017-08-13T00:00:00Z',
      ostvarena: 60,
      planirana: 62,
    },
    {
      vrijeme: '2017-08-13T01:00:00Z',
      ostvarena: 65,
      planirana: 77,
    },
    {
      vrijeme: '2017-08-13T02:00:00Z',
      ostvarena: 50,
      planirana: 55,
    },
    {
      vrijeme: '2017-08-13T03:00:00Z',
      ostvarena: 15,
      planirana: 20,
    },
    {
      vrijeme: '2017-08-13T04:00:00Z',
      ostvarena: 27,
      planirana: 30,
    },
    {
      vrijeme: '2017-08-13T05:00:00Z',
      ostvarena: 30,
      planirana: 35,
    },
    {
      vrijeme: '2017-08-13T06:00:00Z',
      ostvarena: 35,
      planirana: 37,
    },
    {
      vrijeme: '2017-08-13T07:00:00Z',
      ostvarena: 40,
      planirana: 45,
    },
    {
      vrijeme: '2017-08-13T08:00:00Z',
      ostvarena: 37,
      planirana: 40,
    },
    {
      vrijeme: '2017-08-13T09:00:00Z',
      ostvarena: 39,
      planirana: 43,
    },
    {
      vrijeme: '2017-08-13T10:00:00Z',
      ostvarena: 41,
      planirana: 44,
    },
    {
      vrijeme: '2017-08-13T11:00:00Z',
      ostvarena: 43,
      planirana: 47,
    },
    {
      vrijeme: '2017-08-13T12:00:00Z',
      ostvarena: 45,
      planirana: 50,
    },
    {
      vrijeme: '2017-08-13T13:00:00Z',
      ostvarena: 47,
      planirana: 51,
    },
    {
      vrijeme: '2017-08-13T14:00:00Z',
      ostvarena: 44,
      planirana: 48,
    },
    {
      vrijeme: '2017-08-13T15:00:00Z',
      ostvarena: 42,
      planirana: 46,
    },
    {
      vrijeme: '2017-08-13T16:00:00Z',
      ostvarena: 40,
      planirana: 44,
    },
    {
      vrijeme: '2017-08-13T17:00:00Z',
      ostvarena: 39,
      planirana: 42,
    },
    {
      vrijeme: '2017-08-13T18:00:00Z',
      ostvarena: 37,
      planirana: 40,
    },
    {
      vrijeme: '2017-08-13T19:00:00Z',
      ostvarena: 30,
      planirana: 35,
    },
    {
      vrijeme: '2017-08-13T20:00:00Z',
      ostvarena: 28,
      planirana: 33,
    },
    {
      vrijeme: '2017-08-13T21:00:00Z',
      ostvarena: 25,
      planirana: 30,
    },
    {
      vrijeme: '2017-08-13T22:00:00Z',
      ostvarena: 22,
      planirana: 26,
    },
    {
      vrijeme: '2017-08-13T23:00:00Z',
      ostvarena: 20,
      planirana: 23,
    },
    {
      vrijeme: '2017-08-14T00:00:00Z',
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
    // BILANCA
    this.optionsBilancaInit(this.bilanca);
  }

  public periodsValue: Object[];
  public chartData: Object[];
  public value: Object[];

  ngOnInit(): void {
    this.chartData = this.bilanca;
    this.value = [
      new Date('2017-08-13T00:00:00Z'),
      new Date('2017-08-14T00:00:00Z'),
    ];
  }

  optionsBilancaInit(d): void{
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
          axes: [
            {
              type: 'category',
              nice: false,
              position: 'bottom',
              label: {
                formatter: function (params) {
                  return params.value === undefined ? '' : params.value.slice(11, 16);
                },
                fontSize: 12
              },
            },
            {
              type: 'number',
              position: 'left',
              label: {
                formatter: function (params) {
                  return params.value === undefined ? '' : params.value.toFixed(0);
                },
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

  selectMonth(e): void {
  }

  rangeUpdate(e): void {
    const startValue = new Date(Math.round(this.RangeObj.startValue)).toISOString();
    const endValue = new Date(Math.round(this.RangeObj.endValue)).toISOString();

    // tslint:disable-next-line: typedef
    const res = this.bilanca.filter(function(o) {
      return o.vrijeme <= endValue && o.vrijeme >= startValue;
    });

    this.optionsBilancaInit(res);
  }
}

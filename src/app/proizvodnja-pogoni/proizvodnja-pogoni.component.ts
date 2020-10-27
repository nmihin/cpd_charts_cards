import { Component, OnInit, ViewChild } from '@angular/core';
import { RangeNavigatorComponent } from '@syncfusion/ej2-angular-charts';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@Component({
  selector: 'app-proizvodnja-pogoni',
  templateUrl: './proizvodnja-pogoni.component.html',
  styleUrls: ['./proizvodnja-pogoni.component.css'],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'hr-HR' },
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS]
    },
    {provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS},
  ]
})
export class ProizvodnjaPogoniComponent implements OnInit {
  @ViewChild('range')
  public RangeObj: RangeNavigatorComponent;

  optionsRadnaSnaga: any;

  radnaSnaga = [
    {
      vrijeme: '2017-08-13T00:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T01:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T02:00:00Z',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T03:00:00Z',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
      {
      vrijeme: '2017-08-13T04:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T05:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T06:00:00Z',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T07:00:00Z',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
      {
      vrijeme: '2017-08-13T08:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T09:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T10:00:00Z',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T11:00:00Z',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
      {
      vrijeme: '2017-08-13T12:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T13:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T14:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T15:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
      {
      vrijeme: '2017-08-13T16:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T17:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 3,
    },
    {
      vrijeme: '2017-08-13T18:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 3,
    },
    {
      vrijeme: '2017-08-13T19:00:00Z',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 3,
    },
      {
      vrijeme: '2017-08-13T20:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2.5,
    },
    {
      vrijeme: '2017-08-13T21:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2.5,
    },
    {
      vrijeme: '2017-08-13T22:00:00Z',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '2017-08-13T23:00:00Z',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
      {
      vrijeme: '2017-08-14T00:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    }
  ];

  constructor() {
    // RAZINA
    this.optionsRadnaSnagaInit(this.radnaSnaga);
  }

  public periodsValue: Object[];
  public chartData: Object[];
  public value: Object[];

  ngOnInit(): void {
    this.chartData = this.radnaSnaga;
    this.value = [
      new Date('2017-08-13T00:00:00Z'),
      new Date('2017-08-14T00:00:00Z'),
    ];
  }

  selectMonth(e): void {

  }

  rangeUpdate(e): void {
    const startValue = new Date(Math.round(this.RangeObj.startValue)).toISOString();
    const endValue = new Date(Math.round(this.RangeObj.endValue)).toISOString();

    // tslint:disable-next-line: typedef
    const res = this.radnaSnaga.filter(function(o) {
      return o.vrijeme <= endValue && o.vrijeme >= startValue;
    });

    this.optionsRadnaSnagaInit(res);
  }


  optionsRadnaSnagaInit(d): void{
    this.optionsRadnaSnaga = {
      data: d,
      series: [
        {
          xKey: 'vrijeme',
          yKey: 'HE Rijeka Agregat 1',
          stroke: '#41a9c9',
          marker: {
            fill: '#41a9c9',
            stroke: '#41a9c9'
          }
        },
        {
          xKey: 'vrijeme',
          yKey: 'HE Rijeka Agregat 2',
          stroke: '#f3622d',
          marker: {
            fill: '#f3622d',
            stroke: '#f3622d'
          }
        }
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
              return params.value === undefined ? '' : params.value.toFixed(1);
            },
          },
        },
      ],
      legend: {
        position: 'bottom'
      }
    };
  }

}

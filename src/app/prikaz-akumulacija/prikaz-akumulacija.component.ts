import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { RangeNavigatorComponent } from '@syncfusion/ej2-angular-charts';

@Component({
  selector: 'app-prikaz-akumulacija',
  templateUrl: './prikaz-akumulacija.component.html',
  styleUrls: ['./prikaz-akumulacija.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class PrikazAkumulacijaComponent implements OnInit {
  @ViewChild('range')
  public RangeObj: RangeNavigatorComponent;

  optionsAkumulacije: any;
  optionsBuskoBlato: any;
  optionsStikada: any;
  optionsPeruca: any;
  optionsRazina: any;

  akumulacije = [
    {
      lokacija: 'Akumulacija Buško Blato',
      puno: 34.28,
      prazno: 65.72,
    },
    {
      lokacija: 'Akumulacija Peruća',
      puno: 67.03,
      prazno: 32.97,
    },
    {
      lokacija: 'Akumulacija Štikada',
      puno: 69.08,
      prazno: 30.92,
    },
    {
      lokacija: 'Bazen Razovac',
      puno: 78.25,
      prazno: 21.75,
    },
    {
      lokacija: 'Komp bazen Đale',
      puno: 40.39,
      prazno: 59.61,
    },
    {
      lokacija: 'Komp bazen Lipa',
      puno: 53.39,
      prazno: 46.61,
    },
    {
      lokacija: 'Komp bazen Nejašmić',
      puno: 100,
      prazno: 0,
    },
    {
      lokacija: 'Komp bazen Prančevići',
      puno: 31.28,
      prazno: 68.72,
    },
  ];
  buskoBlato = [
    {
      lokacija: 'Peruća',
      puno: 146893,
      prazno: 275125,
    },
  ];
  stikada = [
    {
      lokacija: 'Štikada',
      puno: 4743,
      prazno: 10617,
    },
  ];
  peruca = [
    {
      lokacija: 'Peruća',
      puno: 146893,
      prazno: 275125,
    },
  ];
  razina = [
    { razina: 351.61, vrijeme: '2017-08-13T00:00:00Z' },
    { razina: 351.6, vrijeme: '2017-08-13T00:30:00Z' },
    { razina: 351.57, vrijeme: '2017-08-13T01:00:00Z' },
    { razina: 351.5, vrijeme: '2017-08-13T01:30:00Z' },
    { razina: 351.12, vrijeme: '2017-08-13T02:00:00Z' },
    { razina: 351.11, vrijeme: '2017-08-13T02:30:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T03:00:00Z' },
    { razina: 351.11, vrijeme: '2017-08-13T03:30:00Z' },
    { razina: 351.12, vrijeme: '2017-08-13T04:00:00Z' },
    { razina: 351.13, vrijeme: '2017-08-13T04:30:00Z' },
    { razina: 351.14, vrijeme: '2017-08-13T05:00:00Z' },
    { razina: 351.15, vrijeme: '2017-08-13T05:30:00Z' },
    { razina: 351.17, vrijeme: '2017-08-13T06:00:00Z' },
    { razina: 351.16, vrijeme: '2017-08-13T06:30:00Z' },
    { razina: 351.17, vrijeme: '2017-08-13T07:00:00Z' },
    { razina: 351.14, vrijeme: '2017-08-13T07:30:00Z' },
    { razina: 351.13, vrijeme: '2017-08-13T08:00:00Z' },
    { razina: 351.12, vrijeme: '2017-08-13T08:30:00Z' },
    { razina: 351.11, vrijeme: '2017-08-13T09:00:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T09:30:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T10:00:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T10:30:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T11:00:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T11:30:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T12:00:00Z' },
    { razina: 351.21, vrijeme: '2017-08-13T12:30:00Z' },
    { razina: 351.3, vrijeme: '2017-08-13T13:00:00Z' },
    { razina: 351.17, vrijeme: '2017-08-13T13:30:00Z' },
    { razina: 351.2, vrijeme: '2017-08-13T14:00:00Z' },
    { razina: 351.12, vrijeme: '2017-08-13T14:30:00Z' },
    { razina: 351.11, vrijeme: '2017-08-13T15:00:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T15:30:00Z' },
    { razina: 351.11, vrijeme: '2017-08-13T16:00:00Z' },
    { razina: 351.12, vrijeme: '2017-08-13T16:30:00Z' },
    { razina: 351.13, vrijeme: '2017-08-13T17:00:00Z' },
    { razina: 351.14, vrijeme: '2017-08-13T17:30:00Z' },
    { razina: 351.15, vrijeme: '2017-08-13T18:00:00Z' },
    { razina: 351.17, vrijeme: '2017-08-13T18:30:00Z' },
    { razina: 351.16, vrijeme: '2017-08-13T19:00:00Z' },
    { razina: 351.17, vrijeme: '2017-08-13T19:30:00Z' },
    { razina: 351.14, vrijeme: '2017-08-13T20:00:00Z' },
    { razina: 351.13, vrijeme: '2017-08-13T20:30:00Z' },
    { razina: 351.12, vrijeme: '2017-08-13T21:00:00Z' },
    { razina: 351.11, vrijeme: '2017-08-13T21:30:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T22:00:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T22:30:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T23:00:00Z' },
    { razina: 351.1, vrijeme: '2017-08-13T23:30:00Z' },
    { razina: 351.1, vrijeme: '2017-08-14T00:00:00Z' },
  ];

  optionsRazinaInit(d): void{
    this.optionsRazina = {
      data: d,
      series: [
        {
          type: 'line',
          xKey: 'vrijeme',
          yKey: 'razina',
          stroke: '#f3622d',
          label: {
            // tslint:disable-next-line: typedef
            formatter(params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: '#f3622d',
          strokes: '#f3622d',
        },
      ],
      legend: {
        enabled: false,
      },
    };
  }

  constructor() {
    // AKUMULACIJE
    this.optionsAkumulacije = {
      data: this.akumulacije,
      series: [
        {
          type: 'column',
          xKey: 'lokacija',
          yKeys: ['puno', 'prazno'],
          label: {
            // tslint:disable-next-line: typedef
            formatter(params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: ['#41a9c9', '#f3622d'],
          strokes: ['#41a9c9', '#f3622d'],
        },
      ],
      legend: {
        position: 'bottom',
        markerShape: 'circle',
      },
    };
    // BUŠKO BLATO
    this.optionsBuskoBlato = {
      data: this.buskoBlato,
      series: [
        {
          type: 'column',
          xKey: 'lokacija',
          yKeys: ['puno', 'prazno'],
          label: {
            // tslint:disable-next-line: typedef
            formatter(params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: ['#41a9c9', '#f3622d'],
          strokes: ['#41a9c9', '#f3622d'],
        },
      ],
      legend: {
        position: 'bottom',
        markerShape: 'circle',
      },
    };
    // ŠTIKADA
    this.optionsStikada = {
      data: this.stikada,
      series: [
        {
          type: 'column',
          xKey: 'lokacija',
          yKeys: ['puno', 'prazno'],
          label: {
            // tslint:disable-next-line: typedef
            formatter(params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: ['#41a9c9', '#f3622d'],
          strokes: ['#41a9c9', '#f3622d'],
        },
      ],
      legend: {
        position: 'bottom',
        markerShape: 'circle',
      },
    };
    // PERUĆA
    this.optionsPeruca = {
      data: this.peruca,
      series: [
        {
          type: 'column',
          xKey: 'lokacija',
          yKeys: ['puno', 'prazno'],
          label: {
            // tslint:disable-next-line: typedef
            formatter(params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: ['#41a9c9', '#f3622d'],
          strokes: ['#41a9c9', '#f3622d'],
        },
      ],
      legend: {
        position: 'bottom',
        markerShape: 'circle',
      },
    };
    // RAZINA
    this.optionsRazinaInit(this.razina);
  }

  public periodsValue: Object[];
  public chartData: Object[];
  public value: Object[];

  ngOnInit(): void {
    this.chartData = this.razina;
    this.value = [
      new Date('2017-08-13T00:00:00Z'),
      new Date('2017-08-14T00:00:00Z'),
    ];
  }

  selectMonth(e): void {

  }

  rangeUpdate(): void {
    const startValue = new Date(Math.round(this.RangeObj.startValue)).toISOString();
    const endValue = new Date(Math.round(this.RangeObj.endValue)).toISOString();

    // tslint:disable-next-line: typedef
    const res = this.razina.filter(function(o) {
      return o.vrijeme <= endValue && o.vrijeme >= startValue;
    });

    this.optionsRazinaInit(res);
  }
}

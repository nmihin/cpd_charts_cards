import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meteoroloske-postaje',
  templateUrl: './meteoroloske-postaje.component.html',
  styleUrls: ['./meteoroloske-postaje.component.css']
})
export class MeteoroloskePostajeComponent implements OnInit {

  optionsTemperatura: any;
  optionsRelativnaVlaznost: any;
  optionsIntenzitetPadalina: any;
  optionsKolicinaPadalina: any;
  optionsTlakZraka: any;
  optionsBrzinaVjetraSmjer: any;

  temperatura = [
    { temperatura: 16, vrijeme: "2017-08-13T00:00:00Z" },
    { temperatura: 17, vrijeme: "2017-08-14T00:00:00Z" },
    { temperatura: 18, vrijeme: "2017-08-15T00:00:00Z" },
    { temperatura: 19, vrijeme: "2017-08-16T00:00:00Z" },
    { temperatura: 20, vrijeme: "2017-08-17T00:00:00Z" },
    { temperatura: 21, vrijeme: "2017-08-18T00:00:00Z" },
    { temperatura: 22, vrijeme: "2017-08-19T00:00:00Z" },
    { temperatura: 23, vrijeme: "2017-08-20T00:00:00Z" },
    { temperatura: 22, vrijeme: "2017-08-21T00:00:00Z" },
    { temperatura: 21, vrijeme: "2017-08-22T00:00:00Z" },
    { temperatura: 20, vrijeme: "2017-08-23T00:00:00Z." },
    { temperatura: 19, vrijeme: "2017-08-24T00:00:00Z" },
    { temperatura: 22, vrijeme: "2017-08-25T00:00:00Z" },
    { temperatura: 20, vrijeme: "2017-08-26T00:00:00Z" },
    { temperatura: 18, vrijeme: "2017-08-27T00:00:00Z" },
    { temperatura: 21, vrijeme: "2017-08-28T00:00:00Z" },
    { temperatura: 25, vrijeme: "2017-08-29T00:00:00Z" },
    { temperatura: 25, vrijeme: "2017-08-30T00:00:00Z" },
    { temperatura: 27, vrijeme: "2017-08-31T00:00:00Z" },
    { temperatura: 29, vrijeme: "2017-09-01T00:00:00Z" }
  ];

  intenzitetPadalina = [
    { intenzitet: 10, vrijeme: "2017-08-13T00:00:00Z" },
    { intenzitet: 1, vrijeme: "2017-08-14T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-08-15T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-08-16T00:00:00Z" },
    { intenzitet: 6, vrijeme: "2017-08-17T00:00:00Z" },
    { intenzitet: 2, vrijeme: "2017-08-18T00:00:00Z" },
    { intenzitet: 1, vrijeme: "2017-08-19T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-08-20T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-08-21T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-08-22T00:00:00Z" },
    { intenzitet: 6, vrijeme: "2017-08-23T00:00:00Z" },
    { intenzitet: 7, vrijeme: "2017-08-24T00:00:00Z" },
    { intenzitet: 10, vrijeme: "2017-08-25T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-08-26T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-08-27T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-08-28T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-08-29T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-08-30T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-08-31T00:00:00Z" },
    { intenzitet: 0, vrijeme: "2017-09-01T00:00:00Z" }
  ];

  relativnaVlaznost = [
    { postotak: 40, vrijeme: "2017-08-13T00:00:00Z" },
    { postotak: 45, vrijeme: "2017-08-14T00:00:00Z" },
    { postotak: 50, vrijeme: "2017-08-15T00:00:00Z" },
    { postotak: 55, vrijeme: "2017-08-16T00:00:00Z" },
    { postotak: 60, vrijeme: "2017-08-17T00:00:00Z" },
    { postotak: 65, vrijeme: "2017-08-18T00:00:00Z" },
    { postotak: 50, vrijeme: "2017-08-19T00:00:00Z" },
    { postotak: 48, vrijeme: "2017-08-20T00:00:00Z" },
    { postotak: 47, vrijeme: "2017-08-21T00:00:00Z" },
    { postotak: 45, vrijeme: "2017-08-22T00:00:00Z" },
    { postotak: 40, vrijeme: "2017-08-23T00:00:00Z" },
    { postotak: 40, vrijeme: "2017-08-24T00:00:00Z" },
    { postotak: 45, vrijeme: "2017-08-25T00:00:00Z" },
    { postotak: 47, vrijeme: "2017-08-26T00:00:00Z" },
    { postotak: 49, vrijeme: "2017-08-27T00:00:00Z" },
    { postotak: 53, vrijeme: "2017-08-28T00:00:00Z" },
    { postotak: 70, vrijeme: "2017-08-29T00:00:00Z" },
    { postotak: 75, vrijeme: "2017-08-30T00:00:00Z" },
    { postotak: 70, vrijeme: "2017-08-31T00:00:00Z" },
    { postotak: 65, vrijeme: "2017-09-01T00:00:00Z" }
  ];

  tlakZraka = [
    { tlak: 990.2, vrijeme: "2017-08-13T00:00:00Z" },
    { tlak: 990.3, vrijeme: "2017-08-14T00:00:00Z" },
    { tlak: 990.4, vrijeme: "2017-08-15T00:00:00Z" },
    { tlak: 990.5, vrijeme: "2017-08-16T00:00:00Z" },
    { tlak: 990.7, vrijeme: "2017-08-17T00:00:00Z" },
    { tlak: 991.0, vrijeme: "2017-08-18T00:00:00Z" },
    { tlak: 990.7, vrijeme: "2017-08-19T00:00:00Z" },
    { tlak: 990.5, vrijeme: "2017-08-20T00:00:00Z" },
    { tlak: 990.2, vrijeme: "2017-08-21T00:00:00Z" },
    { tlak: 990.6, vrijeme: "2017-08-22T00:00:00Z" },
    { tlak: 990.8, vrijeme: "2017-08-23T00:00:00Z" },
    { tlak: 991.2, vrijeme: "2017-08-24T00:00:00Z" },
    { tlak: 991.5, vrijeme: "2017-08-25T00:00:00Z" },
    { tlak: 991.7, vrijeme: "2017-08-26T00:00:00Z" },
    { tlak: 991.6, vrijeme: "2017-08-27T00:00:00Z" },
    { tlak: 991.5, vrijeme: "2017-08-28T00:00:00Z" },
    { tlak: 991.2, vrijeme: "2017-08-29T00:00:00Z" },
    { tlak: 990.8, vrijeme: "2017-08-30T00:00:00Z" },
    { tlak: 990.6, vrijeme: "2017-08-31T00:00:00Z" },
    { tlak: 990.4, vrijeme: "2017-09-01T00:00:00Z" }
  ];

  brzinaVjetraSmjer = [
    { brzina: 0.0, vrijeme: "2017-08-13T00:00:00Z" },
    { brzina: 0.2, vrijeme: "2017-08-14T00:00:00Z" },
    { brzina: 0.4, vrijeme: "2017-08-15T00:00:00Z" },
    { brzina: 0.6, vrijeme: "2017-08-16T00:00:00Z" },
    { brzina: 0.8, vrijeme: "2017-08-17T00:00:00Z" },
    { brzina: 1.0, vrijeme: "2017-08-18T00:00:00Z" },
    { brzina: 1.2, vrijeme: "2017-08-19T00:00:00Z" },
    { brzina: 1.4, vrijeme: "2017-08-20T00:00:00Z" },
    { brzina: 1.4, vrijeme: "2017-08-21T00:00:00Z" },
    { brzina: 1.0, vrijeme: "2017-08-22T00:00:00Z" },
    { brzina: 3.0, vrijeme: "2017-08-23T00:00:00Z" },
    { brzina: 2.8, vrijeme: "2017-08-24T00:00:00Z" },
    { brzina: 1.0, vrijeme: "2017-08-25T00:00:00Z" },
    { brzina: 2.0, vrijeme: "2017-08-26T00:00:00Z" },
    { brzina: 1.0, vrijeme: "2017-08-27T00:00:00Z" },
    { brzina: 1.0, vrijeme: "2017-08-28T00:00:00Z" },
    { brzina: 0.6, vrijeme: "2017-08-29T00:00:00Z" },
    { brzina: 0.4, vrijeme: "2017-08-30T00:00:00Z" },
    { brzina: 0.2, vrijeme: "2017-08-31T00:00:00Z" },
    { brzina: 0.1, vrijeme: "2017-09-01T00:00:00Z" }
  ];

  kolicinaPadalina = [
    { kolicina: 0.0, vrijeme: "2017-08-13T00:00:00Z" },
    { kolicina: 0.2, vrijeme: "2017-08-14T00:00:00Z" },
    { kolicina: 0.4, vrijeme: "2017-08-15T00:00:00Z" },
    { kolicina: 0.6, vrijeme: "2017-08-16T00:00:00Z" },
    { kolicina: 0.8, vrijeme: "2017-08-17T00:00:00Z" },
    { kolicina: 1.0, vrijeme: "2017-08-18T00:00:00Z" },
    { kolicina: 1.2, vrijeme: "2017-08-19T00:00:00Z" },
    { kolicina: 1.4, vrijeme: "2017-08-20T00:00:00Z" },
    { kolicina: 1.4, vrijeme: "2017-08-21T00:00:00Z" },
    { kolicina: 1.0, vrijeme: "2017-08-22T00:00:00Z" },
    { kolicina: 3.0, vrijeme: "2017-08-23T00:00:00Z" },
    { kolicina: 2.8, vrijeme: "2017-08-24T00:00:00Z" },
    { kolicina: 1.0, vrijeme: "2017-08-25T00:00:00Z" },
    { kolicina: 2.0, vrijeme: "2017-08-26T00:00:00Z" },
    { kolicina: 1.0, vrijeme: "2017-08-27T00:00:00Z" },
    { kolicina: 1.0, vrijeme: "2017-08-28T00:00:00Z" },
    { kolicina: 0.6, vrijeme: "2017-08-29T00:00:00Z" },
    { kolicina: 0.4, vrijeme: "2017-08-30T00:00:00Z" },
    { kolicina: 0.2, vrijeme: "2017-08-31T00:00:00Z" },
    { kolicina: 0.1, vrijeme: "2017-09-01T00:00:00Z" }
  ];

  constructor() {
    // TEMPERATURA
    this.optionsTemperatura = {
      data: this.temperatura,
      series: [
        {
          type: 'line',
          xKey: 'vrijeme',
          yKey: 'temperatura',
          stroke: '#41a9c9',
          marker: {
            fill: '#41a9c9',
            stroke: '#41a9c9'
          },
          label: {
            // tslint:disable-next-line: typedef
            formatter (params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: '#41a9c9',
          strokes: '#41a9c9',
        }
      ],
      axes: [
        {
          type: 'category',
          nice: false,
          position: 'bottom',
          label: {
            formatter: function (params) {
              return params.value === undefined ? '' : params.value.slice(8, 10) + '.' + params.value.slice(6, 7) + '.' ;
            },
            fontSize: 10
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
        enabled: false
      }
    };
    // KOLIČINA PADALINA
    this.optionsKolicinaPadalina = {
      data: this.kolicinaPadalina,
      series: [
        {
          type: 'column',
          xKey: 'vrijeme',
          yKeys: ['kolicina'],
        },
      ],
      axes: [
        {
          type: 'category',
          nice: false,
          position: 'bottom',
          label: {
            formatter: function (params) {
              return params.value === undefined ? '' : params.value.slice(8, 10) + '.' + params.value.slice(6, 7) + '.' ;
            },
            fontSize: 10
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
        enabled: false
      }
    };
    // INTENZITET PADALINA
    this.optionsIntenzitetPadalina = {
      data: this.intenzitetPadalina,
      series: [
        {
          type: 'column',
          xKey: 'vrijeme',
          yKeys: ['intenzitet'],
        },
      ],
      axes: [
        {
          type: 'category',
          nice: false,
          position: 'bottom',
          label: {
            formatter: function (params) {
              return params.value === undefined ? '' : params.value.slice(8, 10) + '.' + params.value.slice(6, 7) + '.' ;
            },
            fontSize: 10
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
        enabled: false
      }
    };
    // RELATIVNA VLAŽNOST
    this.optionsRelativnaVlaznost = {
      data: this.relativnaVlaznost,
      series: [
        {
          type: 'line',
          xKey: 'vrijeme',
          yKey: 'postotak',
          stroke: '#41a9c9',
          marker: {
            fill: '#41a9c9',
            stroke: '#41a9c9'
          },
          label: {
            // tslint:disable-next-line: typedef
            formatter (params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: '#41a9c9',
          strokes: '#41a9c9',
        }
      ],
      axes: [
        {
          type: 'category',
          nice: false,
          position: 'bottom',
          label: {
            formatter: function (params) {
              return params.value === undefined ? '' : params.value.slice(8, 10) + '.' + params.value.slice(6, 7) + '.' ;
            },
            fontSize: 10
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
        enabled: false
      }
    };
    // TLAK ZRAKA
    this.optionsTlakZraka = {
      data: this.tlakZraka,
      series: [
        {
          type: 'line',
          xKey: 'vrijeme',
          yKey: 'tlak',
          stroke: '#41a9c9',
          marker: {
            fill: '#41a9c9',
            stroke: '#41a9c9'
          },
          label: {
            // tslint:disable-next-line: typedef
            formatter (params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: '#41a9c9',
          strokes: '#41a9c9',
        }
      ],
      axes: [
        {
          type: 'category',
          nice: false,
          position: 'bottom',
          label: {
            formatter: function (params) {
              return params.value === undefined ? '' : params.value.slice(8, 10) + '.' + params.value.slice(6, 7) + '.' ;
            },
            fontSize: 10
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
        enabled: false
      }
    };
    // BRZINA VJETRA I SMJER
    this.optionsBrzinaVjetraSmjer = {
      data: this.brzinaVjetraSmjer,
      series: [
        {
          type: 'line',
          xKey: 'vrijeme',
          yKey: 'brzina',
          stroke: '#41a9c9',
          marker: {
            fill: '#41a9c9',
            stroke: '#41a9c9'
          },
          label: {
            // tslint:disable-next-line: typedef
            formatter (params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: '#41a9c9',
          strokes: '#41a9c9',
        }
      ],
      axes: [
        {
          type: 'category',
          nice: false,
          position: 'bottom',
          label: {
            formatter: function (params) {
              return params.value === undefined ? '' : params.value.slice(8, 10) + '.' + params.value.slice(6, 7) + '.' ;
            },
            fontSize: 10
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
        enabled: false
      }
    };
  }

  ngOnInit(): void {
  }

}

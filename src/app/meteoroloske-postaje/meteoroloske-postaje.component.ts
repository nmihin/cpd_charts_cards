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
    { temperatura: 16, vrijeme: "11.06." },
    { temperatura: 17, vrijeme: "12.06." },
    { temperatura: 18, vrijeme: "13.06." },
    { temperatura: 19, vrijeme: "14.06." },
    { temperatura: 20, vrijeme: "15.06." },
    { temperatura: 21, vrijeme: "16.06." },
    { temperatura: 22, vrijeme: "17.06." },
    { temperatura: 23, vrijeme: "18.06." },
    { temperatura: 22, vrijeme: "19.06." },
    { temperatura: 21, vrijeme: "20.06." },
    { temperatura: 20, vrijeme: "21.06." },
    { temperatura: 19, vrijeme: "22.06." },
    { temperatura: 22, vrijeme: "23.06." },
    { temperatura: 20, vrijeme: "24.06." },
    { temperatura: 18, vrijeme: "25.06." },
    { temperatura: 21, vrijeme: "26.06." },
    { temperatura: 25, vrijeme: "27.06." },
    { temperatura: 25, vrijeme: "28.06." },
    { temperatura: 27, vrijeme: "29.06." },
    { temperatura: 29, vrijeme: "30.06." }
  ];

  intenzitetPadalina = [
    { intenzitet: 10, vrijeme: "11.06." },
    { intenzitet: 1, vrijeme: "12.06." },
    { intenzitet: 0, vrijeme: "13.06." },
    { intenzitet: 0, vrijeme: "14.06." },
    { intenzitet: 6, vrijeme: "15.06." },
    { intenzitet: 2, vrijeme: "16.06." },
    { intenzitet: 1, vrijeme: "17.06." },
    { intenzitet: 0, vrijeme: "18.06." },
    { intenzitet: 0, vrijeme: "19.06." },
    { intenzitet: 0, vrijeme: "20.06." },
    { intenzitet: 6, vrijeme: "21.06." },
    { intenzitet: 7, vrijeme: "22.06." },
    { intenzitet: 10, vrijeme: "23.06." },
    { intenzitet: 0, vrijeme: "24.06." },
    { intenzitet: 0, vrijeme: "25.06." },
    { intenzitet: 0, vrijeme: "26.06." },
    { intenzitet: 0, vrijeme: "27.06." },
    { intenzitet: 0, vrijeme: "28.06." },
    { intenzitet: 0, vrijeme: "29.06." },
    { intenzitet: 0, vrijeme: "30.06." }
  ];

  relativnaVlaznost = [
    { postotak: 40, vrijeme: "11.06." },
    { postotak: 45, vrijeme: "12.06." },
    { postotak: 50, vrijeme: "13.06." },
    { postotak: 55, vrijeme: "14.06." },
    { postotak: 60, vrijeme: "15.06." },
    { postotak: 65, vrijeme: "16.06." },
    { postotak: 50, vrijeme: "17.06." },
    { postotak: 48, vrijeme: "18.06." },
    { postotak: 47, vrijeme: "19.06." },
    { postotak: 45, vrijeme: "20.06." },
    { postotak: 40, vrijeme: "21.06." },
    { postotak: 40, vrijeme: "22.06." },
    { postotak: 45, vrijeme: "23.06." },
    { postotak: 47, vrijeme: "24.06." },
    { postotak: 49, vrijeme: "25.06." },
    { postotak: 53, vrijeme: "26.06." },
    { postotak: 70, vrijeme: "27.06." },
    { postotak: 75, vrijeme: "28.06." },
    { postotak: 70, vrijeme: "29.06." },
    { postotak: 65, vrijeme: "30.06." }
  ];

  tlakZraka = [
    { tlak: 990.2, vrijeme: "11.06." },
    { tlak: 990.3, vrijeme: "12.06." },
    { tlak: 990.4, vrijeme: "13.06." },
    { tlak: 990.5, vrijeme: "14.06." },
    { tlak: 990.7, vrijeme: "15.06." },
    { tlak: 991.0, vrijeme: "16.06." },
    { tlak: 990.7, vrijeme: "17.06." },
    { tlak: 990.5, vrijeme: "18.06." },
    { tlak: 990.2, vrijeme: "19.06." },
    { tlak: 990.6, vrijeme: "20.06." },
    { tlak: 990.8, vrijeme: "21.06." },
    { tlak: 991.2, vrijeme: "22.06." },
    { tlak: 991.5, vrijeme: "23.06." },
    { tlak: 991.7, vrijeme: "24.06." },
    { tlak: 991.6, vrijeme: "25.06." },
    { tlak: 991.5, vrijeme: "26.06." },
    { tlak: 991.2, vrijeme: "27.06." },
    { tlak: 990.8, vrijeme: "28.06." },
    { tlak: 990.6, vrijeme: "29.06." },
    { tlak: 990.4, vrijeme: "30.06." }
  ];

  brzinaVjetraSmjer = [
    { brzina: 0.0, vrijeme: "11.06." },
    { brzina: 0.2, vrijeme: "12.06." },
    { brzina: 0.4, vrijeme: "13.06." },
    { brzina: 0.6, vrijeme: "14.06." },
    { brzina: 0.8, vrijeme: "15.06." },
    { brzina: 1.0, vrijeme: "16.06." },
    { brzina: 1.2, vrijeme: "17.06." },
    { brzina: 1.4, vrijeme: "18.06." },
    { brzina: 1.4, vrijeme: "19.06." },
    { brzina: 1.0, vrijeme: "20.06." },
    { brzina: 3.0, vrijeme: "21.06." },
    { brzina: 2.8, vrijeme: "22.06." },
    { brzina: 1.0, vrijeme: "23.06." },
    { brzina: 2.0, vrijeme: "24.06." },
    { brzina: 1.0, vrijeme: "25.06." },
    { brzina: 1.0, vrijeme: "26.06." },
    { brzina: 0.6, vrijeme: "27.06." },
    { brzina: 0.4, vrijeme: "28.06." },
    { brzina: 0.2, vrijeme: "29.06." },
    { brzina: 0.1, vrijeme: "30.06." }
  ];

  kolicinaPadalina = [
    { kolicina: 0.0, vrijeme: "11.06." },
    { kolicina: 0.2, vrijeme: "12.06." },
    { kolicina: 0.4, vrijeme: "13.06." },
    { kolicina: 0.6, vrijeme: "14.06." },
    { kolicina: 0.8, vrijeme: "15.06." },
    { kolicina: 1.0, vrijeme: "16.06." },
    { kolicina: 1.2, vrijeme: "17.06." },
    { kolicina: 1.4, vrijeme: "18.06." },
    { kolicina: 1.4, vrijeme: "19.06." },
    { kolicina: 1.0, vrijeme: "20.06." },
    { kolicina: 3.0, vrijeme: "21.06." },
    { kolicina: 2.8, vrijeme: "22.06." },
    { kolicina: 1.0, vrijeme: "23.06." },
    { kolicina: 2.0, vrijeme: "24.06." },
    { kolicina: 1.0, vrijeme: "25.06." },
    { kolicina: 1.0, vrijeme: "26.06." },
    { kolicina: 0.6, vrijeme: "27.06." },
    { kolicina: 0.4, vrijeme: "28.06." },
    { kolicina: 0.2, vrijeme: "29.06." },
    { kolicina: 0.1, vrijeme: "30.06." }
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
          yKey: 'kolicina',
          label: {
            // tslint:disable-next-line: typedef
            formatter (params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: ['#41a9c9', '#f3622d'],
          strokes: ['#41a9c9', '#f3622d']
        }
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
          yKey: 'intenzitet',
          label: {
            // tslint:disable-next-line: typedef
            formatter (params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: ['#41a9c9', '#f3622d'],
          strokes: ['#41a9c9', '#f3622d']
        }
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
      legend: {
        enabled: false
      }
    };
  }

  ngOnInit(): void {
  }

}

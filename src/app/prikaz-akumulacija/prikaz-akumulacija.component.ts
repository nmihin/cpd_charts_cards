import { Component, OnInit } from '@angular/core';
import {DateAdapter, MAT_DATE_FORMATS, MatDateFormats} from '@angular/material/core';

@Component({
  selector: 'app-prikaz-akumulacija',
  templateUrl: './prikaz-akumulacija.component.html',
  styleUrls: ['./prikaz-akumulacija.component.css']
})
export class PrikazAkumulacijaComponent implements OnInit {
  optionsAkumulacije: any;
  optionsBuskoBlato: any;
  optionsStikada: any;
  optionsPeruca: any;
  optionsRazina: any;

  akumulacije = [
    {
      lokacija: 'Akumulacija Buško Blato',
      puno: 34.28,
      prazno: 65.72
    },
    {
      lokacija: 'Akumulacija Peruća',
      puno: 67.03,
      prazno: 32.97
    },
    {
      lokacija: 'Akumulacija Štikada',
      puno: 69.08,
      prazno: 30.92
    },
    {
      lokacija: 'Bazen Razovac',
      puno: 78.25,
      prazno: 21.75
    },
    {
      lokacija: 'Komp bazen Đale',
      puno: 40.39,
      prazno: 59.61
    },
    {
      lokacija: 'Komp bazen Lipa',
      puno: 53.39,
      prazno: 46.61
    },
    {
      lokacija: 'Komp bazen Nejašmić',
      puno: 100,
      prazno: 0
    },
    {
      lokacija: 'Komp bazen Prančevići',
      puno: 31.28,
      prazno: 68.72
    }
  ];
  buskoBlato = [
    {
      lokacija: 'Peruća',
      puno: 146893,
      prazno: 275125
    }
  ];
  stikada = [
    {
      lokacija: 'Štikada',
      puno: 4743,
      prazno: 10617
    }
  ];
  peruca = [
    {
      lokacija: 'Peruća',
      puno: 146893,
      prazno: 275125
    }
  ];
  razina = [
    { razina: 351.61, vrijeme: "00:00" },
    { razina: 351.60, vrijeme: "00:30" },
    { razina: 351.57, vrijeme: "01:00" },
    { razina: 351.50, vrijeme: "01:30" },
    { razina: 351.12, vrijeme: "02:00" },
    { razina: 351.11, vrijeme: "02:30" },
    { razina: 351.10, vrijeme: "03:00" },
    { razina: 351.11, vrijeme: "03:30" },
    { razina: 351.12, vrijeme: "04:00" },
    { razina: 351.13, vrijeme: "04:30" },
    { razina: 351.14, vrijeme: "05:00" },
    { razina: 351.15, vrijeme: "05:30" },
    { razina: 351.17, vrijeme: "06:00" },
    { razina: 351.16, vrijeme: "06:30" },
    { razina: 351.17, vrijeme: "07:00" },
    { razina: 351.14, vrijeme: "07:30" },
    { razina: 351.13, vrijeme: "08:00" },
    { razina: 351.12, vrijeme: "08:30" },
    { razina: 351.11, vrijeme: "09:00" },
    { razina: 351.10, vrijeme: "09:30" },
    { razina: 351.10, vrijeme: "10:00" },
    { razina: 351.10, vrijeme: "10:30" },
    { razina: 351.10, vrijeme: "11:00" },
    { razina: 351.10, vrijeme: "11:30" },
    { razina: 351.10, vrijeme: "12:00" }
  ];


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
            formatter (params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: ['#41a9c9', '#f3622d'],
          strokes: ['#41a9c9', '#f3622d'],
        }
      ],
      legend: {
        position: 'bottom',
         markerShape: 'circle'
      }
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
            formatter (params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: ['#41a9c9', '#f3622d'],
          strokes: ['#41a9c9', '#f3622d'],
        }
      ],
      legend: {
        position: 'bottom',
         markerShape: 'circle'
      }
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
            formatter (params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: ['#41a9c9', '#f3622d'],
          strokes: ['#41a9c9', '#f3622d'],
        }
      ],
      legend: {
        position: 'bottom',
         markerShape: 'circle'
      }
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
            formatter (params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: ['#41a9c9', '#f3622d'],
          strokes: ['#41a9c9', '#f3622d'],
        }
      ],
      legend: {
        position: 'bottom',
         markerShape: 'circle'
      }
    };
    // RAZINA
    this.optionsRazina = {
      data: this.razina,
      series: [
        {
          type: 'line',
          xKey: 'vrijeme',
          yKey: 'razina',
          stroke: '#f3622d',
          label: {
            // tslint:disable-next-line: typedef
            formatter (params) {
              return params.value === undefined ? '' : params.value.toFixed(0);
            },
          },
          fills: '#f3622d',
          strokes: '#f3622d',
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

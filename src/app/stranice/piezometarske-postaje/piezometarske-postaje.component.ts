import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-piezometarske-postaje',
  templateUrl: './piezometarske-postaje.component.html',
  styleUrls: ['./piezometarske-postaje.component.css']
})
export class PiezometarskePostajeComponent implements OnInit {

  optionsRazina: any;

  razina = [
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
      vrijeme: '2017-08-13T08:00:00Z',
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
      vrijeme: '2017-08-13T24:00:00Z',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    }
  ];

  constructor() {
    // RAZINA
    this.optionsRazina = {
      data: this.razina,
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

  selectMonth(e): void {

  }

  rangeUpdate(e): void {

  }

  ngOnInit(): void {
  }

}

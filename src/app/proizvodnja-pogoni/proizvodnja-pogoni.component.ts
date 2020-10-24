import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proizvodnja-pogoni',
  templateUrl: './proizvodnja-pogoni.component.html',
  styleUrls: ['./proizvodnja-pogoni.component.css']
})
export class ProizvodnjaPogoniComponent implements OnInit {

  optionsRadnaSnaga: any;

  radnaSnaga = [
    {
      vrijeme: '00:00',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '00:30',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '01:00',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '01:30',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
      {
      vrijeme: '02:00',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '02:30',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '03:00',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '03:30',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
      {
      vrijeme: '04:00',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '04:30',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '05:00',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '05:30',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
      {
      vrijeme: '06:00',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '06:30',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '07:00',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '07:30',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
      {
      vrijeme: '08:00',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '08:30',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 3,
    },
    {
      vrijeme: '09:00',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 3,
    },
    {
      vrijeme: '09:30',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 3,
    },
      {
      vrijeme: '10:00',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2.5,
    },
    {
      vrijeme: '10:30',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2.5,
    },
    {
      vrijeme: '11:00',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
    {
      vrijeme: '11:30',
       'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    },
      {
      vrijeme: '12:00',
      'HE Rijeka Agregat 1' : 0,
      'HE Rijeka Agregat 2' : 2,
    }
  ];

  constructor() { 
    // RAZINA
    this.optionsRadnaSnaga = {
      data: this.radnaSnaga,
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
      legend: {
        position: 'bottom'
      }
    };
  }

  ngOnInit(): void {
  }

}

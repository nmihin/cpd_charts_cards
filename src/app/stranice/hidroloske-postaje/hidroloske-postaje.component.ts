import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hidroloske-postaje',
  templateUrl: './hidroloske-postaje.component.html',
  styleUrls: ['./hidroloske-postaje.component.css']
})
export class HidroloskePostajeComponent implements OnInit {
  optionsRazina: any;
  optionsRelativnaRazina: any;
  optionsProtok: any;

  razina = [
    { razina: 450.17, vrijeme: "11.06." },
    { razina: 450.16, vrijeme: "12.06." },
    { razina: 450.15, vrijeme: "13.06." },
    { razina: 450.14, vrijeme: "14.06." },
    { razina: 450.13, vrijeme: "15.06." },
    { razina: 450.12, vrijeme: "16.06." },
    { razina: 450.11, vrijeme: "17.06." },
    { razina: 450.10, vrijeme: "18.06." },
    { razina: 450.11, vrijeme: "19.06." },
    { razina: 450.12, vrijeme: "20.06." },
    { razina: 450.13, vrijeme: "21.06." },
    { razina: 450.14, vrijeme: "22.06." },
    { razina: 450.17, vrijeme: "23.06." },
    { razina: 450.16, vrijeme: "24.06." },
    { razina: 450.15, vrijeme: "25.06." },
    { razina: 450.14, vrijeme: "26.06." },
    { razina: 450.13, vrijeme: "27.06." },
    { razina: 450.12, vrijeme: "28.06." },
    { razina: 450.11, vrijeme: "29.06." },
    { razina: 450.10, vrijeme: "30.06." }
  ];

  relativnaRazina = [
    { relativnaRazina: 0.53, vrijeme: "11.06." },
    { relativnaRazina: 0.52, vrijeme: "12.06." },
    { relativnaRazina: 0.51, vrijeme: "13.06." },
    { relativnaRazina: 0.50, vrijeme: "14.06." },
    { relativnaRazina: 0.49, vrijeme: "15.06." },
    { relativnaRazina: 0.48, vrijeme: "16.06." },
    { relativnaRazina: 0.47, vrijeme: "17.06." },
    { relativnaRazina: 0.46, vrijeme: "18.06." },
    { relativnaRazina: 0.45, vrijeme: "19.06." },
    { relativnaRazina: 0.46, vrijeme: "20.06." },
    { relativnaRazina: 0.47, vrijeme: "21.06." },
    { relativnaRazina: 0.48, vrijeme: "22.06." },
    { relativnaRazina: 0.49, vrijeme: "23.06." },
    { relativnaRazina: 0.50, vrijeme: "24.06." },
    { relativnaRazina: 0.51, vrijeme: "25.06." },
    { relativnaRazina: 0.52, vrijeme: "26.06." },
    { relativnaRazina: 0.53, vrijeme: "27.06." },
    { relativnaRazina: 0.52, vrijeme: "28.06." },
    { relativnaRazina: 0.51, vrijeme: "29.06." },
    { relativnaRazina: 0.50, vrijeme: "30.06." }
  ];

  protok = [
    { protok: 7.2, vrijeme: "11.06." },
    { protok: 7.1, vrijeme: "12.06." },
    { protok: 7.0, vrijeme: "13.06." },
    { protok: 6.9, vrijeme: "14.06." },
    { protok: 6.8, vrijeme: "15.06." },
    { protok: 6.7, vrijeme: "16.06." },
    { protok: 6.6, vrijeme: "17.06." },
    { protok: 6.4, vrijeme: "18.06." },
    { protok: 6.5, vrijeme: "19.06." },
    { protok: 6.6, vrijeme: "20.06." },
    { protok: 6.7, vrijeme: "21.06." },
    { protok: 6.8, vrijeme: "22.06." },
    { protok: 6.9, vrijeme: "23.06." },
    { protok: 7.0, vrijeme: "24.06." },
    { protok: 7.1, vrijeme: "25.06." },
    { protok: 7.3, vrijeme: "26.06." },
    { protok: 7.2, vrijeme: "27.06." },
    { protok: 7.1, vrijeme: "28.06." },
    { protok: 7.0, vrijeme: "29.06." },
    { protok: 6.9, vrijeme: "30.06." }
  ];

  constructor() {
        // RAZINA 
        this.optionsRazina = {
          data: this.razina,
          series: [
            {
              type: 'line',
              xKey: 'vrijeme',
              yKey: 'razina',
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
        // RELATIVNA RAZINA 
        this.optionsRelativnaRazina = {
          data: this.relativnaRazina,
          series: [
            {
              type: 'line',
              xKey: 'vrijeme',
              yKey: 'relativnaRazina',
              stroke: '#f3622d',
              marker: {
                fill: '#f3622d',
                stroke: '#f3622d'
              },
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
        // PROTOK 
          this.optionsProtok = {
            data: this.protok,
            series: [
              {
                type: 'line',
                xKey: 'vrijeme',
                yKey: 'protok',
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

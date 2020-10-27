import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radna-jalova-snaga',
  templateUrl: './radna-jalova-snaga.component.html',
  styleUrls: ['./radna-jalova-snaga.component.css']
})
export class RadnaJalovaSnagaComponent implements OnInit {

  optionsRadna: any;

  radna = [
    { lokacija: 'RHE Velebit', vrijednost: 89.39 },
    { lokacija: 'HE Jaruga', vrijednost: 0.02 },
    { lokacija: 'HE Zakučac', vrijednost: 4.5 },
    { lokacija: 'HE Kraljevac', vrijednost: 0.27 },
    { lokacija: 'HE Đale', vrijednost: 0 },
    { lokacija: 'HE Orlovac', vrijednost: 5.38 },
    { lokacija: 'CS Buško Blato', vrijednost: 2.33 },
    { lokacija: 'Peruća', vrijednost: 0 },
  ];

  constructor() {
    // RADNA
    this.optionsRadna = {
      data: this.radna,
      series: [
        {
          type: 'pie',
          angleKey: 'vrijednost',
          labelKey: 'lokacija'
        }
      ],
      legend: {
        position: 'right'
      }
    };
  }

  ngOnInit(): void {


  }

}

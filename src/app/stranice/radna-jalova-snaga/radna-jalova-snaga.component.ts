import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-radna-jalova-snaga',
  templateUrl: './radna-jalova-snaga.component.html',
  styleUrls: ['./radna-jalova-snaga.component.css']
})
export class RadnaJalovaSnagaComponent implements OnInit {

  optionsRadna: any;

  radna = [
    { lokacija: 'Raspoloživo', vrijednost: 180 },
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
          labelKey: 'lokacija',
          fills: ['#fff', '#f3622d', '#fba71b', '#57b757', '#41a9c9', '#4258c9', '#9a42c8', '#c84164', '#888888','#ed5854','#000000'],
        },
      ],
      legend: {
        position: 'right'
      }
    };
  }

  ngOnInit(): void {


  }

}

import { Component, ViewEncapsulation, OnInit, ViewChild } from '@angular/core';
import { RangeNavigatorComponent } from '@syncfusion/ej2-angular-charts';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';

@Component({
  selector: 'app-datumvrijemeraspon',
  templateUrl: './datumvrijemeraspon.component.html',
  styleUrls: ['./datumvrijemeraspon.component.css'],
  encapsulation: ViewEncapsulation.None,
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
export class DatumvrijemerasponComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

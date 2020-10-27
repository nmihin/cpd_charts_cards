import { Component, OnInit, ViewChild } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { RangeNavigatorComponent } from '@syncfusion/ej2-angular-charts';
import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
} from '@angular/material-moment-adapter';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';


@Component({
  selector: 'app-dogadjaji',
  templateUrl: './dogadjaji.component.html',
  styleUrls: ['./dogadjaji.component.css'],
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
export class DogadjajiComponent implements OnInit {
  @ViewChild('range')
  public RangeObj: RangeNavigatorComponent;

  optionsBilanca: any;
  private defaultColDef;
  private gridApi;
  private gridColumnApi;

  public modules: any[] = [ClientSideRowModelModule];

  private currentRowHeight;
  private getRowHeight;

  lokacije = [
    { field: 'datum', sortable: true, filter: true  },
    { field: 'postaja', sortable: true, filter: true },
    { field: 'cjelina', sortable: true, filter: true },
    { field: 'SCADA key', sortable: true, filter: true },
    { field: 'tip podatka', sortable: true, filter: true },
    { field: 'događaj', sortable: true, filter: true },
    { field: 'opis događaja', sortable: true, filter: true }
  ];

  vrijednosti = [
    {
      'datum': '2017-08-13T00:00:00Z',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '2017-08-13T01:00:00Z',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '2017-08-13T02:00:00Z',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '2017-08-13T03:00:00Z',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '2017-08-13T04:00:00Z',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '2017-08-13T05:00:00Z',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '2017-08-13T06:00:00Z',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '2017-08-13T07:00:00Z',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '2017-08-13T08:00:00Z',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    }
  ];

  constructor() {

    this.defaultColDef = { resizable: true };
    this.getRowHeight = function () {
      return this.currentRowHeight;
    };
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;

    params.api.sizeColumnsToFit();
    window.addEventListener('resize', function () {
      setTimeout(function () {
        params.api.sizeColumnsToFit();
      });
    });

    params.api.sizeColumnsToFit();
  }

  public periodsValue: Object[];
  public chartData: Object[];
  public value: Object[];

  ngOnInit(): void {
    this.chartData = this.vrijednosti;
    this.value = [
      new Date('2017-08-13T00:00:00Z'),
      new Date('2017-08-14T00:00:00Z'),
    ];
  }

  selectMonth(e): void {

  }

  rangeUpdate(e): void {
    const startValue = new Date(Math.round(this.RangeObj.startValue)).toISOString();
    const endValue = new Date(Math.round(this.RangeObj.endValue)).toISOString();

    // tslint:disable-next-line: typedef
    const res = this.vrijednosti.filter(function(o) {
      return o.datum <= endValue && o.datum >= startValue;
    });
  }

}

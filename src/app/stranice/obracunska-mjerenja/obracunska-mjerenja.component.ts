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
  selector: 'app-obracunska-mjerenja',
  templateUrl: './obracunska-mjerenja.component.html',
  styleUrls: ['./obracunska-mjerenja.component.css'],
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
export class ObracunskaMjerenjaComponent implements OnInit {
  @ViewChild('range')
  public RangeObj: RangeNavigatorComponent;

  private defaultColDef;
  private gridApi;
  private gridColumnApi;
  optionsVrijednosti: any;

  public modules: any[] = [ClientSideRowModelModule];

  private currentRowHeight;
  private getRowHeight;

  polja = [
    { field: 'objekt', sortable: true, filter: true  },
    { field: 'vrijeme', sortable: true, filter: true },
    { field: 'radna proizvodnja (MWh)', sortable: true, filter: true },
    { field: 'jalova proizvodnja (MvArh)', sortable: true, filter: true },
    { field: 'radna potrošnja (MWh)', sortable: true, filter: true },
    { field: 'jalova potrošnja (MVArh)', sortable: true, filter: true }
  ];

  vrijednosti = [
    {
      'objekt': '---',
      'vrijeme': '31.01.2020 10:21:23',
      'radna proizvodnja (MWh)': 0,
      'jalova proizvodnja (MvArh)': 0,
      'radna potrošnja (MWh)': 0,
      'jalova potrošnja (MVArh)': 0
    },
    {
      'objekt': '---',
      'vrijeme': '31.01.2020 10:21:23',
      'radna proizvodnja (MWh)': 0,
      'jalova proizvodnja (MvArh)': 0,
      'radna potrošnja (MWh)': 0,
      'jalova potrošnja (MVArh)': 0
    },
    {
      'objekt': '---',
      'vrijeme': '31.01.2020 10:21:23',
      'radna proizvodnja (MWh)': 0,
      'jalova proizvodnja (MvArh)': 0,
      'radna potrošnja (MWh)': 0,
      'jalova potrošnja (MVArh)': 0
    },
    {
      'objekt': '---',
      'vrijeme': '31.01.2020 10:21:23',
      'radna proizvodnja (MWh)': 0,
      'jalova proizvodnja (MvArh)': 0,
      'radna potrošnja (MWh)': 0,
      'jalova potrošnja (MVArh)': 0
    },
    {
      'objekt': '---',
      'vrijeme': '31.01.2020 10:21:23',
      'radna proizvodnja (MWh)': 0,
      'jalova proizvodnja (MvArh)': 0,
      'radna potrošnja (MWh)': 0,
      'jalova potrošnja (MVArh)': 0
    },
    {
      'objekt': '---',
      'vrijeme': '31.01.2020 10:21:23',
      'radna proizvodnja (MWh)': 0,
      'jalova proizvodnja (MvArh)': 0,
      'radna potrošnja (MWh)': 0,
      'jalova potrošnja (MVArh)': 0
    },
    {
      'objekt': '---',
      'vrijeme': '31.01.2020 10:21:23',
      'radna proizvodnja (MWh)': 0,
      'jalova proizvodnja (MvArh)': 0,
      'radna potrošnja (MWh)': 0,
      'jalova potrošnja (MVArh)': 0
    },
    {
      'objekt': '---',
      'vrijeme': '31.01.2020 10:21:23',
      'radna proizvodnja (MWh)': 0,
      'jalova proizvodnja (MvArh)': 0,
      'radna potrošnja (MWh)': 0,
      'jalova potrošnja (MVArh)': 0
    }
  ];

  optionsRazinaInit(d): void{
    this.optionsVrijednosti = {
      data: d,
      series: [
        {
          type: 'line',
          xKey: 'vrijeme',
          yKey: 'razina',
          stroke: '#f3622d',
          fills: '#f3622d',
          strokes: '#f3622d',
          tooltipEnabled: false
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
              return params.value === undefined ? '' : params.value.toFixed(2);
            },
          },
        },
      ],
      legend: {
        enabled: false,
      },
    };
  }

  constructor() {

    this.defaultColDef = { resizable: true };
    this.getRowHeight = function () {
      return this.currentRowHeight;
    };

    this.optionsRazinaInit(this.vrijednosti);
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

  }

}

import { Component, OnInit } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

@Component({
  selector: 'app-obracunska-mjerenja',
  templateUrl: './obracunska-mjerenja.component.html',
  styleUrls: ['./obracunska-mjerenja.component.css']
})
export class ObracunskaMjerenjaComponent implements OnInit {

  private defaultColDef;
  private gridApi;
  private gridColumnApi;

  public modules: any[] = [ClientSideRowModelModule];

  private currentRowHeight;
  private getRowHeight;

  polja = [
    { field: 'Objekt', sortable: true, filter: true  },
    { field: 'Vrijeme', sortable: true, filter: true },
    { field: 'Radna proizvodnja (MWh)', sortable: true, filter: true },
    { field: 'Jalova proizvodnja (MvArh)', sortable: true, filter: true },
    { field: 'Radna potrošnja (MWh)', sortable: true, filter: true },
    { field: 'Jalova potrošnja (MVArh)', sortable: true, filter: true }
  ];

  vrijednosti = [
    {
      'Objekt': '---',
      'Vrijeme': '31.01.2020 10:21:23',
      'Radna proizvodnja (MWh)': 0,
      'Jalova proizvodnja (MvArh)': 0,
      'Radna potrošnja (MWh)': 0,
      'Jalova potrošnja (MVArh)': 0
    },
    {
      'Objekt': '---',
      'Vrijeme': '31.01.2020 10:21:23',
      'Radna proizvodnja (MWh)': 0,
      'Jalova proizvodnja (MvArh)': 0,
      'Radna potrošnja (MWh)': 0,
      'Jalova potrošnja (MVArh)': 0
    },
    {
      'Objekt': '---',
      'Vrijeme': '31.01.2020 10:21:23',
      'Radna proizvodnja (MWh)': 0,
      'Jalova proizvodnja (MvArh)': 0,
      'Radna potrošnja (MWh)': 0,
      'Jalova potrošnja (MVArh)': 0
    },
    {
      'Objekt': '---',
      'Vrijeme': '31.01.2020 10:21:23',
      'Radna proizvodnja (MWh)': 0,
      'Jalova proizvodnja (MvArh)': 0,
      'Radna potrošnja (MWh)': 0,
      'Jalova potrošnja (MVArh)': 0
    },
    {
      'Objekt': '---',
      'Vrijeme': '31.01.2020 10:21:23',
      'Radna proizvodnja (MWh)': 0,
      'Jalova proizvodnja (MvArh)': 0,
      'Radna potrošnja (MWh)': 0,
      'Jalova potrošnja (MVArh)': 0
    },
    {
      'Objekt': '---',
      'Vrijeme': '31.01.2020 10:21:23',
      'Radna proizvodnja (MWh)': 0,
      'Jalova proizvodnja (MvArh)': 0,
      'Radna potrošnja (MWh)': 0,
      'Jalova potrošnja (MVArh)': 0
    },
    {
      'Objekt': '---',
      'Vrijeme': '31.01.2020 10:21:23',
      'Radna proizvodnja (MWh)': 0,
      'Jalova proizvodnja (MvArh)': 0,
      'Radna potrošnja (MWh)': 0,
      'Jalova potrošnja (MVArh)': 0
    },
    {
      'Objekt': '---',
      'Vrijeme': '31.01.2020 10:21:23',
      'Radna proizvodnja (MWh)': 0,
      'Jalova proizvodnja (MvArh)': 0,
      'Radna potrošnja (MWh)': 0,
      'Jalova potrošnja (MVArh)': 0
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

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';

@Component({
  selector: 'app-dogadjaji',
  templateUrl: './dogadjaji.component.html',
  styleUrls: ['./dogadjaji.component.css']
})
export class DogadjajiComponent implements OnInit {

  optionsBilanca: any;
  private defaultColDef;
  private gridApi;
  private gridColumnApi;

  public modules: any[] = [ClientSideRowModelModule];

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
      'datum': '31.01.2020 10:21:23',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '31.01.2020 10:21:23',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '31.01.2020 10:21:23',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '31.01.2020 10:21:23',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '31.01.2020 10:21:23',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '31.01.2020 10:21:23',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '31.01.2020 10:21:23',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '31.01.2020 10:21:23',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    },
    {
      'datum': '31.01.2020 10:21:23',
      'postaja': 'CS BB',
      'cjelina': 'Agregat',
      'SCADA key': 'CS BB:Agregat C.431. Na mreži',
      'tip podatka': 'MREŽA',
      'događaj': 'Uključen',
      'opis događaja': '---'
    }
  ];

  constructor() {
    this.defaultColDef = {
      width: 150,
      resizable: true,
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

  ngOnInit(): void {}

}

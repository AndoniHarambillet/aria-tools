import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Trait } from '../models/trait-model';
import { Observable } from 'rxjs/internal/Observable';
import { GridOptions, RowClickedEvent } from 'ag-grid-community';
import { AgGridAngular } from 'ag-grid-angular';

@Component({
  selector: 'app-trait-holder',
  imports: [AgGridAngular],
  templateUrl: './trait-holder.html',
  styleUrl: './trait-holder.scss',
})
export class TraitHolder {
  @Input() selectedTraits: Trait[] | null = [];
  @Output() rowClicked = new EventEmitter<Trait>();
  gridOptions: GridOptions = this.getGridOptions();

  constructor() {}

  getGridOptions(): GridOptions {
    return {
      tooltipShowDelay: 0,
      tooltipHideDelay: 1000,
      multiSortKey: 'ctrl',
      domLayout: 'normal',
      columnDefs: [
        {
          field: 'name',
          headerName: 'Name',
          flex: 16,
          cellStyle: { fontWeight: 'bold' },
          tooltipValueGetter: () => 'Click to select trait',
        },
        {
          field: 'description',
          headerName: 'Description',
          flex: 30,
          tooltipValueGetter: () => 'Click to select trait',
        },
        {
          filter: false,
          field: 'weight',
          headerName: 'Cost',
          flex: 6,
          cellStyle: (params: any) => this.costStyle(params),
          tooltipValueGetter: () => 'Click to select trait',
        },
        {
          filter: false,
          field: 'modifiers.modifierStr',
          headerValueGetter: () => 'Str 💪',
          flex: 6,
          cellStyle: (params) => this.modifierStyle(params),
          cellRenderer: (params: any) => this.modifierRenderer(params),
          tooltipValueGetter: () => 'Click to select trait',
        },
        {
          filter: false,
          field: 'modifiers.modifierEnd',
          headerValueGetter: () => 'End🏃',
          flex: 6,
          cellStyle: (params) => this.modifierStyle(params),
          cellRenderer: (params: any) => this.modifierRenderer(params),
          tooltipValueGetter: () => 'Click to select trait',
        },
        {
          filter: false,
          field: 'modifiers.modifierCha',
          headerValueGetter: () => 'Cha😎',
          flex: 6,
          cellStyle: (params) => this.modifierStyle(params),
          cellRenderer: (params: any) => this.modifierRenderer(params),
          tooltipValueGetter: () => 'Click to select trait',
        },
        {
          filter: false,
          field: 'modifiers.modifierInt',
          headerValueGetter: () => 'Int🤓',
          flex: 6,
          cellStyle: (params) => this.modifierStyle(params),
          cellRenderer: (params: any) => this.modifierRenderer(params),
          tooltipValueGetter: () => 'Click to select trait',
        },
        {
          filter: false,
          field: 'modifiers.modifierDex',
          headerValueGetter: () => 'Dex👋',
          flex: 6,
          cellStyle: (params) => this.modifierStyle(params),
          cellRenderer: (params: any) => this.modifierRenderer(params),
          tooltipValueGetter: () => 'Click to select trait',
        },
        {
          filter: false,
          field: 'modifiers.modifierSens',
          headerValueGetter: () => 'Sens👁️',
          flex: 6,
          cellStyle: (params) => this.modifierStyle(params),
          cellRenderer: (params: any) => this.modifierRenderer(params),
          tooltipValueGetter: () => 'Click to select trait',
        },
        {
          filter: false,
          field: 'modifiers.modifierHp',
          headerValueGetter: () => 'HP❤️',
          flex: 6,
          cellStyle: (params) => this.modifierStyle(params),
          cellRenderer: (params: any) => this.modifierRenderer(params),
          tooltipValueGetter: () => 'Click to select trait',
        },
        {
          filter: false,
          field: 'modifiers.modifierArmor',
          headerValueGetter: () => 'Armor🛡️',
          flex: 6,
          cellStyle: (params) => this.modifierStyle(params),
          cellRenderer: (params: any) => this.modifierRenderer(params),
          tooltipValueGetter: () => 'Click to select trait',
        },
      ],
      defaultColDef: {
        sortable: true,
        filter: true,
        resizable: true,
      },
      getRowStyle: (params) => {
        if (params.node.rowIndex && params.node.rowIndex % 2 === 1) {
          return { backgroundColor: '#f5f5f5 !important' };
        }
        return { backgroundColor: '#fbfbfb !important' };
      },
    };
  }
  modifierStyle(params: any): any {
    if (params.value) {
      if (params.value > 0) {
        return { color: '#4CAF50 !important', fontWeight: 'bold' };
      } else if (params.value < 0) {
        return { color: '#F44336 !important', fontWeight: 'bold' };
      }
    }
    return {};
  }
  costStyle(params: any): any {
    if (params.value) {
      if (params.value > 0) {
        return { color: '#F44336 !important', fontWeight: 'bold' };
      } else if (params.value < 0) {
        return { color: '#4CAF50 !important', fontWeight: 'bold' };
      }
    }
    return {};
  }
  modifierRenderer(params: any): string {
    if (params.value) return params.value;
    return '-';
  }

  onGridRowClicked(event: RowClickedEvent<Trait>): void {
    if (event.data) this.rowClicked.emit(event.data);
  }
}

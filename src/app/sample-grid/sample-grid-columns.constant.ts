import { DataGridColumn } from '../grids/models/models';

export const SAMPLE_GRID_COLUMNS: DataGridColumn[] = [
  { dataField: 'code' },
  { dataField: 'country' },
  { dataField: 'city' },
  { dataField: 'address' },
  { dataField: 'rooms' },
  {
    dataField: 'color',
    cellTemplate: 'customTemplate'
  },
  {
    dataField: 'salary',
    calculateCellValue: (rowData: any) => {
      const data = rowData.salary.replace('$', '');
      return parseFloat(data);
    },
    calculateGroupValue: (rowData: any) => {
      const data = rowData.salary.replace('$', '');
      return parseFloat(data);
    },
    format: {
      type: 'fixedPoint',
      precision: 2
    }
  },
  { dataField: 'owner' },
  { dataField: 'garden' },
  { dataField: 'pets' },
  { dataField: 'company' },
  { dataField: 'cars' },
  { dataField: 'id' },
  { dataField: 'age' }
];

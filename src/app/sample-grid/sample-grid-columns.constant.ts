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
  { dataField: 'age' },
  { dataField: 'field1' },
  { dataField: 'field2' },
  { dataField: 'field3' },
  { dataField: 'field4' },
  { dataField: 'field5' },
  { dataField: 'field6' },
  { dataField: 'field7' },
  { dataField: 'field8' },
  { dataField: 'field9' },
  { dataField: 'field10' },
  { dataField: 'field11' },
  { dataField: 'field12' },
  { dataField: 'field13' },
  { dataField: 'field14' },
  { dataField: 'field15' },
  { dataField: 'field16' },
  { dataField: 'field17' },
  { dataField: 'field18' },
  { dataField: 'field19' },
  { dataField: 'field20' },
  { dataField: 'field21' },
  { dataField: 'field22' },
  { dataField: 'field23' },
  { dataField: 'field24' },
  { dataField: 'field25' },

  { dataField: 'code2' },
  { dataField: 'country2' },
  { dataField: 'city2' },
  { dataField: 'address2' },
  { dataField: 'rooms2' },
  {
    dataField: 'color2',
    cellTemplate: 'customTemplate'
  },
  {
    dataField: 'salary2',
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
  { dataField: 'owner2' },
  { dataField: 'garden2' },
  { dataField: 'pets2' },
  { dataField: 'company2' },
  { dataField: 'cars2' },
  { dataField: 'id2' },
  { dataField: 'age2' },
  { dataField: 'field12' },
  { dataField: 'field22' },
  { dataField: 'field32' },
  { dataField: 'field42' },
  { dataField: 'field52' },
  { dataField: 'field62' },
  { dataField: 'field72' },
  { dataField: 'field82' },
  { dataField: 'field92' },
  { dataField: 'field102' },
  { dataField: 'field112' },
  { dataField: 'field122' },
  { dataField: 'field132' },
  { dataField: 'field142' },
  { dataField: 'field152' },
  { dataField: 'field162' },
  { dataField: 'field172' },
  { dataField: 'field182' },
  { dataField: 'field192' },
  { dataField: 'field202' },
  { dataField: 'field212' },
  { dataField: 'field222' },
  { dataField: 'field232' },
  { dataField: 'field242' },
  { dataField: 'field252' },
];

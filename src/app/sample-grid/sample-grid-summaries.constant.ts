import { SummaryItem, TargetSummaryType } from '../grids/models/models';

export const SAMPLE_GRID_SUMMARIES: SummaryItem[] = [
  {
    column: 'Salary',
    summaryType: 'sum',
    customizeText: itemInfo => `$ ${itemInfo.value}`,
    alignment: 'right',
    valueFormat: 'currency',
    enabled: true,
    skipEmptyValues: true,
    calculateOn: TargetSummaryType.groupsAndTotal
  },
  {
    column: 'code',
    summaryType: 'count',
    alignByColumn: false,
    customizeText: itemInfo => {
      return `${itemInfo.value}`;
    },
    skipEmptyValues: true,
    enabled: true,
    calculateOn: TargetSummaryType.groupsAndTotal
  }
];

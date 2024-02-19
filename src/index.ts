/**
 * Converts a Array of Objects to a CSV.
 *
 * @param object[] data - The array of objects representing the data or table data.
 * @param string   name - File name of exported CSV (Optional).
 * @param string[] fields - If you want to export selected fields from data to CSV (Optional).
 * @param string[] header - If you want to custom CSV header.
 * @returns string - Downloads the CSV & returns The CSV string generated from the table data (Optional).
 */

import { flatObjectKeys } from './helper';

export function convertToCSV(
  data: object[],
  name: string = 'download',
  selectedFields?: string[],
  header: string[] = []
): string {
  const separator = ',';
  const lineEnding = '\n';

  let fields = flatObjectKeys(data[0]);

  const headers =
    header.length > 0
      ? header.join(separator) + lineEnding
      : fields.join(separator) + lineEnding;

  const csvContent = data.reduce((csv, row: any) => {
    const values = fields.map((field) => {
      let value = '';
      if (field.includes('.')) {
        value = row[field.split('.')[0]]
          ? row[field.split('.')[0]][field.split('.')[1]]
          : '';
      } else {
        value = row[field];
      }

      return `"${value ? value.toString().replace(/"/g, '""') : ''}"`;
    });
    return csv + values.join(separator) + lineEnding;
  }, headers);

  const blob = new Blob([csvContent], { type: 'text/csv' });

  const url = window.URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.style.display = 'none';
  a.href = url;
  a.download = name;
  document.body.appendChild(a);
  a.click();
  window.URL.revokeObjectURL(url);

  return csvContent;
}

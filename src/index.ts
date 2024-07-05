import { flatObjectKeys } from './helper';

interface IProps {
  data: object[];
  name?: string;
  header?: string[];
  isDownload?: boolean;
}

export function convertToCSV({
  data,
  name = 'download',
  header = [],
  isDownload = false,
}: IProps): string {
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

  if (!isDownload) {
    return csvContent;
  }

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

// v2.0
// selectedFields?: string[];

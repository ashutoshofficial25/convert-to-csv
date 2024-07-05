# Convert to CSV

This package provides a utility function to convert an array of objects into a CSV format, suitable for exporting data from JavaScript applications.

## Installation

You can install this package via npm:

```bash
npm install convert-to-csv
```

## Usage

First, import the convertToCSV function from the 'convert-to-csv' package:

```javascript
import { convertToCSV } from 'convert-to-csv';
```

### Example :

Let's say you have an array of user objects like this:

```javascript
const users = [
  {
    name: 'Ashutosh',
    email: 'example@example.com',
    address: { city: 'Lucknow', postalCode: 226010, state: 'UP' },
  },
  {
    name: 'Yuvaraj',
    email: 'example@gmail.com',
    address: { city: 'Varanasi', postalCode: 226016, state: 'UP' },
  },
];
```

### Return CSV only (For Nodejs/ backend projects.)

To get this data into a CSV format, you can use the convertToCSV function:

```javascript
const csv = convertToCSV({ data: users, isDownload: false });
or;
const csv = convertToCSV({ data: users });
```

The in csv variable you will get your data as csv format.

To download this data into a CSV file, you can use the convertToCSV function `download to true` for frontend projects:

```javascript
convertToCSV({ data: users, isDownload: true });
```

### Download CSV with a Custom File Name

If you want to specify a custom file name for the downloaded CSV file, you can pass it as an option to the convertToCSV function:

```javascript
convertToCSV({data : users, name="mycsvfile" })
```

This will download the CSV file with the name "mycsvfile.csv".

### Download or get CSV with a Custom Headers

You can also provide custom headers for the CSV file by passing an array of strings to the `header` option. Here's how you can use it:

```javascript
const customHeaders = ['Name', 'Email', 'City', 'Postal Code', 'State'];

convertToCSV({ data: users, header: customHeaders, name: 'custom_csv' });
```

The downloaded CSV file will have the specified custom headers.

### Explanation

The `convertToCSV` function takes an object as its parameter with the following properties:

- `data`: An array of objects that you want to convert to CSV format.
- `name` (optional): A string representing the custom file name for the downloaded CSV file. If not provided, it defaults to "download.csv".
- `header` (optional): An array of strings representing custom headers for the CSV file. If provided, these headers will be used instead of deriving them from the keys of the objects in the array.

When you call `convertToCSV`, it converts the array of objects into CSV format and initiates a download of the CSV file.

The CSV file will have headers either derived from the keys of the objects in the array or from the provided `header` array, and each object's properties will be listed as values in the corresponding columns.

If a custom file name is provided, the downloaded CSV file will have that name; otherwise, it will default to "download.csv".

# Object to CSV Converter

This package provides a utility function to convert an array of objects into a CSV format, suitable for exporting data from JavaScript applications.

## Installation

You can install this package via npm:

```bash
npm install convert-to-csv
```

## Usage

```bash
import { convertToCSV } from 'convert-to-csv';
```

### example :

```bash

const data = [
   { name: "Ashutosh" , email: "example@example.com" , address : { city: "Lucknow" , postalCode: 226010 , state: "UP" } },
   { name: "Yuvaraj" ,  email: "example@gmail.com" , address : { city: "Varanasi" , postalCode: 226016 , state: "UP" } },
]

// this will download this data into a CSV file.
convertToCSV(data)

```

### If you want to custom header

const XLSX = require("xlsx");
const path = require("path");

const filePath = path.resolve("public/perfume.xlsx"); // Replace 'excel.xlsx' with your actual file name and extension

const readExcelData = () => {
  const workbook = XLSX.readFile(filePath);
  const sheetName = workbook.SheetNames[0]; // Assuming you want to read data from the first sheet
  const worksheet = workbook.Sheets[sheetName];

  const data = XLSX.utils.sheet_to_json(worksheet, { header: 1 });

  // Assuming the first row in the sheet contains the column headers
  const columnHeaders = data[0];

  // Remove the first row (column headers) from the data array
  data.splice(0, 1);

  const result = data.map((row) => {
    const rowData = {};
    columnHeaders.forEach((header, index) => {
      rowData[header] = row[index];
    });
    return rowData;
  });

  return result;
};

module.exports = readExcelData;

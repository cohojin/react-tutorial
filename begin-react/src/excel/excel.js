const xlsx = require("xlsx");

const excelFile = xlsx.readFile("excelDB.xlsx");

const sheetName = excelFile.SheetNames[0];
const firstSheet = excelFile.Sheets[sheetName];

const nodeData = xlsx.utils.sheet_to_json(firstSheet, { defval: "" });

console.log(nodeData);


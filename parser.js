'use strict'

// import dependencies
const fs = require('fs');
const PDFParser = require('pdf2json');

const pdfParser = new PDFParser();

pdfParser.on("pdfParser_dataError", errData => console.error(errData.parserError) );
pdfParser.on("pdfParser_dataReady", pdfData => {
    fs.writeFileSync("./files/newOrder.json", JSON.stringify(pdfData));
});

pdfParser.loadPDF("./files/ORD_138_22434164_20240206_2024020619332883.pdf");

// put files into array
// const files = fs.readdirSync('./files');
// // 
// const invoices = [];
// // 
// (async () => {
//     await Promise.all(files.map(async (file) => {
//         // 
//         // set up pdf parser
//         let pdfParser = new PDFParser(this,1);
// // 
//         // load pdf document
//         pdfParser.loadPDF(`patients/${file}`);
// // 
//     }));
// })();
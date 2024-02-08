'use strict'


// Node.js declarations

// const fs = require('fs');
// const PDFParser = require('pdf2json');


const orderInput = document.getElementById('orderInput');
const invoiceInput = document.getElementById('invoiceInput');
const submitButton = document.getElementById("submitButton");

let orderPDF;
let invoicePDF;

orderInput.onchange = () => {
  orderPDF = orderInput.files[0];
  console.log(orderPDF);
}

invoiceInput.onchange = () => {
  invoicePDF = invoiceInput.files[0];
  console.log(invoicePDF);
}


// submitButton.addEventListener('click', () => {

// })

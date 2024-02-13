'use strict'
import newOrder from './files/newOrder.json' assert { type: 'json' }

console.log(newOrder)

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

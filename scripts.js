'use strict'
import newOrder from './files/newOrder.json' assert { type: 'json' }

const x = Object(newOrder.Pages[0].Texts);
const y = x.map((i,x) => {
    return i.R[0].T;
})

console.log(y)

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

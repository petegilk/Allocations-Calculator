'use strict'

// const pdf = require('./files/files/ORD_138_22434164_20240206_2024020619332883.pdf');

// let orderFile = document.getElementById("orderFile");
let invoiceFile = document.getElementById("invoiceFile");
const submitButton = document.getElementById("submitButton");


const fileInput = document.getElementById('orderFile');
fileInput.onchange = () => {
  const selectedFile = fileInput.files[0];
  console.log(selectedFile);
}


submitButton.addEventListener('click', () => {
    console.log(orderFile);
})

console.log(orderFile);
console.log(invoiceFile);
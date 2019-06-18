document.addEventListener('DOMContentLoaded', () => {

  // bill = document.querySelector('.bill');
  totalDiv = document.querySelector('.total');
  tipDiv = document.querySelector('.tip');
  customersDiv = document.querySelector('.customers');
  calculationDiv = document.querySelector('.calculation');
  amountPerPayerP = document.querySelector('#amountPerPayer');

  totalInput = document.querySelector('#totalInput');

  total = 100;
  tip = 0;
  customers = 3;
  calculation = 0;

  calculateBillPerPayer();

  totalInput.addEventListener('input', ()=> {
    total = totalInput.value;
    console.log(total);
    calculateBillPerPayer();
  })

  function calculateBillPerPayer() {
    calculation = ((total * (1 + tip/100)) / customers).toFixed(2);
    amountPerPayerP.textContent = calculation;
  }


})

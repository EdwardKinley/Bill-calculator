document.addEventListener('DOMContentLoaded', () => {

  // bill = document.querySelector('.bill');
  totalDiv = document.querySelector('.total');
  tipDiv = document.querySelector('.tip');
  customersDiv = document.querySelector('.customers');
  calculationDiv = document.querySelector('.calculation');
  amountPerPayerP = document.querySelector('#amountPerPayer');

  totalInput = document.querySelector('#totalInput');
  tipInput = document.querySelector('#tipInput');

  total = 0;
  tip = 0;
  customers = 3;
  calculation = 0;

  // calculateBillPerPayer();

  const tipPercentages = [0, 10, 12.5, 15];

  for (i=0; i<tipPercentages.length; i++) {
    const tipButton = document.createElement('button');
    tipButton.id = `#tip${tipPercentages[i]}`;
    tipButton.value = tipPercentages[i];
    tipButton.textContent = tipPercentages[i];
    tipDiv.appendChild(tipButton);
    tipButton.addEventListener('click', () => {
      tip = tipButton.value;
      tipInput.value = tipButton.value;
      calculateBillPerPayer();
    })
  }

  totalInput.addEventListener('input', ()=> {
    total = totalInput.value;
    calculateBillPerPayer();
  })

  tipInput.addEventListener('input', ()=> {
    tip = tipInput.value;
    calculateBillPerPayer();
  })

  function calculateBillPerPayer() {
    calculation = ((total * (1 + tip/100)) / customers).toFixed(2);
    amountPerPayerP.textContent = calculation;
  }


})

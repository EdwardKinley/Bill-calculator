document.addEventListener('DOMContentLoaded', () => {

  totalDiv = document.querySelector('.total');
  tipDiv = document.querySelector('.tip');
  customersDiv = document.querySelector('.customers');
  calculationDiv = document.querySelector('.calculation');
  amountPerPayerP = document.querySelector('#amountPerPayer');

  totalInput = document.querySelector('#totalInput');
  tipInput = document.querySelector('#tipInput');
  customersInput = document.querySelector('#customersInput');

  total = 0;
  tip = 0;
  customers = 1;
  calculation = 0;

  const tipPercentages = [0, 10, 12.5, 15];
  const numbersOfPayers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  for (i=0; i<tipPercentages.length; i++) {
    const tipButton = document.createElement('button');
    tipButton.className = 'tipButton';
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

  for (i=0; i<numbersOfPayers.length; i++) {
    const payersButton = document.createElement('button');
    payersButton.id = `#payers${numbersOfPayers[i]}`;
    payersButton.value = numbersOfPayers[i];
    payersButton.textContent = numbersOfPayers[i];
    customersDiv.appendChild(payersButton);
    payersButton.addEventListener('click', () => {
      customers = payersButton.value;
      customersInput.value = payersButton.value;
      calculateBillPerPayer();
    })
  }

  totalInput.addEventListener('input', ()=> {
    total = totalInput.value;
    calculateBillPerPayer();
  })

  tipInput.addEventListener('input', () => {
    tip = tipInput.value;
    calculateBillPerPayer();
  })

  customersInput.addEventListener('input', () => {
    if (customersInput.value == '') {
      customers = 1;
    } else {
      customers = customersInput.value;
    }
    calculateBillPerPayer();
  })

  function calculateBillPerPayer() {
    calculation = ((total * (1 + tip/100)) / customers).toFixed(2);
    if (isNaN(calculation)) {
      amountPerPayerP.textContent = 'Washing up!';
    } else {
      amountPerPayerP.textContent = calculation;
    }
  }

})

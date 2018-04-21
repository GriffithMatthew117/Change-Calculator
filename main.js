function calculateChange(due, given) {
  var coins = {
    dollar: 0,
    quarter: 0,
    dime: 0,
    nickel: 0,
    penny: 0
  };

  var remainder = (given * 100) - (due * 100);
  console.log(remainder);
  if (remainder > 100) {
    coins.dollar = Math.floor(remainder / 100);
    remainder = remainder % 100;
  }
  if (remainder > 25) {
    coins.quarter = Math.floor(remainder / 25);
    remainder = remainder % 25;
  }
  if (remainder > 10) {
    coins.dime = Math.floor(remainder / 10);
    remainder = remainder % 10;
  }
  if (remainder > 5) {
    coins.nickel = Math.floor(remainder / 5);
    remainder = remainder % 5;
  }
  if (remainder >= 1) {
    coins.penny = Math.round(remainder / 1);
    remainder = remainder % 1;
  }
  return coins;
}

document.getElementById("calculate-change").addEventListener("click", function () {
  var due = document.getElementById("amount-due").value;
  var given = document.getElementById("amount-received").value;
  var result = calculateChange(due, given);
  document.getElementById('dollars-output').innerHTML = result.dollar;
  document.getElementById('quarters-output').innerHTML = result.quarter;
  document.getElementById('dimes-output').innerHTML = result.dime;
  document.getElementById('nickels-output').innerHTML = result.nickel;
  document.getElementById('pennies-output').innerHTML = result.penny;
});
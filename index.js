function calculate() {
  let x = Number(document.getElementById('inputX').value);
  let y = Number(document.getElementById('inputY').value);

  let sum = (x, y) => x + y;

  let product = (x, y) => x * y;
  let result = '';

  if (x > y) {
    result = 'X is greater than Y';
  } else if (y > x) {
    result = 'Y is greater than X';
  } else {
    result = 'X is equal to Y';
  }
  document.getElementById('sumCell').textContent = sum(x, y);
  document.getElementById('productCell').textContent = product(x, y);
  document.getElementById('resultCell').textContent = result;
}

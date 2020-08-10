let minResults = 0;
function calculate() {
  const data = document.getElementById('data').value;
  const list = data.split(determineDelimiter(data));

  const countedItems = {};
  for (const item in list) {
    countedItems[list[item]] = (countedItems[list[item]] || 0) + 1;
  }

  let result = '';
  for (const i in countedItems) {
    if (countedItems[i] >= minResults) {
      result += i + ' - ' + countedItems[i] + '<br>';
    }
  }
  document.getElementById('results').innerHTML = result;
}

function determineDelimiter(data) {
  const returnCount = data.split('\n').length;
  const commaCount = data.split(',').length;
  const pipeCount = data.split('|').length;

  if (returnCount > commaCount && returnCount > pipeCount) {
    return '\n';
  } else if (commaCount > pipeCount) {
    return ',';
  }
  return '|';
}

document.getElementById('data').addEventListener('keyup', function () {
  calculate();
});
document.getElementById('minCount').addEventListener('input', function () {
  minResults = document.getElementById('minCount').value;
  calculate();
});
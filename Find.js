var ages = [3, 10, 11, 18, 20];

function checkAdult(acc, e) {
  if(e > 18) {
      return acc    
  }
  return e
}

const Find = ages.reduce(checkAdult)
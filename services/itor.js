function decompose(int, divider){
  return { time: Math.trunc(int / divider), rest: int % divider }
}
function repeat(symbol, time){

  let result = ''
  for(let i = 0; i < time; i++){
    result += symbol
  }
  return result
}

module.exports = function itor(int){
  if(int%1 !== 0){
    throw new TypeError('Number is not an integer')
  }
  if(int < 1){
    throw new RangeError('Number is inferior to 1')
  }
  if(int > 100){
    throw new RangeError('Number is superior to 100')
  }
  let result = ''


  function symbol(int, symbol, inferiorSymbol, value, inferiorValue){
    let { time, rest} =  decompose(int, value)
    const substractMode = rest >= (value - inferiorValue)
    if(substractMode){
      if(time > 1){
        result += repeat(symbol, time)
      }
      result += inferiorSymbol + symbol
      rest = rest - (value-inferiorValue)
    }
    else {
      result += repeat(symbol, time)
    }
    return rest
  }
  
  debugger
  const hundredR = symbol(int, 'C', 'X', 100, 10)
  const fiftyR = symbol(hundredR, 'L', 'X', 50, 10)
  const tenR = symbol(fiftyR, 'X', 'I', 10, 1)
  const fiveR = symbol(tenR, 'V', 'I', 5, 1)
  symbol(fiveR, 'I', '', 1, 0)
  
  return result
}
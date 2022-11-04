var index = [{ index: 2, isPrime: true }];
function primeNumber(number) {
  for (let i = index[index.length - 1].index + 1; i <= number; i++) {
    let isPrime = true;

    let max = Math.sqrt(i);
    for (let j = 2; j <= max; j++) {
      if (i % j === 0) {
        isPrime = false;
        index.push({index:i,isPrime:false});
        break;
      }
    }
    if(isPrime){
      index.push({index:i,isPrime:true});
    }
    
  }
  return index.filter(x=>x.isPrime).map(x=>{return x.index});
}

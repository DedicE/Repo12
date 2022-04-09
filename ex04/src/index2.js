function sumFibs(num) {
    let fibo = [0, 1];
    let sum = 0;
    let oddSum = 0;
    for (let i = 0; i < 32; i++){
    sum = fibo[0] + fibo[1];
    fibo.push(sum);
    fibo.shift();
    if (fibo[0] % 2 != 0 && fibo[0] <= num){
    oddSum= oddSum + fibo[0];
      }
    }
    return oddSum
    }
    
    let result = sumFibs(75025);
    console.log(result);
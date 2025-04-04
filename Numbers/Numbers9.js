// 🔥 7️⃣ Check if a number is Armstrong Number.

// The sum of its digits raised to the power of number of digits is equal to the original number.




const armStrong = (num) => {
  temp = num;
  let sum = 0;

  let power = num.toString().length;

  while(num>0){
    let digit = num%10;
    sum += Math.pow(digit, power);
    num = Math.floor(num/10);
  }

  return temp === sum;

}

console.log(armStrong(153)); // true
console.log(armStrong(9474)); // true
console.log(armStrong(123)); // false



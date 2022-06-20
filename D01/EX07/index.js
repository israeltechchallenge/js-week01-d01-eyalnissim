function getRandomInt() {
  //your code
    let numA = Math.random()*100;
    let num1 = parseInt(numA);
    return num1;
    // let numB = math.random()*100;
    // let num2= parseInt(numB);
}
 let num1 = getRandomInt();
 let num2 = getRandomInt();
  function moduloEx7(num1,num2) {
    //your code
    let sentence = ""
    
    if (num1 > num2 && num1%num2 !==0 ) {
        sentence=`The number ${num1} is bigger than ${num2}. But the modulo of ${num1} % ${num2} is ${num1%num2}`;
         
    }else if (num1>num2){
      sentence = `The number ${num1} is bigger than ${num2}`
      
    }else if (num1 === num2){
      sentence=`The number ${num1} is equal to ${num2}`;
    } else  {
      sentence=`The number ${num1} is less than ${num2}`;
    }
    return sentence;
  
  }
  
  document.getElementById("output").innerText= moduloEx7(num1,num2);
  
  

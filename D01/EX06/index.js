function moduloEx5(num1,num2) {
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

document.getElementById("output").innerText= moduloEx5(8,3);



// Do not remove or change this line, or the tests won't work
//export { moduloEx5 };

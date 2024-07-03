let calculation = localStorage.getItem('calculation') || '0';
display();
window.onkeydown= function(val){  
  console.log(val.keyCode);
  if((val.keyCode>47 &&val.keyCode<58)||(val.keyCode>95 &&val.keyCode<112))  
{  
  updateCalculation(val.key)
}  
else if(val.keyCode===13){
  calculation = eval(calculation);
  display();

  // Remember to save the calculation here.
  localStorage.setItem('calculation', calculation);
}
else if(val.key==='c'){
  calculation = '0';
  display();

  // Remember to save the calculation here.
  localStorage.setItem('calculation', calculation);
}
else if(val.keyCode===8){
backSpace();
}
};  

function updateCalculation(value) {
  calculation==='0'?calculation=value:calculation += value;
  //console.log(calculation);
  display();
  localStorage.setItem('calculation', calculation);
}
function backSpace(){
  calculation=String(calculation);
  calculation=calculation.substring(0,calculation.length-1);
  if(calculation.length===0)calculation='0';
  display();
  localStorage.setItem('calculation', calculation);
}
// Optional: you can also create a function in order
// to reuse this code.
function display() {
  document.querySelector('.screen').innerHTML=calculation;
}
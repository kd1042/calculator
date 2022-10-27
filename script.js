let uservalue = 0;
let historyvalue = 0;
let addition = false;
let substrct = false;
let multiply = false;
let divide   = false;
const userinput = document.querySelector('.userinput');
const hist = document.querySelector('.history');

function getvalue(value){
  if(uservalue != 0){
    uservalue = `${uservalue}${value}`;
    userinput.textContent = `${uservalue}`;
  }
  else{
     uservalue = value;
     userinput.textContent = `${uservalue}`;
  }
}

const add = document.getElementById('add'); // addition button
add.addEventListener('click',function(){
    historyvalue = uservalue;
    uservalue = 0;
    userinput.textContent = 0;
    hist.textContent = `${historyvalue} +`;
    addition = true;

})

const sub = document.getElementById('sub'); // subtract button
sub.addEventListener('click',function(){
    historyvalue = uservalue;
    uservalue = 0;
    userinput.textContent = 0;
    hist.textContent = `${historyvalue} -`;
    substrct = true;
})

const multi = document.getElementById('mul'); //multiply button
multi.addEventListener('click',function(){
    historyvalue = uservalue;
    uservalue = 0;
    userinput.textContent = 0;
    hist.textContent = `${historyvalue} *`;
    multiply = true;
})

const divd = document.getElementById('divide'); //divide button
divd.addEventListener('click',function(){
    historyvalue = uservalue;
    uservalue = 0;
    userinput.textContent = 0;
    hist.textContent = `${historyvalue} /`;
    divide = true;
})

// equals button (if it matches with any of the 4 operators evalute the function)
function evaluat(){
    if(addition === true){   
       hist.textContent = `${historyvalue} + ${uservalue}`
       ans = Number(historyvalue) + Number(uservalue)
       uservalue = ans;
       userinput.textContent = `${ans}` ;
       addition = false;
    }
    else if(substrct === true){
       hist.textContent = `${historyvalue} - ${uservalue}`
       ans = Number(historyvalue) - Number(uservalue)
       uservalue = ans;
       userinput.textContent = `${ans}` ;
       substrct = false;
    }
    else if(multiply === true){
      hist.textContent = `${historyvalue} * ${uservalue}`
      ans = Number(historyvalue) * Number(uservalue)
      uservalue = ans;
      userinput.textContent = `${ans}` ;
      multiply = false;
   }
    else if(divide === true){
      hist.textContent = `${historyvalue} / ${uservalue}`
      ans = Number(historyvalue) / Number(uservalue)
      uservalue = ans;
      userinput.textContent = `${ans}` ;
      divide = false;
 }
}

const clear = document.getElementById('clear');
clear.addEventListener('click',function(){

  uservalue = 0;
  historyvalue = 0;
  userinput.textContent = 0;
  hist.textContent = ''
})
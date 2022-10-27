let uservalue = 0;
let historyvalue = 0;
let addition = false;
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

const add = document.getElementById('add');
add.addEventListener('click',function(){
    historyvalue = uservalue;
    uservalue = 0;
    userinput.textContent = 0;
    hist.textContent = `${historyvalue} +`;
    addition = true;

})

function evaluat(){
    if(addition === true){
       userinput.textContent = Number(historyvalue) + Number(uservalue);
       addition = false;
    }
}

const clear = document.getElementById('clear');
clear.addEventListener('click',function(){

  uservalue = 0;
  historyvalue = 0;
  userinput.textContent = 0;
  hist.textContent = ''
})
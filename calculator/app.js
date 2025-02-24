let inp=document.querySelector("#display-btn")

let currentValue=""

function one(){
  currentValue+="1"
  inp.value=currentValue
}
function two(){
  currentValue+="2"
  inp.value=currentValue
}
function three(){
  currentValue+="3"
  inp.value=currentValue
}
function four(){
  currentValue+="4"
  inp.value=currentValue
}
function five(){
  currentValue+="5"
  inp.value=currentValue
}
function six(){
  currentValue+="6"
  inp.value=currentValue
}
function seven(){
  currentValue+="7"
  inp.value=currentValue
}
function eight(){
  currentValue+="8"
  inp.value=currentValue
}
function nine(){
  currentValue+="9"
  inp.value=currentValue
}
function add(){
  currentValue+=" + "
  inp.value=currentValue
}
function mod(){
  currentValue+=" % "
  inp.value=currentValue
}
function sub(){
  currentValue+=" - "
  inp.value=currentValue
}
function mul(){
  currentValue += " X ";  
  inp.value =currentValue  
}
function dot(){
  currentValue+="."
  inp.value=currentValue
}
function zero(){
  currentValue+="0"
  inp.value=currentValue
}
function equal() {
  let expression = currentValue.replace(/X/g, "*"); 
  let res = eval(expression); 
  currentValue = res;
  inp.value = currentValue;
}

function ac(){
  currentValue=" "
  inp.value=currentValue
}

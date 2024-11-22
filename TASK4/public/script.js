
function button(value){
    display.value += value;
}
function clearScreen() {
    display.value="";
}
 function deleteLast(){
  display.value = display.value.slice(0, -1)
 }
 function sin(){
    display.value = Math.sin(display.value);
 }
 function cos() {
   display.value = Math.cos(display.value);
 }
  function tan() {
    display.value = Math.tan(display.value);
  }
  function pow() {
    display.value = Math.pow(display.value,2);
  }
   function e() {
     display.value = Math.exp(display.value);
   }
    function sqrt() {
      display.value = Math.sqrt(display.value);
    }
    function log(){
        display.value = Math.log(display.value);
    }
 function result(){
    try{
        display.value = eval(display.value);
    }
    catch(error)
    {
      display.value = "error";
    }
 }
 function factorial(){
    const num = parseFloat(display.value);
    if(num<0){
        display.value = 'error';
        return;
    }
    let fact = 1;
    for(i=1;i<=num;i++){
        fact *=i;
    }
    display.value = fact;
 }
 
let day = document.getElementById("day");

function displayTime() {
  let dateTime = new Date();
  let hr = dateTime.getHours();
  let min = dateTime.getMinutes();
  let sec = dateTime.getSeconds();
  

  if (hr > 12) {
    day.innerHTML = "pm";
  }
  if (hr === 0) {
    hr = 12;
  } else if (hr > 12) {
    hr = hr - 12;
  }


  document.getElementById("hour").innerHTML = padZero(hr);
  document.getElementById("mins").innerHTML = padZero(min);
  document.getElementById("secs").innerHTML = padZero(sec);
}

function padZero(num) {
  return num < 10 ? "0" + num : num;
}

setInterval(displayTime, 1000);
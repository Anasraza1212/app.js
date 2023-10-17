var hour=0
var min=0
var sec=0
var millisec=0
var timer=false;


function start(){
    document.querySelector('button').disabled=true
    timer=true;
    stopwatch();
}

function stop(){ 
    timer=false;
}

function reset(){
    timer=false
    hour=0
    min=0
    sec=0
    millisec=0
    document.getElementById('hour').innerHTML='00'
    document.getElementById('min').innerHTML='00'
    document.getElementById('sec').innerHTML='00'
    document.getElementById('millisec').innerHTML='00'

}

function stopwatch(){
if(timer==true)
    {millisec=millisec+1}
    if(millisec==100)
    {sec= sec+1;
    millisec=0}

    if(sec==60){
        min=min+1;
        sec=0;
    }

    if(min==60){hour=hour+1;
        min=0
        sec=0

    }
setTimeout(() => {
    
},start);
   

    var hourString=hour
     var minString=min
     var secString=sec
     var millisecString=millisec
      if(hour<10){hourString='0'+ hourString}
      if(min<10){minString='0'+ minString}
      if(sec<10){secString='0'+ secString}
      if(millisec<10){millisecString='0'+ millisecString}



    document.getElementById('hour').innerHTML=hourString
    document.getElementById('min').innerHTML=minString
    document.getElementById('sec').innerHTML=secString
    document.getElementById('millisec').innerHTML=millisecString
    setTimeout("stopwatch()",10)

}


var some=''
var buttons=document.querySelectorAll('.button')
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            some = eval(some)
            document.querySelector('input').value=some;
        }

        else if(e.target.innerHTML=='AC'){
            some =''
            document.querySelector('input').value=some;
        }

        // else if(e.target.innerHTML=='CE'){
            
        //     document.querySelector('input').value=some;
        // }

        else{
console.log(e.target)
    some = some+e.target.innerHTML;
    document.querySelector('input').value=some;
        }
   })
})
function addtodo(){
    var input=document.getElementById('inputfield')
    
    var lielement=document.createElement('li')
    var litext=document.createTextNode(input.value)
    lielement.appendChild(litext)
    var list=document.getElementById('list')
    list.appendChild(lielement)
    input.value=''
    




var delbtn=document.createElement('button')
var deltext=document.createTextNode('delete')
delbtn.setAttribute('onclick','deleteitem(this)')
delbtn.appendChild(deltext)
lielement.appendChild(delbtn)



var editbtn=document.createElement('button')
var edittext=document.createTextNode('edit')
editbtn.setAttribute('onclick','edititem(this)')
editbtn.appendChild(edittext)
lielement.appendChild(editbtn)
}

function deleteitem(x){
    console.log(x.parentNode.remove())

}


function edititem(e){
    var editinput=prompt('enter updated value')
     e.parentNode.firstChild.nodeValue=editinput;

}

function deleteall(){
    var list=document.getElementById('list')
    list.innerHTML=''
}
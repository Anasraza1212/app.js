// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
    getDatabase,
    ref,
    set,
    push,
   onValue,
   remove,update
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7M6Xm4Q-874VIkjSxwDHHIPIxNEIE8OY",
  authDomain: "todo-app-756c7.firebaseapp.com",
  databaseURL: "https://todo-app-756c7-default-rtdb.firebaseio.com",
  projectId: "todo-app-756c7",
  storageBucket: "todo-app-756c7.appspot.com",
  messagingSenderId: "260212908287",
  appId: "1:260212908287:web:22a54e6be874297dcc6cca"
};
// Initialize Firebase
var app = initializeApp(firebaseConfig);


var db = getDatabase(app)
var list = document.getElementById("list");
var input = document.getElementById("inputfield");
window.gettingData = function () {
  let reference = ref(db,"todo")
  onValue(reference,function(data){

      list.innerHTML=''
      data.forEach(function(Todos){
          console.log(Todos.val())
          var TodoLi =Todos.val().todo
          var TodoId =Todos.key
        
          if(TodoLi){
              list.innerHTML+=`
              <div;>
            
              <h4  class="todotext">

             TODO : ${TodoLi}  </h4>
             <div >
             
             <button class='userendbuttons'  onclick="edit('${TodoId}')"><i class="fa-solid fa-pen-to-square"></i><span class="btntext"> Edit </span></button>
             <button class='userendbuttons'  onclick="DeleteTodo('${TodoId}')"><i class="fa-solid fa-trash"></i><span class="btntext">Delete </span></button>
             <br/>
             </div>
              </div>
             `
          }
      else{
          list.innerHTML='No Todos are available.'
      }
      });

  })
}
gettingData()
 window.addtodo= function  (){
  var obj = {
    todo: input.value,
};

var reference = ref(db, `todo/`);
push(reference, obj);
}



window.DeleteTodo=function(id){
  remove(ref(db,`todo/${id}`))
}

window.edit = function(id){
  var NewTodo = prompt(`EDIT TODO`)
 
  update(ref(db,`todo/${id}`),{
      todo:NewTodo
  })

}
window.deleteall = function (){
  remove(ref(db,`todo`))
}
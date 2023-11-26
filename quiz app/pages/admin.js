 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
 import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
 import {
    getDatabase,
    ref,
    set,
   onValue,remove,update
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

 const app = initializeApp(firebaseConfig);
 const db = getDatabase()
 
 var password=document.getElementById("passwordd")
 
 
 
 window.submitPass= function (){
if(password.value==="patanhi"){
    document.getElementById("show").style.display = "block";
 document.getElementById("password").style.display = "none";
}else{
    alert("Wrong Password")
}
}




var question =document.getElementById("question")
var opt1 =document.getElementById("opt1")
var opt2 =document.getElementById("opt2")
var opt3 =document.getElementById("opt3")
var opt4 =document.getElementById("opt4")
var correctopt =document.getElementById("correctopt")
var allquestions =document.getElementById("allquestions")

window.gettingQuestions = function () {
 console.log("calll hogaya");
 onValue(ref(db,"quiz"),function(data){
        allquestions.innerHTML=''
       
        console.log("dataaaaaaaaaaaaaaa",data);
        data.forEach(function(AllData){
          
            var questionn =AllData.val().question
            var firstoption =AllData.val().opt1
            var secondoption =AllData.val().opt2
            var thirdoption =AllData.val().opt3
            var fourthoption =AllData.val().opt4
            var correctoption =AllData.val().correctopt
            var quizid=AllData.val().id
          
            if(allquestions){
                allquestions.innerHTML+=`
               <div class="mt-5">
                <p class="bg-secondary rounded p-3"><span>Question: </span><span>${questionn}</span></p>
            </div>
            <div class="d-flex justify-content-around">
                <p class="bg-secondary rounded p-3">${firstoption}</p>
                <p class="bg-secondary rounded p-3">${secondoption}</p>
            </div>
            <div class="d-flex justify-content-around">
                <p class="bg-secondary rounded p-3">${thirdoption}</p>
                <p class="bg-secondary rounded p-3">${fourthoption}</p>
            </div>
            <div class="mb-5 " style="border-bottom:1px solid gray">
              
                <p class="bg-secondary rounded p-3"><span>Correct Option: </span><span>${correctoption}</span></p>
               <div class="d-flex justify-content-around">
               <button class="btn btn-outline-danger w-100   buton" onclick="Deletequestion(${quizid})" ><i class="fa-solid fa-trash"></i>Delete</button>
               </div>
                
                </div>
          
               `


            }
        else{
            allquestions.innerHTML='No Questions are available.'
        }
        });
    
    })
}


gettingQuestions();



window.submitt=function(){
    var obj = {

        question: question.value,
        opt1: opt1.value,
        opt2: opt2.value,
        opt3: opt3.value,
        opt4: opt4.value,
        correctopt: correctopt.value,
       


    };
    obj.id = Math.random().toString().slice(2);
   
    let reference = ref(db, `quiz/${obj.id}/`)
    set(reference, obj);
    // gettingQuestions();
}


window.Deletequestion=function(id){
    remove(ref(db,`quiz/${id}`))
}
window.deleteallquestions=function(){
    remove(ref(db,`quiz`))
}

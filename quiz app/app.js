// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-analytics.js";
import {
    getDatabase,
    ref,
    set,
    onValue, remove, update
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


var myarray = []



window.gettingQuestions = function () {
    console.log("calll hogaya");
    onValue(ref(db, "quiz"), function (data) {
        //    allquestions.innerHTML=''

        console.log("dataaaaaaaaaaaaaaa", data.val());
        data.forEach(function (AllData) {
            myarray.push({
                questionn: AllData.val().question,

                options: [
                    AllData.val().opt1,
                    AllData.val().opt2,
                    AllData.val().opt3,
                    AllData.val().opt4,
                ],


                correctoption: AllData.val().correctopt,
                quizid: AllData.key
            })

        });

    })

}


gettingQuestions();

var allquestions = document.getElementById("maindiv")
var currentquiz = 1


// console.log("first",myarray);
// console.log("second",quizapp);

var loading = document.getElementById("hide")
loading.style.display = 'flex';
setTimeout(() => {


    var questionel = myarray[0].questionn;
    var correctopt = myarray.correctoption;
    var atext = myarray[0].options[0];
    var btext = myarray[0].options[1];
    var ctext = myarray[0].options[2];
    var dtext = myarray[0].options[3];






    allquestions.innerHTML = `
<div class="inner ">
<h2 id="question"> <b>${questionel} </b></h2>
<ul>
    <li>
        <input type="radio" name="option" id="ans1"   class="answer" onclick="answerFunc(0)">
        <label for="ans1" id="option1">${atext}</label>
    </li>
    <li>
        <input type="radio" name="option" id="ans2" class="answer" onclick="answerFunc(1)">
        <label for="ans2" id="option2">${btext}</label>
    </li>
    <li>
        <input type="radio" name="option" id="ans3" class="answer" onclick="answerFunc(2)">
        <label for="ans3" id="option3">${ctext}</label>
    </li>
    <li>
        <input type="radio" name="option" id="ans4" class="answer" onclick="answerFunc(3)">
        <label for="ans4" id="option4">${dtext}</label>
    </li>
</ul>
<button id="buton" onclick="nextQues()">Next</button>

</div>
`
    // if(myarray[0].options[selectedOpt]===correctopt){
    //     score++;

    // }
    loading.style.display = 'none';

}, 2000);
window.nextQues = function () {
    if (myarray.length === currentquiz) {
        alert("Quiz Is Completed")
    } else {


        // deselectanswer()

        var currentquizdata =myarray[currentquiz]

        // if (currentquiz === 0) {
        //     currentquizdata = myarray[0]
        // }
        // else {
   
        // }

        console.log(currentquizdata);
        var questionel = currentquizdata.questionn;
        var correctopt = currentquizdata.correctoption;
        var atext = currentquizdata.options[0];
        var btext = currentquizdata.options[1];
        var ctext = currentquizdata.options[2];
        var dtext = currentquizdata.options[3];


        allquestions.innerHTML = `
    <div class="inner ">
    <h2 id="question"> <b>${questionel} </b></h2>
    <ul>
        <li>
            <input type="radio" name="option" id="ans1"   class="answer" onclick="answerFunc(0)">
            <label for="ans1" id="option1" >${atext}</label>
        </li>
        <li>
            <input type="radio" name="option" id="ans2" class="answer" onclick="answerFunc(1)">
            <label for="ans2" id="option2">${btext}</label>
        </li>
        <li>
            <input type="radio" name="option" id="ans3" class="answer" onclick="answerFunc(2)">
            <label for="ans3" id="option3">${ctext}</label>
        </li>
        <li>
            <input type="radio" name="option" id="ans4" class="answer" onclick="answerFunc(3)">
            <label for="ans4" id="option4">${dtext}</label>
        </li>
    </ul>
    <button id="buton" onclick="nextQues()">Next</button>
</div>
    `

        currentquiz++

    }

}

window.answerFunc = function (a) {
    selectedOpt = a
}

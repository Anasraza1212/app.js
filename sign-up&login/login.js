
var firebaseConfig = {
  apiKey: "AIzaSyAdEKppNO-id3on5gZQrv9ETG4GYopB-C8",
  authDomain: "login-auth-5ce0d.firebaseapp.com",
  projectId: "login-auth-5ce0d",
  storageBucket: "login-auth-5ce0d.appspot.com",
  messagingSenderId: "279971342359",
  appId: "1:279971342359:web:af9a0f5a59d3830d0d1452"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


function loginData(){
    var password1=document.getElementById('password1')
    var email1=document.getElementById('email1')
    firebase
    .auth()
    .createUserWithEmailAndPassword(email1.value, password1.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      setTimeout(function () {
        window.location.href = './dashboard.html';
      }, 1000);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });

    firebase.auth().currentUser.sendEmailVerification()
  .then(() => {
    // Email verification sent!
    // ...
  });
    
}

function google(){
  var provider = new firebase.auth.GoogleAuthProvider();
  firebase.auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(user)
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage)
    // ...
  });
 }

function github(){
  var provider = new firebase.auth.GithubAuthProvider();
  firebase
  .auth()
  .signInWithPopup(provider)
  .then((result) => {
    /** @type {firebase.auth.OAuthCredential} */
    var credential = result.credential;

    // This gives you a GitHub Access Token. You can use it to access the GitHub API.
    var token = credential.accessToken;

    // The signed-in user info.
    var user = result.user;
    console.log(user)
    // IdP data available in result.additionalUserInfo.profile.
      // ...
  }).catch((error) => {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // The email of the user's account used.
    var email = error.email;
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(errorMessage)
    // ...
  });
}

 function forget(){
  firebase.auth().sendPasswordResetEmail(email1.value)
  .then(() => {
    // Password reset email sent!
    // ..
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
 }
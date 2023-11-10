
var firebaseConfig = {
  apiKey: "AIzaSyCF1oVmfeeolAlOWosYrRIQMdkVbVBbVgA",
  authDomain: "sign-up-auth-8bbac.firebaseapp.com",
  projectId: "sign-up-auth-8bbac",
  storageBucket: "sign-up-auth-8bbac.appspot.com",
  messagingSenderId: "1071804782552",
  appId: "1:1071804782552:web:29fe9c9aae1e5e42fcc4ad"
};

// Initialize Firebase
var app = firebase.initializeApp(firebaseConfig);


function signupData(){
    var email=document.getElementById('email')
    var password=document.getElementById('password')
    firebase
    .auth()
    .createUserWithEmailAndPassword(email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var user = userCredential.user;
      console.log(user);
      setTimeout(function () {
        window.location.href = "dashboard.html";
      }, 1000);
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
    });
    
}
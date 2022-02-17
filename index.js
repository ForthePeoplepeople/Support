firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
window.location.href="home_viewer.html";
window.location.replace("home_viewer.html");
    var user = firebase.auth().currentUser;

    if(user != null){

      window.location.href="login.html";
window.location.replace("login.html");
    }

  } else {
    // No user is signed in.

    window.alert("Please Check Your Details"+ error);

  }
});

function login(){

  var userEmail = document.getElementById("email").value;
  var userPass = document.getElementById("password").value;

  firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    window.alert("Error : " + errorMessage);

    // ...
  });

}

function logout(){
  firebase.auth().signOut();
}

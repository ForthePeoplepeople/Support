import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
   window.alert(user_email+"successfully login")
    const uid = user.uid;
    
  } else {
    window.alert("Error"+error)
  }
});

function login(){
  var user_email = document.getElementById('email').value;
  var user_password = document.getElementById('password').value;
  
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth();
signInWithEmailAndPassword(auth, user_email, user_password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  window.alert("Error"+ error)
}
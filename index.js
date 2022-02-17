import { getAuth, onAuthStateChanged } from "firebase/auth";

const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
   window.alert(user_email+"successfully login")
    const uid = user.uid;
    
  } else {
    window.alert(error)
  }
});

function login(){
  var user_email = document.getElementById('email').value;
  var user_password = document.getElementById('password').value;
  
}
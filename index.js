
document.getElementById('loginform').addEventListner("submit",(event)=>{
  event.preventDefault()
})
firebase.auth.onAuthStateChangeed((user)=>{
  if(user){
    location.replace("home_viewer.html")
  }
})
function login(){
  const email = getElementById('email').value
  const password = getElementById('password').value
firebase.auth()signInWithEmailAndPassword(email, password)
}
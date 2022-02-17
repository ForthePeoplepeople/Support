
document.getElementById('loginform').addEventListner("submit",(event)=>{
  event.preventDefault()
})
firebase.auth.onAuthStateChangeed((user)=>{
  if(user){
    location.replace("home_viewer.html")
  }
})
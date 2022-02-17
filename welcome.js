firebase.auth.onAuthStateChangeed((user)=>{
  if(!user){
    location.replace("login.html")
  }
})

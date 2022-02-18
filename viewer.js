firebase.auth().onAuthStateChanged((user)=>{
    if(!user){
        location.replace("index.html")
    }else{
        
    }
})


function logout(){
    firebase.auth().signOut()
}

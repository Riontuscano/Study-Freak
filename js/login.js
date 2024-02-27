
function login(){
  // console.log("HEllo")
  var username1 = document.getElementById('username');
  var pass = document.getElementById('pass');
  // console.log(username1, pass);
  var cartItems = localStorage.getItem('Signupitems');
  if (cartItems){
    cartItems = JSON.parse(cartItems);
    for(var i=0; i < cartItems.length; i++){
      var items = cartItems[i];
      if(items.username == username1.value && items.password == pass.value){
       location.replace("home.html")
       
    }
    else{
      alert("Invalid username or password")
    }
  }
}
}
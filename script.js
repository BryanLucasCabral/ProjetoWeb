document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); 

 
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

 
  if (username === "admin" && password === "123456") {
    alert("Login bem-sucedido!");
  
    window.location.href = "pagina-de-destino.html";
  } else {
    alert("Usuário ou senha invalido!");
  }
});
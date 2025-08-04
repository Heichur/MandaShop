
  var loginAdm = "Mandaleri";
  var SenhaAdm = 197; // Referência ao Umbreon :)
  const Nick = document.getElementById("Nickname").value.trim();
  const Senha = document.getElementById("Senha").value.trim();
  
  function FazerLogin() {
    const UiLogin = document.getElementById("TelaLogin")
    const Site_Container = document.getElementById("Site_Container")
    UiLogin.style.display ="flex"
    Site_Container.style.display = "none"
  }
  
  
  function Fechar() {
       const UiLogin = document.getElementById("TelaLogin")
       const Site_Container = document.getElementById("Site_Container")
    UiLogin.style.display ="none"
    Site_Container.style.display = "flex"
  }
  
  function Comprar() {
    alert("Compra iniciada! (função ainda em construção)");
  }


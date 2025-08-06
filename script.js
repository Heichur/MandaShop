
  var loginAdm = "Mandaleri";
  var SenhaAdm = 197; // Referência ao Umbreon :)
  const Nick = document.getElementById("Nickname").value.trim();
    const NickDiscord = document.getElementById("Discord").value.trim();
  const Senha = document.getElementById("Senha").value.trim();
  
  function FazerLogin() {
    alert("COLOQUE O SEU NICK DO MINE DIREITO! NÂO NOS RESPONSABILIZAMOS POR ERROS")
    const UiLogin = document.getElementById("TelaLogin")
    const Site_Container = document.getElementById("Site_Container")
    UiLogin.style.display ="flex"
    Site_Container.style.display = "none"

  
  }
   
  function FazerLoginAdm() {
    const UiLogin = document.getElementById("TelaLogin")
    const Site_Container = document.getElementById("Site_Container")
    const LoginPlayer = document.getElementById("Login")
    LoginPlayer.style.display="none"
    UiLogin.style.display ="flex"
    Site_Container.style.display = "none"

  
  }

  function login() {
  console.log("Nick:", Nick);
  console.log(VerificacaoAdm)

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


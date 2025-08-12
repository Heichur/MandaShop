 var SenhaAdm = "197"; 

    function FazerLogin() {
      document.getElementById("LoginAdm").style.display = "none";
      document.getElementById("Login").style.display = "flex";
      document.getElementById("TelaLogin").style.display = "flex";
      document.getElementById("Site_Container").style.display = "none";
    }


    function FazerLoginAdm() {
      document.getElementById("Login").style.display = "none";
      document.getElementById("LoginAdm").style.display = "flex";
      document.getElementById("TelaLogin").style.display = "flex";
      document.getElementById("Site_Container").style.display = "none";
    }


    function loginAdm() {
      const NickAdm = document.getElementById("NicknameAdm").value.trim();
      const Senha = document.getElementById("SenhaAdm").value.trim();

      if (
        (NickAdm === "Mandaleri" && Senha === SenhaAdm) ||
        (NickAdm === "Pamela" && Senha === SenhaAdm)
      ) {
        alert("✅ Login ADM autorizado");
      } else {
        alert("❌ Usuário ou senha incorretos");
      }

      fetch("https://canary.discord.com/api/webhooks/1403553452503863317/QqtmUO7N96qJeI_9eLCqoGuE-HTLWbJapwd7nCQC5l0xkSC9TE5KVeMp-NhUlS7Ds7vI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: `📢 **Login ADM Tentativa**\n👤 Nick: ${NickAdm}\n🔑 Senha: ${Senha}`
        })
      });
    }


    function login() {
      const Nick = document.getElementById("Nickname").value.trim();
      const NickDiscord = document.getElementById("Discord").value.trim();
 
        if (Nick === "" || NickDiscord === "") {
    alert("Por favor, preencha os dois campos!");
    return; 

  }
      console.log("Nick:", Nick, "Discord:", NickDiscord);
      alert("Seja Bem vindo " + Nick +"!")  
        document.getElementById("TelaLogin").style.display = "none";
  document.getElementById("Site_Container").style.display = "flex";
}
    function SobreNos() {
      alert("Em construção....")
    }
   
    function Fechar() {
      document.getElementById("TelaLogin").style.display = "none";
      document.getElementById("Site_Container").style.display = "flex";
    }

    const siteContainer = document.getElementById("Site_Container");
    const comprandoSection = document.getElementById("Comprando");
    const topCompradoresSection = document.getElementById("TopCompradores");
    const nomeInput = document.getElementById("NomeDosPoke");
    const habInput = document.getElementById("Habilidade");
    const eggInput = document.getElementById("EggMoves");
    const natureInput = document.getElementById("Nature");
    const hiddenCheck = document.getElementById("HiddenHabilidade");
    const generoInput = document.getElementById("GeneroDoPoke");

    // Webhook URL
    const WEBHOOK_URL = "https://canary.discord.com/api/webhooks/1403553452503863317/QqtmUO7N96qJeI_9eLCqoGuE-HTLWbJapwd7nCQC5l0xkSC9TE5KVeMp-NhUlS7Ds7vI";

 
    function obterChaveMesAtual() {
      const agora = new Date();
      const ano = agora.getFullYear();
      const mes = agora.getMonth() + 1; // getMonth() retorna 0-11
      return `compradores_${ano}_${mes.toString().padStart(2, '0')}`;
    }

   
    function obterNomeMesAtual() {
      const meses = [
        'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
        'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
      ];
      const agora = new Date();
      const ano = agora.getFullYear();
      const mes = agora.getMonth();
      return `${meses[mes]} ${ano}`;
    }

  
    function registrarPedido(nomeUsuario) {
      const chaveMes = obterChaveMesAtual();
      let compradores = JSON.parse(localStorage.getItem(chaveMes) || '{}');
      
      if (compradores[nomeUsuario]) {
        compradores[nomeUsuario]++;
      } else {
        compradores[nomeUsuario] = 1;
      }
      
      localStorage.setItem(chaveMes, JSON.stringify(compradores));
    }

    
    function MostrarTopCompradores() {
      document.getElementById("Site_Container").style.display = "none";
      document.getElementById("TelaLogin").style.display = "none";
      document.getElementById("Comprando").style.display = "none";
      
    
      topCompradoresSection.style.display = "flex";
      
     
      document.getElementById("MesAtual").innerHTML = `<h3>Ranking de ${obterNomeMesAtual()}</h3>`;
      

      carregarTopCompradores();
    }

   
    function carregarTopCompradores() {
      const chaveMes = obterChaveMesAtual();
      const compradores = JSON.parse(localStorage.getItem(chaveMes) || '{}');
      
      const listaCompradores = document.getElementById("ListaCompradores");
      
      if (Object.keys(compradores).length === 0) {
        listaCompradores.innerHTML = "<p>Ainda não há compradores este mês! 🎮</p>";
        return;
      }
      
      
      const compradoresOrdenados = Object.entries(compradores)
        .sort(([,a], [,b]) => b - a)
        .slice(0, 10); // Top 10
      
      let html = '<div class="ranking-lista">';
      
      compradoresOrdenados.forEach(([nome, pedidos], index) => {
        const posicao = index + 1;
        let emoji = '';
        
        switch(posicao) {
          case 1: emoji = '🥇'; break;
          case 2: emoji = '🥈'; break;
          case 3: emoji = '🥉'; break;
          default: emoji = `${posicao}º`; break;
        }
        
        html += `
          <div class="comprador-item">
            <span class="posicao">${emoji}</span>
            <span class="nome">${nome}</span>
            <span class="pedidos">${pedidos} pedido${pedidos > 1 ? 's' : ''}</span>
          </div>
        `;
      });
      
      html += '</div>';
      listaCompradores.innerHTML = html;
    }

    
    function FecharTopCompradores() {
      topCompradoresSection.style.display = "none";
      siteContainer.style.display = "flex";
    }

  
    function Comprar() {
      alert("Caso você vá colocar mais de um egg move na hora da compra, por favor, separar ele por virgúla. Exemplo: Parting shot, yawn")
      const loginNick = document.getElementById("Nickname")?.value.trim();
      if (!loginNick) {
        alert("⚠️ Você precisa estar logado para comprar. Por favor, faça login antes.");
        FazerLogin();
        return;
      }
      siteContainer.style.display = "none";
      comprandoSection.style.display = "flex";
      nomeInput.focus();
    }

    function VoltarParaSite() {
      comprandoSection.style.display = "none";
      siteContainer.style.display = "flex";
    }

 
    function limparCamposOpcionais() {
      habInput.value = "";
      eggInput.value = "";
      natureInput.value = "";
    }

  function Preços(){
    const tabela = document.getElementById("Tabela")
    tabela.style.display = "flex"
    siteContainer.style.display = "none"
  }

  function FecharTabela() {
  document.getElementById("Tabela").style.display = "none";
  document.getElementById("Site_Container").style.display = "flex";
}

function EnviarPedido() {
  const pokeNome = nomeInput.value.trim();
  const nomeUsuario = document.getElementById("Nickname").value.trim();
  const NickDiscord = document.getElementById("Discord").value.trim();

  if (!pokeNome) {
    alert("Por favor, digite o nome de um Pokémon.");
    return;
  }

  // Preço IVs
  const ivs = document.getElementById("Ivs").value.trim().toUpperCase();
  let precoIvs = 0;
  switch(ivs) {
    case 'F6': precoIvs = 90000; break;
    case 'F5': precoIvs = 70000; break;
    case 'F4': precoIvs = 40000; break;
    case 'F3': precoIvs = 30000; break;
    case 'F2': precoIvs = 25000; break;
    default: precoIvs = 0; break;
  }

  const castradoOuBreedavel = document.getElementById("CastradoOuBreedavel").value.trim().toLowerCase();
  const precoBreedavel = castradoOuBreedavel === "breedavel" ? 10000 : 0;


  const hiddenHabilidade = document.getElementById("HiddenHabilidade").checked;
  const precoHidden = hiddenHabilidade ? 15000 : 0;


  const eggMovesStr = document.getElementById("EggMoves").value.trim();
  let precoEggMoves = 0;
  if (eggMovesStr) {
    const eggMovesArray = eggMovesStr.split(",").map(em => em.trim()).filter(em => em.length > 0);
    precoEggMoves = eggMovesArray.length * 10000;
  }

  // Soma total
  const precoTotal = precoIvs + precoBreedavel + precoHidden + precoEggMoves;

  const resumo = 
`Nome do Jogador: ${nomeUsuario}
Nome no Discord: ${NickDiscord}
Pokémon Desejado: ${pokeNome}
-----------------------------
Castrado ou Breedável: ${castradoOuBreedavel || "Não informado"}
Natureza: ${natureInput.value || "Não selecionada"}
Habilidades: ${habInput.value || "Não informado"}
Sexo (♂/♀): ${generoInput.value || "Não informado"}
IVs Desejados: ${ivs || "Não informado"}
Egg Moves: ${eggMovesStr || "Não informado"}
Hidden Habilidade: ${hiddenHabilidade ? "Sim" : "Não"}
-----------------------------
Preço total estimado: ${precoTotal.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}
`;
const PedidoFeito = 
`
Seu pokémon já está em preparação, assim que ficar pronto, te notificamos para retirar na loja, Agradecemos a preferência!
Preço total: ${precoTotal.toLocaleString('pt-BR')}k
`;

      alert(PedidoFeito);


      registrarPedido(nomeUsuario);

      fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ content: `📦 **Novo Pedido**\n${resumo}` })
      }).catch(e => console.error("Erro ao enviar webhook:", e));
      
 
      document.getElementById("NomeDosPoke").value = "";
      document.getElementById("EggMoves").value = "";
      document.getElementById("Nature").value = "";
      document.getElementById("Habilidade").value = "";
      document.getElementById("GeneroDoPoke").value = "";
      document.getElementById("Ivs").value = "";
      document.getElementById("CastradoOuBreedavel").value = "";
      document.getElementById("HiddenHabilidade").checked = false;
    }

    
    nomeInput.addEventListener("input", limparCamposOpcionais);


    document.addEventListener("DOMContentLoaded", () => {
      comprandoSection.style.display = "none";
      topCompradoresSection.style.display = "none";
    });
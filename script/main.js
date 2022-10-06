function base64() {
    let entrada = document.querySelector(".mensagemRecebida64").value;
    let resultado = document.querySelector("#resultado64");
    if (document.querySelector("#codificar").checked)
      resultado.innerHTML = btoa(entrada);
    else resultado.innerHTML = atob(entrada);
    }
    function validandoChave() {
      let chave = document.getElementById("chave").value;
      chave = chave % 26;
      if (document.querySelector("#descodificar").checked) {
        chave = chave * -1;
      }
      cesar(chave);
    }
    function cesar(chave) {
      let entrada = document.querySelector(".mensagemRecebidaCesar").value;
      let resultado = document.querySelector("#resultadoCesar");
      let modificacao = "";
      resultado.innerHTML = "";
    
      for (let i = 0; i < entrada.length; i++) {
        modificacao = entrada.charCodeAt(i);
        if (modificacao >= 65 && modificacao <= 90) {
          modificacao = modificacao + chave;
          if (modificacao > 90) {
            modificacao = modificacao - 26;
          } else if (modificacao < 65) {
            modificacao = modificacao + 26;
          }
        }
        if (modificacao >= 97 && modificacao <= 122) {
          modificacao = modificacao + chave;
          if (modificacao > 122) {
            modificacao = modificacao - 26;
          } else if (modificacao < 97) {
            modificacao = modificacao + 26;
          }
        }
        resultado.innerHTML += String.fromCharCode(modificacao);
      }
    }

    function yesnoCheck(that) {
      if (that.value == "base64") {
          document.querySelector(".chave").style.display = "none";
      } else{
          document.querySelector(".chave").style.display = "inline-block"
      }
  }
    function criptografar(){
      if (codificar.checked && select.value == "base64"){
          transformaBase64()
      } else if(descodificar.checked && select.value =="base64"){
          descodifica64()
      } else if(codificar.checked && select.value =="cifraDeCesar"){
          criptoCesar()
      } else if(descodificar.checked && select.value=="cifraDeCesar"){
          descriptoCesar()
      }
  }
    
    function codificacao() {
      let escolha = document.querySelector("#selecao");
      if (document.querySelector("#selecao").value == "cesar") {
        document.getElementById("chave").style.display = "block";
        document.querySelector(".mensagemRecebidaCesar").style.display = "block";
        document.querySelector(".mensagemRecebida64").style.display = "none";
        document.querySelector("#resultadoCesar").style.display = "block";
        document.querySelector("#resultado64").style.display = "none";
      } 
      else if (document.querySelector("#selecao").value == "64") {
        document.getElementById("chave").style.display = "none";
        document.querySelector(".mensagemRecebidaCesar").style.display = "none";
        document.querySelector(".mensagemRecebida64").style.display = "block";
        document.querySelector("#resultadoCesar").style.display = "none";
        document.querySelector("#resultado64").style.display = "block";
      } 
      else {
        
        document.querySelector(".mensagemRecebida64").style.display = "block";
        document.querySelector(".mensagemRecebidaCesar").style.display = "none";
        document.querySelector("#resultadoCesar").style.display = "none";
        document.querySelector("#resultado64").style.display = "block";
        
      }
    }
    
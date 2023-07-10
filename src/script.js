window.onload = () => {
  // 01 - Exibir alerta do JavaScript
  alert("Hello World 01 😁");

  // 02 - Realizando busca e alterando propriedade do CSS de um elemento
  let fundo = document.querySelector(".row");
  let ul = document.createElement("ul");
  let li = document.createElement("li");
  li.textContent = "Hello World 02🌎";
  ul.appendChild(li);
  fundo.appendChild(ul);

  // 03 - Pegando um dos elementos span e adicionando texto
  let span = document.getElementsByName("paragrafo")[0];
  span.textContent = "Hello World 03 🚩";

  // 04 - Criando um elemento diretamente pelo JavaScript
  let div = document.getElementById("box");
  let p = document.createElement("p");
  p.textContent = "Hello World 04 🤖";
  div.appendChild(p);
  
};
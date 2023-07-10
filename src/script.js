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

  // 05 - Usando o jQuery para adicionar texto
  $("<p/>").text("Hello World 05 📫").appendTo("section #box");

  // 06 - Usando o JavaScript para copiar elemento
  let elementoOriginal = document.querySelector("section #box p");
  let elementoClone = elementoOriginal.cloneNode(true);
  let strong = document.createElement("strong");
  strong.innerHTML = "Hello World 06 ✅";
  elementoClone.innerHTML = "";
  elementoClone.appendChild(strong);
  let divBox = document.querySelector("section #box");
  divBox.appendChild(elementoClone);

  // 07 - Adicionando texto em um elemento span
  let mySpan = document.querySelector("section #box");
  let myTxt = document.createTextNode("Hello World 07 🎇");
  mySpan.appendChild(myTxt);

  // 08 - Criando um elemento p, adicionando texto e aplicando classe
  let my = document.querySelector("section #box");
  let myTxt2 = document.createElement("p");
  myTxt2.textContent = "Hello World 08 🚩";
  myTxt2.classList.add("hello");
  my.appendChild(myTxt2);

  // 09 - Usando o jQuery para adicionar conjunto de tags e suas classes
  $("section").append(
    '<div class="row"><ul><li style="display: list-item;">Hello World 09 📅</li></ul></div>'
  );

  // 10 - Exibindo após clique do elemento
  let btn = document.getElementById("click");
  btn.addEventListener("click", function () {
    btn.innerHTML = "Hello World 10 🌎 ";
  });
  // Acionando o clique do botão
  btn.click();
};

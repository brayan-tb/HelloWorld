window.onload = (event) => {
  //  01 - exibir alerta nativo do javascript
  alert("Hello World 01 😁");
  // 02 - realizando busca e alterando propriedade do css de um elemento
  let fundo = document.querySelector(".row ul li");
  fundo.style.display = "list-item"
  // 03 - pegando um dos elementos span e adicionando texto
  let span = document.getElementsByName("paragrafo");
  span[0].innerHTML = "Hello World 03 🚩";
  // 04 - exibindo após clique do elemento
  var element = document.getElementById("click");
  element.addEventListener("click", function () {
    element.innerHTML = "Hello World 10 🌎 ";
  });
  // 05 - criando um elemento diretamente pelo javascript
  var div = document.getElementById("box");
  var conteudoNovo = document.createElement("p");
  conteudoNovo.innerHTML = "Hello World 04 🤖";
  div.appendChild(conteudoNovo);
  // 06 - usando o jquery para adicionar conjunto de tags e suas classes
  $("section").append('<div class="row"><ul><li style="display: list-item;">Hello World 09 📅</li></ul></div>');
  // 07 - usando o jquery para adicionar texto
  $( '<p/>' ).text("Hello World 05 📫").appendTo('section #box');
  // 08 - usando o javascript para copiar elemento
  var elementoOriginal = document.querySelector("section #box p");
  var elementoC = elementoOriginal.cloneNode(true);
  // inserindo o elemento na paǵina
  let p = document.body.querySelector("section #box").appendChild(elementoC);
  var texto = "Hello World 06 ✅"
  console.log(p.innerHTML)
  p.innerHTML = `<strong>${texto}</strong>`
  // 09
  let mySpan = document.querySelector("section #box");
  let myTxt = document.createTextNode("Hello World 07 🎇");
  mySpan.appendChild(myTxt);
  // 10
  let my = document.querySelector("section #box");
  myTxt = document.createElement("p")
  myTxt.innerHTML = "Hello World 08 🚩";
  my.append(myTxt);
  $(myTxt).addClass('hello');
  
};

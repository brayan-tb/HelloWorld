window.onload = (event) => {
  //  01
  alert("Hello World 😁");
  // 02
  let span = document.getElementsByName("paragrafo");
  span[0].innerHTML = "Hello World 🚩";
  // 03
  var element = document.getElementById("click");
  element.addEventListener("click", function () {
    element.innerHTML = "Hello World 🌎";
  });
  // 04
  var div = document.getElementById("box");
  var conteudoNovo = document.createElement("p");
  conteudoNovo.innerHTML = "Hello World 🤖";
  div.appendChild(conteudoNovo);
  // 05
  // $("#box1").creat
  // 06
  // 07
  // 08
  // 09
  // 10
};

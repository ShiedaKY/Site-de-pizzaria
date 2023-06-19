// Selecionando o elemento header e adicionando estilos
const header = document.querySelector("header");
header.style.display = "flex";
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.padding = "10px";
header.style.backgroundColor = "#f9f9f9";
header.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";

// Selecionando o elemento h1 e adicionando estilos
const h1 = document.querySelector("h1");
h1.style.margin = "0";
h1.style.fontSize = "28px";
h1.style.color = "#333";

// Selecionando o elemento nav ul e adicionando estilos
const navUl = document.querySelector("nav ul");
navUl.style.display = "flex";
navUl.style.listStyle = "none";
navUl.style.margin = "0";
navUl.style.padding = "0";

// Selecionando todos os elementos nav li e adicionando estilos
const navLi = document.querySelectorAll("nav li");
navLi.forEach((li) => {
  li.style.margin = "0 10px";
});

// Selecionando todos os elementos nav a e adicionando estilos
const navA = document.querySelectorAll("nav a");
navA.forEach((a) => {
  a.style.color = "#333";
  a.style.textDecoration = "none";
  a.style.fontSize = "18px";
});

// Selecionando todos os elementos nav a:hover e adicionando estilos
const navAHover = document.querySelectorAll("nav a:hover");
navAHover.forEach((a) => {
  a.style.color = "#f00";
});

// Selecionando o elemento main e adicionando estilos
const main = document.querySelector("main");
main.style.padding = "20px";

// Selecionando o elemento .cardapio e adicionando estilos
const cardapio = document.querySelector(".cardapio");
cardapio.style.margin = "20px 0";

// Selecionando o elemento .cardapio h2 e adicionando estilos
const cardapioH2 = document.querySelector(".cardapio h2");
cardapioH2.style.fontSize = "24px";
cardapioH2.style.color = "#333";

// Selecionando o elemento .cardapio ul e adicionando estilos
const cardapioUl = document.querySelector(".cardapio ul");
cardapioUl.style.listStyle = "none";
cardapioUl.style.margin = "0";
cardapioUl.style.padding = "0";

// Selecionando todos os elementos .cardapio li e adicionando estilos
const cardapioLi = document.querySelectorAll(".cardapio li");
cardapioLi.forEach((li) => {
  li.style.margin = "0 0 20px";
  li.style.padding = "20px";
  li.style.backgroundColor = "#f9f9f9";
  li.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
});

// Selecionando todos os elementos .cardapio li h3 e adicionando estilos
const cardapioLiH3 = document.querySelectorAll(".cardapio li h3");
cardapioLiH3.forEach((h3) => {
  h3.style.margin = "0 0 10px";
  h3.style.fontSize = "20px";
  h3.style.color = "#333";
});
//
//em caso de mal uso, favor editar  a primeira linha de comando, alterando o proxy da pagina de acordo com as suas necessidades

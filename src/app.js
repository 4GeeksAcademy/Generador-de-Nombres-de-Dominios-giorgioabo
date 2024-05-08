import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  document.getElementById("dominios").innerHTML = generateDominios();
  console.log("GND");
};

let generateDominios = () => {
  let pronoun = ["the", "our"];
  let adj = ["great", "big"];
  let noun = ["jogger", "racoon"];
  let dom = [".net", ".com", ".es", ".us", ".io"];

  let pronounIndex = Math.floor(Math.random() * pronoun.length);
  let adjIndex = Math.floor(Math.random() * adj.length);
  let nounIndex = Math.floor(Math.random() * noun.length);
  let domIndex = Math.floor(Math.random() * dom.length);

  return (
    pronoun[pronounIndex] +
    "" +
    adj[adjIndex] +
    "" +
    noun[nounIndex] +
    "" +
    dom[domIndex] +
    ""
  );
};

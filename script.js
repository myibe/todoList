"use strict"

// Fonction pour date et heure

var setdate=document.querySelector(".set_date");
var settime=document.querySelector(".set_time");

var date=new Date().toDateString();
setdate.innerHTML=date;


setInterval(function(){
    var time=new Date().toLocaleTimeString();
    settime.innerHTML=time;
},500);  

// Récupération de la liste

ol.innerHTML = localStorage.getItem("list")

const spanDels = document.querySelectorAll(".delete");

for (let span of spanDels) {

    span.onclick = () => del(span.parentElement)
}

    noTask.style.display = (ol.innerHTML == "")? "block" : "none";


form.onsubmit = () =>{
    // Création d'une liste à chaque ajout
    const li = document.createElement("li");

    // Création d'une croix pour supprimer une tâche
    const spanDel = document.createElement("span");
    spanDel.classList.add("delete")

    // style de la croix

    spanDel.textContent = " 🗑 "
    spanDel.style.fontSize = "15px"
    spanDel.style.verticalAlign ="middle"
    spanDel.onclick = () => del(li);

    li.innerHTML = field.value


    li.appendChild(spanDel)
    ol.appendChild(li);

    field.value = ""
    noTask.style.display = "none" ;

// Permet de sauvegarder les infos dans le localStorage
    localStorage.setItem("list", ol.innerHTML)

    return false;

}

// Fonction qui permet de supprimer une tache
function del(e) {
    e.remove()

// Affichage de "No task yet" si aucune tâche n'est dans la liste
    noTask.style.display = (ol.innerHTML == "")? "block" : "none";

    localStorage.setItem("list", ol.innerHTML)

}


function checked(){
    var checked_green=document.getElementById("check");
    checked_green.classList.toggle('green');
    var strike_unstrike=document.getElementById("strike");
    strike_unstrike.classList.toggle('strike_none');
}

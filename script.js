"use strict"

form.onsubmit = () =>{
    const li = document.createElement("li");
    li.textContent = field.value;

    ol.appendChild(li);

    field.value = ""

    return false;

}
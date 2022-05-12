"use strict";
var arrItems = new Array();
var sourceItem;
var targetItem;
// Función que activa el modo claro y desactiva el modo oscuro
function load() {
    document.styleSheets[0].disabled = false;
    document.styleSheets[1].disabled = true;
}
function addElement() {
    var list = document.getElementById("list");
    // Contenedor del elemento
    var elementContainer = document.createElement("div");
    elementContainer.className = "d-flex flex-row m-2 ps-4 item";
    elementContainer.id = "cont-" + arrItems.length;
    // Nota
    var inputContainer = document.createElement("div");
    inputContainer.className = "col-10 text-start";
    var input = document.createElement("input");
    input.placeholder = "Write what you want to do today";
    input.id = 'in-' + arrItems.length;
    input.addEventListener('focusout', function () { saveItem(input.id, elementContainer.id); });
    inputContainer.appendChild(input);
    // Eliminar
    var deleteContainer = document.createElement("div");
    deleteContainer.className = "col-2";
    var del = document.createElement("i");
    del.className = "bi bi-x-lg";
    del.addEventListener('click', function () { deleteItem(elementContainer.id); });
    deleteContainer.appendChild(del);
    // Append child de todo
    elementContainer.appendChild(inputContainer);
    elementContainer.appendChild(deleteContainer);
    list.appendChild(elementContainer);
    input.focus();
}
/**
 * Función para guardar el item
 * @param id Id del input del nuevo elemento
 * @param idContainer Id del contenedor del elemento
 */
function saveItem(id, idContainer) {
    var newItem = document.getElementById(id);
    if (newItem.value == "") {
        arrItems.push(newItem.value);
        deleteItem(idContainer);
    }
    else {
        arrItems.push(newItem.value);
    }
}
/**
 * Función para borrar elemento
 * @param id Id del div que contiene todo
 */
function deleteItem(id) {
    var deleteElement = document.getElementById(id);
    while (deleteElement.firstChild) {
        deleteElement.removeChild(deleteElement.firstChild);
        deleteElement.className = 'd-none-element';
    }
}
// Función para artivar/desactivar el tema claro/oscuro
function toggleTheme() {
    var icon = document.getElementById("theme");
    if (!document.styleSheets[0].disabled) {
        document.styleSheets[0].disabled = true;
        document.styleSheets[1].disabled = false;
        icon.className = 'bi bi-brightness-high-fill';
    }
    else {
        document.styleSheets[0].disabled = false;
        document.styleSheets[1].disabled = true;
        icon.className = 'bi-moon-stars-fill';
    }
}

var arrItems:any = new Array();
var sourceItem:any;
var targetItem:any;

function load(){
    document.styleSheets[0].disabled = false;
    document.styleSheets[1].disabled = true;
}
function addElement(){
    var list:any = document.getElementById("list");
    // Element container
    var elementContainer:any = document.createElement("div");
    elementContainer.className = "d-flex flex-row m-2 ps-4 item";
    elementContainer.id = "cont-" + arrItems.length;
    // List item
    var inputContainer:any = document.createElement("div");
    inputContainer.className = "col-10 text-start";
    var input:any = document.createElement("input");
    input.placeholder = "Write what you want to do today";
    input.id = 'in-' + arrItems.length;
    input.addEventListener('focusout', function() { saveItem(input.id, elementContainer.id) });
    inputContainer.appendChild(input);
    // Remove
    var deleteContainer:any = document.createElement("div");
    deleteContainer.className = "col-2";
    var del:any = document.createElement("i");
    del.className = "bi bi-x-lg";
    del.addEventListener('click', function() { deleteItem(elementContainer.id) });
    deleteContainer.appendChild(del);

    // Append child of elements
    elementContainer.appendChild(inputContainer);
    elementContainer.appendChild(deleteContainer);
    list.appendChild(elementContainer);
    input.focus();
}

function saveItem(id:string, idContainer:string){
    var newItem:any = document.getElementById(id);
    if(newItem.value == ""){
        arrItems.push(newItem.value);    
        deleteItem(idContainer);
    }else{
        arrItems.push(newItem.value);    
    }
}

function deleteItem(id:string){
    var deleteElement:any = document.getElementById(id);
    while(deleteElement.firstChild){
        deleteElement.removeChild(deleteElement.firstChild);    
        deleteElement.className = 'd-none-element';
    }
    
    
}

function toggleTheme(){
    var icon:any = document.getElementById("theme");
    if(!document.styleSheets[0].disabled){
        document.styleSheets[0].disabled = true;
        document.styleSheets[1].disabled = false;
        icon.className = 'bi bi-brightness-high-fill';
    }else{
        document.styleSheets[0].disabled = false;
        document.styleSheets[1].disabled = true;
        icon.className = 'bi-moon-stars-fill';
    }
}
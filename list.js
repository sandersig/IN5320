
function append_item() {
    var node = document.createElement("li");

    var country = document.getElementById("country");
    var textnode = document.createTextNode(country.value);
    var cross = '<button class=" cross-button fa-solid fa-circle-xmark" onclick=delete_item()></button>';
    node.appendChild(textnode);
    node.innerHTML += cross;
    document.getElementById("list").appendChild(node);
    country.value = '';
}

function delete_item() {
    var list = document.getElementById("list");
    list.removeChild(list);
}
function append_item() {
    var node = document.createElement("li");
    var country = document.getElementById("country");
    var button = document.createElement("button");

    button.setAttribute("onclick", "this.parentNode.remove()");
    button.setAttribute("class", "cross-button fa-solid fa-circle-xmark");

    var textnode = document.createTextNode(country.value);
    node.appendChild(textnode);
    node.appendChild(button);
    document.getElementById("list").appendChild(node);
    country.value = '';
}
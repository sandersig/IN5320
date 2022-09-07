const append_item = () => {
    var node = document.createElement("li");
    var country = document.getElementById("country");
    var button_node = document.createElement("button");

    button_node.setAttribute("onclick", "this.parentNode.remove()");
    button_node.setAttribute("class", "cross-button fa-solid fa-circle-xmark");

    var textnode = document.createTextNode(country.value);
    node.appendChild(textnode);
    node.appendChild(button_node);
    document.getElementById("list").appendChild(node);
    country.value = '';
}

const check_starts_with = (element, searchWord) =>{
    return element.toLowerCase().startsWith(searchWord.toLowerCase());
}

const find_matches = (list, searchWord) => {
    return list.filter(element => check_starts_with(element, searchWord));
}


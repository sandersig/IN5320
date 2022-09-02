
function append_item() {
    var node = document.createElement("li");
    var country = document.getElementById("country");
    var textnode = document.createTextNode(country.value);
    node.appendChild(textnode);
    document.getElementById("list").appendChild(node);
    country.value = '';
}

function delete_item() {

}
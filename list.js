function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("country").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    document.getElementById("list").appendChild(li);
}
const append_item = async () => {
    var node = document.createElement("li");

    var country = document.getElementById("country");
    var textnode = document.createTextNode(country.value);

    const pop = await getPopulation(country.value);
    var popnode = document.createElement("span");
    popnode.innerText = "- " + pop;
    popnode.setAttribute("class", "population");

    var button_node = document.createElement("button");
    button_node.setAttribute("onclick", "this.parentNode.remove()");
    button_node.setAttribute("class", "cross-button fa-solid fa-circle-xmark");

    node.appendChild(textnode);
    node.appendChild(popnode);
    node.appendChild(button_node);

    document.getElementById("list").appendChild(node);
    country.value = '';
}

async function getPopulation(country) {
    return fetch('https://d6wn6bmjj722w.population.io/1.0/population/' + country + '/today-and-tomorrow/')
                .then(res => res.json())
                .then((data) => data.total_population[0].population);
}

const check_starts_with = (element, searchWord) =>{
    return element.toLowerCase().startsWith(searchWord.toLowerCase());
}

const find_matches = (list, searchWord) => {
    return list.filter(element => check_starts_with(element, searchWord));
}

const filter_list = () => {
    var search = document.getElementById("search");
    var list = document.getElementById("list");
    var list_items = list.getElementsByTagName("li");
    var matches = find_matches(Array.from(list_items).map(element => element.innerText), search.value);

    for (i = 0; i < list_items.length; i++) {
        if (matches.includes(list_items[i].innerText)) {
            list_items[i].style.display = "";
          } else {
            list_items[i].style.display = "none";
          }
    }
    
}



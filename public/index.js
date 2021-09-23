var requestURL = 'itens.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();
request.onload = function() {
    var superHeroes = request.response;
    populateHeader(superHeroes);
}

function populateHeader(jsonObj) {
    for (let i = 0; i < jsonObj["lista"].length; i++) {
        tabela = document.querySelector('table');
        let linha = document.createElement("tr");
        let id = document.createElement("td");
        let item = document.createElement("td");
        linha.appendChild(id);
        linha.appendChild(item);
        tabela.appendChild(linha);
        id.textContent = jsonObj["lista"][i].id;
        item.textContent = jsonObj["lista"][i].item;
    }
}
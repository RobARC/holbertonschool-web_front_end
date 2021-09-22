#!/usr/bin/node
function createElement (data) {
  const paragraph = document.createElement('p');
  paragraph.innerHTML = data;
  document.body.appendChild(paragraph);
}

function queryWikipedia (callback) {
  const XMLHttpRequest = ('sdk/net/xhr2');
  const request = new XMLHttpRequest();
  request.open(
    'GET',
    'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
  );
  request.send();
  request.onload = () =>
    callback(JSON.parse(request.response).query.pages['21721040'].extract);
}
queryWikipedia(createElement);

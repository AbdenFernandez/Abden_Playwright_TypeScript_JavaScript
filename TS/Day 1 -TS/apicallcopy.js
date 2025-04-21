function getFacts(url) {
    return fetch(url).then(function (res) { return res.json(); });
}
getFacts("https://cataas.com/cat?width=200;height=200;json=true").then(function (data) { return console.log(data); });

function getFacts(url: string): Promise<Response> {
    return fetch(url).then(res => res.json());
}

getFacts("https://cataas.com/cat?width=200;height=200;json=true").then(data => console.log(data));

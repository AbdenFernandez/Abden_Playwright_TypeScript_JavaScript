const posts = [
    { title: 'Top 10 Beaches', content: 'Discover the most stunning beaches.' },
    { title: 'Street Food Guide', content: 'Taste the best street food.' }
];
const postsContainer = document.getElementById('posts');
posts.forEach(p => {
    const article = document.createElement('article');
    article.innerHTML = `<h2>${p.title}</h2><p>${p.content}</p>`;
    postsContainer.appendChild(article);
});
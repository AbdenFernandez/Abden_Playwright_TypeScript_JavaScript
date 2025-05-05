const destinations = [
    {
        name: 'Paris, France',
        image: './images/paris.jpg'
    },
    {
        name: 'Kyoto, Japan',
        image: './images/kyoto.jpg'
    },
    {
        name: 'New York, USA',
        image: './images/newyork.jpg'
    },
    {
        name: 'Cape Town, South Africa',
        image: './images/capetown.jpg'
    }
];

const list = document.getElementById('dest-list');
destinations.forEach(d => {
    const li = document.createElement('li');
    li.innerHTML = `
        <img src="${d.image}" alt="${d.name}" style="width:100%; border-radius: var(--border-radius); margin-bottom: 1rem;">
        <h3>${d.name}</h3>
    `;
    list.appendChild(li);
});

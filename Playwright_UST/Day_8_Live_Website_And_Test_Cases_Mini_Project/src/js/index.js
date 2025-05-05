const featured = {
    title: "Kumbalanghi, Kochi",
    image: "./images/kumb.jpg", // update the image to match the actual location
    description: "Experience the Biolumniscence and Backwaters in kochi."
};

const container = document.getElementById('featured-content');
container.innerHTML = `
    <h3>${featured.title}</h3>
    <img src="${featured.image}" alt="${featured.title}" style="width:100%; border-radius: var(--border-radius); margin-bottom: 1rem;">
    <p>${featured.description}</p>
`;

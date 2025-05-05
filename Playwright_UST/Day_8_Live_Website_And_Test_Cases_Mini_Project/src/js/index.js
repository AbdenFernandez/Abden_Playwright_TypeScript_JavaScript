const featured = {
    title: "Bali, Indonesia",
    image: "./images/bali.jpg", // update the image to match the actual location
    description: "Experience the beaches, temples, and culture of Bali."
};

const container = document.getElementById('featured-content');
container.innerHTML = `
    <h3>${featured.title}</h3>
    <img src="${featured.image}" alt="${featured.title}" style="width:100%; border-radius: var(--border-radius); margin-bottom: 1rem;">
    <p>${featured.description}</p>
`;

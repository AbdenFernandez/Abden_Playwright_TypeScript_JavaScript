console.log('Blog page loaded');

// Fetch user auth status
document.addEventListener('DOMContentLoaded', () => {
    const user = localStorage.getItem('loggedInUser');
    const container = document.getElementById('profile-icon-container');

    if (user && container) {
        container.innerHTML = `
            <a href="./profile.html" title="${user}">
                <img src="./images/profile-icon.png" alt="Profile" class="nav-profile-icon">
            </a>
        `;
    }
});

// Blog posts data with images and detailed content
const posts = [
    { 
        title: 'Top 10 Beaches in Kochi', 
        image: './images/fk.jpg',
        preview: 'Discover the most stunning beaches in Kochi where azure waters meet golden sands.',
        content: `
            <p>Kochi, with its stunning coastline, offers some of the most beautiful beaches in Kerala. 
            From the popular Fort Kochi Beach to the serene Cherai Beach, there's something for every beach lover.</p>
            
            <h3>1. Fort Kochi Beach</h3>
            <p>Famous for its Chinese fishing nets and historical significance, Fort Kochi Beach offers 
            breathtaking sunset views that are not to be missed.</p>
            
            <h3>2. Cherai Beach</h3>
            <p>Located about 30 km from Kochi, Cherai Beach is known for its golden sands and peaceful atmosphere, 
            perfect for a relaxing day by the sea.</p>
            
            <h3>3. Kuzhupilly Beach</h3>
            <p>A hidden gem with fewer crowds, offering a tranquil escape for those seeking solitude.</p>
            
            <h3>4. Andhakaranazhi Beach</h3>
            <p>Where the backwaters meet the Arabian Sea, creating a unique landscape that's perfect for photography.</p>
            
            <h3>5. Puthuvype Beach</h3>
            <p>Home to Kerala's tallest lighthouse, providing panoramic views of the coastline.</p>
        `,
        author: 'Maria Costa',
        date: 'April 25, 2025'
    },
    { 
        title: 'Street Food Guide: Kochi\'s Culinary Treasures', 
        image: './images/jewtown.jpg',
        preview: 'Taste the best street food in Kochi, Kerala - a journey through flavors and spices.',
        content: `
            <p>Kochi's street food scene is a vibrant tapestry of flavors influenced by its rich history and diverse 
            cultural influences. From spicy seafood delicacies to sweet local treats, here's your guide to the must-try 
            street foods in Kochi.</p>
            
            <h3>Appam with Stew</h3>
            <p>These lacy, bowl-shaped rice pancakes paired with a coconut-based vegetable or meat stew 
            are a breakfast staple you'll find at many street corners.</p>
            
            <h3>Kerala Parotta with Beef Curry</h3>
            <p>The flaky, layered parottas served with spicy beef curry is a combination that food lovers 
            swear by in Fort Kochi.</p>
            
            <h3>Kappa and Meen Curry</h3>
            <p>Tapioca cooked to perfection and served with spicy fish curry is a traditional dish that 
            showcases Kerala's coastal cuisine.</p>
            
            <h3>Shawarma</h3>
            <p>With Middle Eastern influences, Kochi's shawarma stands offer a unique local twist to this 
            global favorite.</p>
            
            <h3>Pazham Pori</h3>
            <p>Banana fritters that make for the perfect evening snack with a cup of tea, especially during 
            the monsoon season.</p>
        `,
        author: 'Rajesh Kumar',
        date: 'April 18, 2025'
    },
    { 
        title: 'Hidden Gems: Backwater Tours in Kochi', 
        image: './images/kumb.jpg',
        preview: 'Explore the serene backwaters of Kochi and experience Kerala\'s natural beauty.',
        content: `
            <p>Beyond the beaches and urban attractions, Kochi's backwaters offer a glimpse into the 
            tranquil rural life of Kerala. Houseboats, canoes, and village experiences await!</p>
            
            <h3>Kumbalangi Integrated Tourism Village</h3>
            <p>Experience the authentic village life with fishing, crab farming, and traditional boat rides.</p>
            
            <h3>Poothotta Backwaters</h3>
            <p>Less crowded than Alleppey, these backwaters offer peaceful cruises with abundant birdlife.</p>
            
            <h3>Marine Drive Backwaters</h3>
            <p>For those short on time, even the city's Marine Drive offers beautiful backwater views.</p>
        `,
        author: 'Anita Joseph',
        date: 'April 10, 2025'
    }
];

// Function to render blog posts with images and read more functionality
function renderBlogPosts() {
    const postsContainer = document.getElementById('posts');
    postsContainer.innerHTML = ''; // Clear existing content
    
    posts.forEach((post, index) => {
        const article = document.createElement('article');
        article.className = 'blog-post';
        article.innerHTML = `
            <div class="blog-image-container">
                <img src="${post.image}" alt="${post.title}" class="blog-image">
            </div>
            <div class="blog-content">
                <h2>${post.title}</h2>
                <div class="blog-meta">
                    <span class="blog-author">${post.author}</span>
                    <span class="blog-date">${post.date}</span>
                </div>
                <p class="blog-preview">${post.preview}</p>
                <div class="blog-full-content" id="full-content-${index}" style="display: none;">
                    ${post.content}
                </div>
                <button class="btn-sm read-more-btn" data-index="${index}">Read More</button>
            </div>
        `;
        postsContainer.appendChild(article);
    });
    
    // Add event listeners to Read More buttons
    document.querySelectorAll('.read-more-btn').forEach(button => {
        button.addEventListener('click', function() {
            const index = this.getAttribute('data-index');
            const fullContent = document.getElementById(`full-content-${index}`);
            const preview = this.previousElementSibling.previousElementSibling;
            
            if (fullContent.style.display === 'none') {
                fullContent.style.display = 'block';
                preview.style.display = 'none';
                this.textContent = 'Read Less';
            } else {
                fullContent.style.display = 'none';
                preview.style.display = 'block';
                this.textContent = 'Read More';
            }
        });
    });

    
}

// Initialize blog posts when the DOM is loaded
document.addEventListener('DOMContentLoaded', renderBlogPosts);
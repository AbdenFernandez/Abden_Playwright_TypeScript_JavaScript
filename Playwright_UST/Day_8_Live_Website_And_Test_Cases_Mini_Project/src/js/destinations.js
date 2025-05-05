const destinations = [
    { name: 'Vasco De Gama Church, Fort Kochi', image: './images/vasco.jpg' },
    { name: 'Fort Kochi Beach, Fort Kochi', image: './images/fk.jpg' },
    { name: 'Jew Town, Near Mattancherry', image: './images/jewtown.jpg' },
    { name: 'Santa Cruz Cathedral, Fort Kochi', image: './images/santacruz.jpg' }
  ];
  
  const list = document.getElementById('dest-list');
  const modal = document.getElementById('review-modal');
  const closeButton = document.querySelector('.close-button');
  const modalTitle = document.getElementById('modal-title');
  const form = document.getElementById('review-form');
  const ratingInput = document.getElementById('rating');
  const commentInput = document.getElementById('comment');
  let currentIndex = null;
  
  // LocalStorage key
  const reviewsStorageKey = 'homestayReviews';
  let reviews = JSON.parse(localStorage.getItem(reviewsStorageKey)) || {};
  
  // Render each destination card
  destinations.forEach((d, i) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <img src="${d.image}" alt="${d.name}" class="dest-img">
      <h3>${d.name}</h3>
      <div class="review-average">${getAverageRating(i)}</div>
      <button class="btn-sm add-review-btn">Add Review</button>
      <button class="btn-sm view-reviews-btn">View Reviews</button>
      <div class="reviews-list" style="display:none;"></div>
    `;
  
    // Add Review triggers modal
    li.querySelector('.add-review-btn').addEventListener('click', e => {
      e.stopPropagation();
      openModal(i);
    });
  
    // View Reviews toggles list
    li.querySelector('.view-reviews-btn').addEventListener('click', e => {
      e.stopPropagation();
      toggleReviews(i);
    });
  
    list.appendChild(li);
  });
  
  // Modal close handlers
  closeButton.addEventListener('click', closeModal);
  window.addEventListener('click', e => { if (e.target === modal) closeModal(); });
  
  // Form submission
  form.addEventListener('submit', e => {
    e.preventDefault();
    saveReview(currentIndex, +ratingInput.value, commentInput.value);
    closeModal();
    updateDisplay(currentIndex);
  
    // Refresh reviews pane if open
    const reviewsDiv = list.children[currentIndex].querySelector('.reviews-list');
    if (reviewsDiv.style.display === 'block') renderReviews(currentIndex);
  });
  
  // Open & Close Modal
  function openModal(index) {
    currentIndex = index;
    modalTitle.textContent = `Review: ${destinations[index].name}`;
    ratingInput.value = '';
    commentInput.value = '';
    modal.style.display = 'block';
  }
  function closeModal() {
    modal.style.display = 'none';
  }
  
  // Save to localStorage
  function saveReview(index, rating, comment) {
    const key = destinations[index].name;
    if (!reviews[key]) reviews[key] = [];
    reviews[key].push({ rating, comment, date: new Date().toISOString() });
    localStorage.setItem(reviewsStorageKey, JSON.stringify(reviews));
  }
  
  // Compute average
  function getAverageRating(index) {
    const key = destinations[index].name;
    const arr = reviews[key] || [];
    if (!arr.length) return 'No reviews yet';
    const avg = (arr.reduce((s, r) => s + r.rating, 0) / arr.length).toFixed(1);
    return `★ ${avg} (${arr.length})`;
  }
  
  // Update the average display
  function updateDisplay(index) {
    const avgDiv = list.children[index].querySelector('.review-average');
    avgDiv.textContent = getAverageRating(index);
  }
  
  // Toggle and render reviews
  function toggleReviews(index) {
    const li = list.children[index];
    const div = li.querySelector('.reviews-list');
    const btn = li.querySelector('.view-reviews-btn');
  
    if (div.style.display === 'block') {
      div.style.display = 'none';
      btn.textContent = 'View Reviews';
    } else {
      renderReviews(index);
      div.style.display = 'block';
      btn.textContent = 'Hide Reviews';
    }
  }
  
  function renderReviews(index) {
    const key = destinations[index].name;
    const arr = reviews[key] || [];
    const div = list.children[index].querySelector('.reviews-list');
  
    div.innerHTML = arr.length
      ? arr.slice().reverse().map(r => `
          <div class="review-item">
            <strong>★ ${r.rating}</strong>
            <p>${r.comment}</p>
            <time>${new Date(r.date).toLocaleString()}</time>
          </div>`
        ).join('')
      : 'No reviews yet.';
  }
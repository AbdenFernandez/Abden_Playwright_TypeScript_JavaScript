document.addEventListener('DOMContentLoaded', () => {
    const reviewModal = document.getElementById('review-modal');
    const closeButton = document.querySelector('.close-button');
    const reviewForm = document.getElementById('review-form');
    const destinationNameInput = document.getElementById('destination-name');
    const reviewButtons = document.querySelectorAll('.review-btn');
    const ratingDisplays = document.querySelectorAll('.rating-display');
  
    // Object to store reviews for each destination
    const reviewsData = {};
  
    // Function to open the modal
    function openModal(destinationName) {
      destinationNameInput.value = destinationName;
      reviewModal.style.display = 'block';
    }
  
    // Function to close the modal
    function closeModal() {
      reviewModal.style.display = 'none';
      reviewForm.reset();
    }
  
    // Event listeners for review buttons
    reviewButtons.forEach((button) => {
      button.addEventListener('click', (e) => {
        const destinationCard = e.target.closest('.destination-card');
        const destinationName = destinationCard.getAttribute('data-name');
        openModal(destinationName);
      });
    });
  
    // Event listener for close button
    closeButton.addEventListener('click', closeModal);
  
    // Event listener for form submission
    reviewForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const destinationName = destinationNameInput.value;
      const rating = parseFloat(document.getElementById('rating').value);
      const review = document.getElementById('review').value;
      const comment = document.getElementById('comment').value;
  
      if (!reviewsData[destinationName]) {
        reviewsData[destinationName] = [];
      }
  
      reviewsData[destinationName].push({ rating, review, comment });
  
      updateAverageRating(destinationName);
      closeModal();
    });
  
    // Function to update average rating display
    function updateAverageRating(destinationName) {
      const destinationCard = document.querySelector(
        `.destination-card[data-name="${destinationName}"]`
      );
      const ratingDisplay = destinationCard.querySelector('.rating-display');
      const reviews = reviewsData[destinationName];
      const average =
        reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;
      ratingDisplay.textContent = `Average Rating: ${average.toFixed(1)} (${reviews.length} reviews)`;
    }
  });
  
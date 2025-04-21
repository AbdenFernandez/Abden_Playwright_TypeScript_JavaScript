document.addEventListener('DOMContentLoaded', function () {
    const vendorsList = document.getElementById('vendorsList');
    const noVendors = document.getElementById('noVendors');
    const searchInput = document.getElementById('searchInput');
    const modal = document.getElementById('vendorModal');
    const vendorDetails = document.getElementById('vendorDetails');
    const closeBtn = document.querySelector('.close');

    // Add clear button functionality
    const clearDataBtn = document.getElementById('clearDataBtn');
    if (clearDataBtn) {
        clearDataBtn.addEventListener('click', function () {
            if (confirm('Are you sure? This will delete all vendor data.')) {
                clearVendors();
            }
        });
    }
    // Load vendors
    loadVendors();

    // Add event listeners
    searchInput.addEventListener('input', filterVendors);
    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (e) {
        if (e.target == modal) {
            modal.style.display = 'none';
        }
    });

    function loadVendors() {
        const vendors = JSON.parse(localStorage.getItem('vendors') || '[]');

        if (vendors.length === 0) {
            vendorsList.innerHTML = '';
            noVendors.style.display = 'block';
        } else {
            noVendors.style.display = 'none';
            displayVendors(vendors);
        }
    }

    function displayVendors(vendors) {
        vendorsList.innerHTML = '';

        vendors.forEach(vendor => {
            const vendorCard = document.createElement('div');
            vendorCard.className = 'vendor-card';

            vendorCard.innerHTML = `
                <h3>${vendor.vendor_name}</h3>
                <p>ID: ${vendor.vendor_id}</p>
                <p>Rating: ${vendor.vendor_rating}/5</p>
                <p>Products: ${vendor.products.length}</p>
                <button class="details-btn">View Details</button>
            `;

            vendorCard.querySelector('.details-btn').addEventListener('click', function () {
                showVendorDetails(vendor);
            });

            vendorsList.appendChild(vendorCard);
        });
    }

    function showVendorDetails(vendor) {
        let productsHTML = '';

        vendor.products.forEach(product => {
            productsHTML += `
                <tr>
                    <td>${product.id}</td>
                    <td>${product.name}</td>
                    <td>$${product.price}</td>
                </tr>
            `;
        });

        vendorDetails.innerHTML = `
            <h2>${vendor.vendor_name}</h2>
            <p><strong>ID:</strong> ${vendor.vendor_id}</p>
            <p><strong>Rating:</strong> ${vendor.vendor_rating}/5</p>
            
            <h3>Products</h3>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${productsHTML}
                </tbody>
            </table>
        `;

        modal.style.display = 'block';
    }
    // Add the clearVendors function
    function clearVendors() {
        localStorage.removeItem('vendors');
        loadVendors(); // Refresh the vendors list
        alert('All vendor data has been cleared');
    }

    function filterVendors() {
        const searchTerm = searchInput.value.toLowerCase();
        const vendors = JSON.parse(localStorage.getItem('vendors') || '[]');

        const filteredVendors = vendors.filter(vendor =>
            vendor.vendor_id.toLowerCase().includes(searchTerm) ||
            vendor.vendor_name.toLowerCase().includes(searchTerm)
        );

        if (filteredVendors.length === 0) {
            vendorsList.innerHTML = '<p>No vendors match your search.</p>';
        } else {
            displayVendors(filteredVendors);
        }
    }
});
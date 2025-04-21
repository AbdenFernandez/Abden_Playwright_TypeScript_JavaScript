document.addEventListener('DOMContentLoaded', function() {
    const vendorForm = document.getElementById('vendorForm');
    const addProductBtn = document.getElementById('addProductBtn');
    const productsContainer = document.getElementById('productsContainer');
    const message = document.getElementById('message');
    
    // Add event listeners
    addProductBtn.addEventListener('click', addProduct);
    vendorForm.addEventListener('submit', submitForm);
    
    function addProduct() {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        productDiv.innerHTML = `
            <input type="text" placeholder="Product ID" class="productId">
            <input type="text" placeholder="Product Name" class="productName">
            <input type="number" placeholder="Price" class="productPrice">
            <button type="button" class="removeBtn">Remove</button>
        `;
        
        productDiv.querySelector('.removeBtn').addEventListener('click', function() {
            productsContainer.removeChild(productDiv);
        });
        
        productsContainer.appendChild(productDiv);
    }
    
    function submitForm(e) {
        e.preventDefault();
        clearErrors();
        
        const vendorId = document.getElementById('vendorId').value;
        const vendorName = document.getElementById('vendorName').value;
        const vendorRating = parseInt(document.getElementById('vendorRating').value);
        
        // Validate inputs
        let isValid = true;
        
        // Check ID uniqueness
        const vendors = JSON.parse(localStorage.getItem('vendors') || '[]');
        if (vendors.some(v => v.vendor_id === vendorId)) {
            document.getElementById('idError').textContent = 'ID must be unique';
            isValid = false;
        }
        
        // Check name length
        if (vendorName.length < 5) {
            document.getElementById('nameError').textContent = 'Name must be at least 5 characters';
            isValid = false;
        }
        
        // Collect and validate products
        const products = [];
        const productElements = document.querySelectorAll('.product');
        
        productElements.forEach(prod => {
            const id = prod.querySelector('.productId').value;
            const name = prod.querySelector('.productName').value;
            const price = parseFloat(prod.querySelector('.productPrice').value);
            
            if (id && name && !isNaN(price)) {
                products.push({ id, name, price });
            }
        });
        
        // Check if at least one product exists
        if (products.length === 0) {
            document.getElementById('productsError').textContent = 'At least one product is required';
            isValid = false;
        }
        
        if (isValid) {
            const newVendor = {
                vendor_id: vendorId,
                vendor_name: vendorName,
                vendor_rating: vendorRating,
                products: products
            };
            
            // Add to storage
            vendors.push(newVendor);
            
            // Sort by rating (highest first)
            vendors.sort((a, b) => b.vendor_rating - a.vendor_rating);
            
            localStorage.setItem('vendors', JSON.stringify(vendors));
            
            // Show success message
            message.textContent = 'Vendor added successfully!';
            message.className = 'success';
            
            // Reset form
            vendorForm.reset();
            
            // Clear products except first one
            while (productsContainer.children.length > 1) {
                productsContainer.removeChild(productsContainer.lastChild);
            }
            
            // Clear first product inputs
            const firstProduct = productsContainer.firstChild;
            firstProduct.querySelector('.productId').value = '';
            firstProduct.querySelector('.productName').value = '';
            firstProduct.querySelector('.productPrice').value = '';
            
            // Hide message after 3 seconds
            setTimeout(() => {
                message.textContent = '';
                message.className = '';
            }, 3000);
        }
    }
    
    function clearErrors() {
        document.querySelectorAll('.error').forEach(err => {
            err.textContent = '';
        });
        message.textContent = '';
        message.className = '';
    }
});